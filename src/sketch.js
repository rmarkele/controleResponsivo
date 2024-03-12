function setup() {
  
  getDimensions();
  textSize(txtSize);

  let w = canvasBounds.right - canvasBounds.left;
  let h = canvasBounds.bottom - canvasBounds.top;
  let yref = processSize[1];

  if(w>850){
    posYScale= 25;
    heightScale = 13;
    showleftDiv = true;
    showCenterDiv = true;
    showRightDiv = true;
  } else{
    posYScale = 15;
    heightScale = 8;
    showleftDiv = false;
    showCenterDiv = true;
    showRightDiv = false;
  }

  let canvas = createCanvas(w, h);
  canvas.parent(document.querySelector("#canvas-container"));
  
  
 
  geraSistema();
  

  idiomaSelect();

  cenarioSelectEvent();
  

  updatePar();

  
  PIDTick = geraYAxisPreview(-100, 100);
  for (let i = 0; i < 5; i++) {
    yTick[i] = -16 + i * 8;
    erroTick[i] = -32 + i * 16;
  }

  geraIHM();
  updateIHM();

  updateComponentes();
  
  //Diagrama de Corpo Livre
  Fpert = new forcaDiagrama(
    xCar + Lcar,
    yref - Hcar / 2,
    Lcar,
    Perturb[2],
    perturbFmax,
    corPert
  );
  Fpid = new forcaDiagrama(
    xCar,
    (1 / 4) * yref,
    Lcar,
    PID,
    K_P * 12,
    corAtuador
  );
  Fmol = new forcaDiagrama(xCar, spring.posY, Lcar, 0, K * 12, corMol);
  Famo = new forcaDiagrama(xCar, damper.posY, Lcar, 0, C * 24, corAmo);

  showIHM();

  SetpointyTick = geraYAxisPreview(-16, 16);
  calculaSPBI();
  calculaSaidaBiestavel();
  getIndexes();
  atualizaStrings();
  
}

function draw() {
  background(220);
  
  let resetAtSteps =
    (setPointMode == 2 && perturbMode == 0) ||
    (setPointMode == 2 && perturbMode == 7) ||
    (setPointMode == 2 &&
      perturbMode == 2 &&
      (setPointton == 0 || setPointton == 100)) ||
    (setPointMode == 2 &&
      perturbMode == 2 &&
      (perturbton == 0 || perturbton == 100)) ||
    (setPointMode == 0 && perturbMode == 2);

  if ((timer && resetAtSteps && !stability) || (timer && !resetAtSteps)) {
    seconds += Ts;
    updateTimer();
  }

  frameRateData.push(frameRate());
  let Nframe = frameRateData.length;
  if (Nframe > 200) {
    frameRateData.splice(0, Nframe - 200);
  }
  
  fpsExpected.innerHTML = `${strg.fpsEsperado}: ${frameRate0}`;
  fpsMean.innerHTML = `${strg.fpsMedio}: ${round(calculaMedia(frameRateData) * 10) / 10}`;
  


  desenhaSistema();
  showIHM();
  plotaGraficos();
  desenhaDCL();

  let step = false,
    pertStep = false;
  if (perturbMode !== 7) {
    let pert;
    [pert, pertStep] = geraSinalAplicado(
      perturbMode,
      count,
      perturbFmax,
      perturbFmin,
      perturbPeriodo,
      perturbton
    );

    Perturb.push((pert * PIDSat) / 100);
    Perturb.splice(0, 1);

    // PerturbPlot.push(Perturb[2]);
  } else {
    let pert = perturbSlider.value();

    Perturb.push((pert * PIDSat) / 100);
    Perturb.splice(0, 1);

    // PerturbPlot.push(Perturb[2]);
  }

  if (setPointMode !== 0 && !noControlCheckBox.checked()) {
    let sp;
    [sp, step] = geraSinalAplicado(
      setPointMode,
      setPointCount,
      setPointFmax,
      setPointFmin,
      setPointPeriodo,
      setPointton
    );
    setPoint.value(sp);

    setPointCount++;
  }

  count++;

  if ((step || pertStep) && resetAtSteps) {
    if (stability) {
      setHolder(formatTime(seconds));
    } else {
      setHolder("> " + seconds.toFixed(1));
    }
    updateHolder();
    stopTimer();
    resetTimer();
    updateTimer();
    startTimer();
    timerElement.style.backgroundColor = "#eee";
    // stabilityCounter=0;
  }

  calculaPID();
  calculaNovaPosicao();

}

function reset() {
  stopTimer();
  resetTimer();
  updateTimer();
  cenarioSelectEvent();
  updatePar();
  updateIHM();
  updateComponentes();
  startTimer();

  resetHolder();
  updateHolder();
  timerElement.style.backgroundColor = "#eee";
}

function softReset() {
  stopTimer();
  resetTimer();
  updateTimer();

  resetHolder();
  updateHolder();
  timerElement.style.backgroundColor = "#eee";

  DetaPIDmax = -Infinity;

  saidaI = 0;
  saidaD = 0;
  PID = 0;
  atrasoPID = 0;
  forcaAtuador = [0, 0, 0];
  Perturb = [0, 0, 0];
  x[1] = posicao_inicial0;
  x[0] = posicao_inicial0 - (velocidade_inicial0 * Ts) / 2;
  erro = 0;
  count = 0;
  setPointCount = 0;
  stabilityCounter = 0;
  startTimer();
  xPlot = [];
  setPointPlot = [];
  setPointAltoPlot = [];
  setPointBaixoPlot = [];
  PIDPlot = [];
  atuadorPlot = [];
  manualPlot = [];
  PerturbPlot = [];
}

function calculaMedia(Arr) {
  N = Arr.length;
  let media = 0;
  for (let i = N - 1; i >= 0; i--) {
    media += Arr[i];
  }

  return media / N;
}

function updatePar() {
  DetaPIDmax = -Infinity;
  frameRate(frameRate0);
  Ts = 1 / frameRate0;
  saidaI = 0;
  saidaD = 0;
  PID = 0;
  atrasoPID = 0;
  forcaAtuador = [0, 0, 0];
  Perturb = [0, 0, 0];

  perturbFmax = checkForNaN(perturbacao_Fmax0, 10);
  perturbFmin = checkForNaN(perturbacao_Fmin0, -10);
  perturbPeriodo = checkForNaN(perturbacao_Periodo0, 10);
  perturbton = checkForNaN(perturbacao_t_on0, 50);
  PerturbyTickPlot = geraYAxisPreview(perturbFmin, perturbFmax);
  count = 0;
  setPointCount = 0;
  stabilityCounter = 0;

  //setPointMode = selSet0;
  setPointFmax = setpoint_Fmax0;
  setPointFmin = setpoint_Fmin0;
  setPointPeriodo = setpoint_Periodo0;
  setPointton = setpoint_t_on0;
  setPointCount = 0;

  x[1] = posicao_inicial0;
  x[0] = posicao_inicial0 - (velocidade_inicial0 * Ts) / 2;
  erro = 0;



  xPlot = [];
  setPointPlot = [];
  setPointAltoPlot = [];
  setPointBaixoPlot = [];
  PIDPlot = [];
  atuadorPlot = [];
  manualPlot = [];
  PerturbPlot = [];
  

}

function updateComponentes() {
  damper.update(strg.amortecedor + " = " + C);
  spring.update(strg.mola + " = " + K);
  car.update(strg.massa + " = " + m);
}
