function geraPainelPerturbacao(pos) {
  let titlePerturb = strg.titlePert;
  // let listOfVarPerturb = [
  //   "Tipo: ",
  //   "Fpmax[%]:",
  //   "Fpmin[%]:",
  //   "Período[s]:",
  //   "t_alto[%]:",
  // ];
  // painelParPerturb = new Panel(
  //   titlePerturb,
  //   pos[0],
  //   pos[1],
  //   535,
  //   260 * yScale,
  //   2
  // );


  let perturbPanel = createPanel({
    panelGroup: 4,
    panelId: 'perturbation',
    listOfVar: [
      [
        {inputId: 7, inputName: 'perturb-Fmax'}, 
      // ],
      // [
        {inputId: 8, inputName: 'perturb-Fmin'},
      // ],
      // [
        {inputId: 9, inputName: 'perturb-Periodo'},
      // ],
      // [
        {inputId: 10, inputName: 'perturb-Ton'},
      ],
    ]
  })
  let perturbPanelBody = perturbPanel.querySelector(".panel-body");

  

  let perturbGraph = document.createElement('div');
  perturbPanelBody.appendChild(perturbGraph);
  perturbGraph.setAttribute('id','perturbGraph')
 

  tipoPert = createP(titlePerturb);
  tipoPert.parent('perturbation-panel-title');

  sel = createSelect();
  // sel.style("font-family", selFont);
  // sel.style('font-size', '14px');
  // sel.position(55, 20);
  for(let i = 0; i < strg.tiposPert.length; i++){
    sel.option(strg.tiposPert[i]);
  }  
  sel.selected(strg.tiposPert[sel0]);
  sel.changed(mySelectEvent);
  // painelParPerturb.div.child(sel);
  sel.parent('perturbation-panel-title');

  

  aplicaPerturb = createButton(strg.buttonPainelPert[0]);
  // aplicaPerturb.position(
  //   30,
  //   painelParPerturb.height - 40 * yScale
  // );
  // aplicaPerturb.size(170, 30 * yScale);
  // aplicaPerturb.style("font-family", selFont);
  // aplicaPerturb.style('font-size', '15px');
  document.querySelector("#perturbation-panel .input-flex-col").appendChild(aplicaPerturb.elt)
  aplicaPerturb.elt.classList.add('signal-btn');
  aplicaPerturb.elt.classList.add('perturb-btn');
  aplicaPerturb.mousePressed(() => {
    if (aplicaPerturb.html() === strg.buttonPainelPert[0]) {
      aplicaPerturb.html(strg.buttonPainelPert[1]);
      perturbMode = strg.tiposPert.indexOf(sel.value());
      if (perturbMode == 0) {
        perturbFmax = 10;
        perturbFmin = -10;
      } else {
        perturbFmax = float(variablesList[7].inp.value);
        perturbFmin = float(variablesList[8].inp.value);
      }

      perturbPeriodo = float(variablesList[9].inp.value);
      perturbton = float(variablesList[10].inp.value);
      PerturbyTickPlot = geraYAxisPreview(perturbFmin, perturbFmax);
      count = 0;
    } else {
      aplicaPerturb.html(strg.buttonPainelPert[0]);
      perturbMode = 0;
    }
  });
  if (perturbIniOff) {
    aplicaPerturb.html(strg.buttonPainelPert[0]);
  } else {
    aplicaPerturb.html(strg.buttonPainelPert[1]);
  }


  perturbSlider = new mySlider(
    [500,  100],
    [100, 5],
    [0, 100],
    50,
    0.1,
    0
  ); 
  perturbSlider.enabled=false;
}


function mySelectEvent() {
  perturbSlider.enabled=false;
  aplicaPerturb.html(strg.buttonPainelPert[0]);
  perturbMode = 0;
  Perturb = [0, 0, 0];
  let item = strg.tiposPert.indexOf(sel.value());
  let Fmax, Fmin, Periodo, ton;
  let Tmax, t;

  getDimensions();

  updateVariableListValue(perturbacao_Fmax0,7);
  updateVariableListValue(perturbacao_Fmin0,8);
  updateVariableListValue(perturbacao_Periodo0,9);
  updateVariableListValue(perturbacao_t_on0,10);

  switch (item) {
    case 0:
      for (i = 7; i < 11; i++) {
        hideVariableList(i);
        Fmax = 10;
        Fmin = -10;
        Periodo = 0;
        ton = 0;
        for (let i = 0; i < perturbGraphPos[2] / plotSkip; i++) {
          PerturbPreviewPlot[i] = 0;
        }
      }
      break;

    case 1:
      for (i = 7; i < 11; i++) {
        hideVariableList(i);
      }
      showVariableList(7);
      showVariableList(8);
      showVariableList(9);

      Fmax = float(variablesList[7].inp.value);
      Fmin = float(variablesList[8].inp.value);
      Periodo = float(variablesList[9].inp.value);
      Tmax = max(10, 2 * Periodo);
      for (let i = 0; i < perturbGraphPos[2] / plotSkip; i++) {
        t = map(i, 0, perturbGraphPos[2] / plotSkip, 0, Tmax);
        [PerturbPreviewPlot[i]] = ondaSenoidal(t / Ts, Fmax, Fmin, Periodo);
      }

      break;

    case 2:
      for (i = 7; i < 11; i++) {
        showVariableList(i);
      }

      Fmax = float(variablesList[7].inp.value);
      Fmin = float(variablesList[8].inp.value);
      Periodo = float(variablesList[9].inp.value);
      ton = float(variablesList[10].inp.value);
      Tmax = max(10, 2 * Periodo);
      for (let i = 0; i < perturbGraphPos[2] / plotSkip; i++) {
        t = map(i, 0, perturbGraphPos[2] / plotSkip, 0, Tmax);
        [PerturbPreviewPlot[i]] = ondaQuadrada(t / Ts, Fmax, Fmin, Periodo, ton);
      }
      break;

    case 3:
      for (i = 7; i < 10; i++) {
        showVariableList(i);
      }
      variablesList[10].div.hide();
      hideVariableList(10);

      Fmax = float(variablesList[7].inp.value);
      Fmin = float(variablesList[8].inp.value);
      Periodo = float(variablesList[9].inp.value);
      Tmax = max(10, 2 * Periodo);
      for (let i = 0; i < perturbGraphPos[2] / plotSkip; i++) {
        t = map(i, 0, perturbGraphPos[2] / plotSkip, 0, Tmax);
        [PerturbPreviewPlot[i]] = ondaTriangular(t / Ts, Fmax, Fmin, Periodo);
      }
      break;

    case 4:
      for (i = 7; i < 10; i++) {
        showVariableList(i);
      }
      hideVariableList(10);

      Fmax = float(variablesList[7].inp.value);
      Fmin = float(variablesList[8].inp.value);
      Periodo = float(variablesList[9].inp.value);
      Tmax = max(10, 2 * Periodo);
      for (let i = 0; i < perturbGraphPos[2] / plotSkip; i++) {
        t = map(i, 0, perturbGraphPos[2] / plotSkip, 0, Tmax);
        [PerturbPreviewPlot[i]] = denteDeSerra(t / Ts, Fmax, Fmin, Periodo);
      }

      break;

    case 5:
      for (i = 7; i < 11; i++) {
        hideVariableList(i);
      }
      showVariableList(7);
      showVariableList(9);

      Fmax = float(variablesList[7].inp.value);
      Fmin = 0;
      Periodo = float(variablesList[9].inp.value);
      Tmax = max(10, 2 * Periodo);
      for (let i = 0; i < perturbGraphPos[2] / plotSkip; i++) {
        t = map(i, 0, perturbGraphPos[2] / plotSkip, 0, Tmax);
        [PerturbPreviewPlot[i]] = tremDeImpulsos(t / Ts, Fmax, Periodo);
      }

      break;

    case 6:
      for (i = 7; i < 11; i++) {
        hideVariableList(i);
      }
      showVariableList(7);
      showVariableList(8);

      Fmax = float(variablesList[7].inp.value);
      Fmin = float(variablesList[8].inp.value);
      for (let i = 0; i < perturbGraphPos[2] / plotSkip; i++) {
        PerturbPreviewPlot[i] = random(Fmin, Fmax);
      }

      break;

    case 7:
      perturbMode=7;
      for (i = 7; i < 11; i++) {
        hideVariableList(i);
      }
      showVariableList(7);
      showVariableList(8);
      Periodo = 0;
      ton = 0;
      PerturbPreviewPlot = [];

      Fmax = float(variablesList[7].inp.value);
      Fmin = float(variablesList[8].inp.value);
      PerturbyTickPlot = geraYAxisPreview(Fmin, Fmax);

      //gera slider para perturbação manual
      // perturbSlider = new mySlider(
      //   [perturbGraphPos[0],  perturbGraphPos[1]],
      //   [perturbGraphPos[2], 5],
      //   [Fmin, Fmax],
      //   perturbacao_manual_inicial0,
      //   0.1,
      //   0
      // ); 
      perturbSlider.pos = [perturbGraphPos[0] -20,  perturbGraphPos[1] - perturbGraphPos[3] * 0.5];
      perturbSlider.size = [perturbGraphPos[2] + 10,  5];
      perturbSlider.range = [Fmin,  Fmax];
      perturbSlider.value(constrain(0,Fmin,Fmax));
      perturbSlider.enabled = true;
      break;

    default:
      break;
  }

  PerturbyTick = geraYAxisPreview(Fmin, Fmax);
  PerturbxTick = geraXAxisPreview(max(2 * Periodo, 10));
}

function escrevePainelPerturb() {
  if ( strg.tiposPert.indexOf(sel.value()) == 7 && mostraPerturbPrev) {
    
    perturbSlider.show();
    push();
    fill(corPert);
    strokeWeight(1);
    noStroke();
    textSize(15);
    textStyle(BOLD);
    let posx = map(
      perturbSlider.value(),
      perturbSlider.range[0],
      perturbSlider.range[1],
      perturbSlider.pos[0],
      perturbSlider.pos[0] + perturbSlider.size[0]
    );
    text(
      strg.varPainelPert[4] + " " + nf(perturbSlider.value(), 0, 2),
      posx - 30,
      perturbSlider.pos[1] - 30
    );
    pop();
  }
}
