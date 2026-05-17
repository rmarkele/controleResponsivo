function updateIHM() {
  let xref = processSize[0];
  let yref = processSize[1];
  let wref = processSize[2];
  let href = processSize[3]

  //Processo
  updateVariableListValue(formatToExponential(m, 1000), 0)
  updateVariableListValue(formatToExponential(K, 1000), 1)
  updateVariableListValue(formatToExponential(C, 1000), 2)

  //PID
  updateVariableListValue(K_P, 3);
  updateVariableListValue(K_I, 4);
  updateVariableListValue(K_D, 5);
  updateVariableListValue(Ti, 104);
  updateVariableListValue(Td, 105);
  updateVariableListValue(Fc0, 15);
  updateVariableListValue(Imax, 24);
  updateVariableListValue(eLim, 25);
  updateVariableListValue(DLim, 26);

  // updateInputValue(Ti,TiInp)
  // updateInputValue(Td,TdInp)
  updateVariableListValue(freqCorte, 23);

  //Biestável
  updateVariableListValue(biestavel.saidaAlta, 20);
  updateVariableListValue(biestavel.saidaBaixa, 21);
  updateVariableListValue(biestavel.bandaMorta, 22);

  //Atuador
  updateVariableListValue(formatToExponential(PIDSat, 1000), 6);
  updateVariableListValue(kSig, 18);
  updateVariableListValue(histSig, 19);
  updateVariableListValue(atrasoTransp, 27);

  //Indicador de Posição
  updateVariableListValue(xSatMax, 16);
  updateVariableListValue(xSatMin, 17);
  updateVariableListValue(deltaInd, 28);

  //Envelope
  updateVariableListValue(envelope[0], 29);
  updateVariableListValue(envelope[1], 30);


  switch (estado_inicial_controlador) {
    case 0:
      noControlCheckBox.checked(true);
      pidControlCheckBox.checked(false);
      manualControlCheckBox.checked(false);
      showCenterDivGraphs = false;
      // forces.controlMode(0);
      break;
    case 1:
      noControlCheckBox.checked(false);
      pidControlCheckBox.checked(true);
      manualControlCheckBox.checked(false);
      showCenterDivGraphs = true;
      document.querySelector("#controller-outputs").style.display = 'flex';
      getDimensions();
      sigmoid2Fig(kSig, histSig);
      // forces.controlMode(1);
      break;
    case 2:
      noControlCheckBox.checked(false);
      pidControlCheckBox.checked(false);
      manualControlCheckBox.checked(true);
      showCenterDivGraphs = true;
      document.querySelector("#controller-outputs").style.display = 'none';
      getDimensions();
      sigmoid2Fig(kSig, histSig);
      // forces.controlMode(2);
      break;
    default:
      noControlCheckBox.checked(false);
      pidControlCheckBox.checked(true);
      manualControlCheckBox.checked(false);
      break;
  }


  if (!modoAcao) {
    acaoDireta.checked(false);
  } else {
    acaoDireta.checked(true);
  }

  const controllerEquantion = document.querySelector("#controller-panel .panel-body .controller-equation");

  if (!isaMode) {
    isaModeCheckBox.checked(false);
    enableVariableList(4);
    enableVariableList(5);
    disableVariableList(104);
    disableVariableList(105);
    controllerEquantion.innerHTML = `
    OP(t) = Kp &middot;e(t) + Ki &middot; <span>&int; </span>e(t)dt + Kd &middot; ė(t) + OPo
  `;
  } else {
    isaModeCheckBox.checked(true);
    disableVariableList(4);
    disableVariableList(5);
    enableVariableList(104);
    enableVariableList(105);
    controllerEquantion.innerHTML = `
     OP(t) = Kp [e(t) + 1/Ti &middot; <span>&int; </span>e(t)dt + Td &middot; ė(t)] + OPo
  `;
  }



  if (!modoAcaoMotor) {
    acaoDiretaMotor.checked(false);
  } else {
    acaoDiretaMotor.checked(true);
  }

  if (!hideSystem) {
    hideSystemCheckBox.checked = true;
  } else {
    hideSystemCheckBox.checked = false;
  }

  if (mostraBP) {
    BPCheck.checked(true);
  } else {
    BPCheck.checked(false);
  }


  if (mostraBM) {
    BMCheck.checked(true);
  } else {
    BMCheck.checked(false);
  }


  if (mostraIndPos) {
    IndPosCheck.checked(true);
  } else {
    IndPosCheck.checked(false);
  }

  if (mostraLinhaSP) {
    LinhaSPCheck.checked(true);
  } else {
    LinhaSPCheck.checked(false);
  }

  if (mostraPosReal) {
    LinhaPosReal.checked(true);
  } else {
    LinhaPosReal.checked(false);
  }

  if (mostraEnvelope) {
    LinhaEnvelope.checked(true);
    EVlight.style.display = 'block';
  } else {
    LinhaEnvelope.checked(false);
    EVlight.style.display = 'none';
  }

  if (showPvGraph) {
    ShowGraphPvCheck.checked(true)
  } else {
    ShowGraphPvCheck.checked(false)
  }

  if (showGraphs) {
    ShowGraphsCheck.checked(true)
  } else {
    ShowGraphsCheck.checked(false)
  }



  eliminaSurtoCheckBox.checked(eliminaSurto === 1);
  filtroPBCheckBox.checked(ativaFiltro === 1);
  filtroPBCheckBoxChanged();

  sel.value(strg.tiposPert[sel0]);
  mySelectEvent();

  if (perturbIniOff) {
    perturbMode = 0;
    aplicaPerturb.html(strg.buttonPainelPert[0]);
  } else {
    perturbMode = sel0;
    aplicaPerturb.html(strg.buttonPainelPert[1]);
  }


  //setpoint
  selSet.selected(strg.tiposSetpoint[selSet0]);
  setpointSelectEvent();

  if (setpoint_auto_inibido) {
    setPointMode = 0;
    aplicaSetpoint.html(strg.buttonPainelSetpoint[0]);
  } else {
    setPointMode = selSet0;
    aplicaSetpoint.html(strg.buttonPainelSetpoint[1]);
  }

  setPoint.pos = [
    meters2pixels(setPointFmin),
    yref + posYScale + 4.2 * heightScale,
  ];
  setPoint.size = [meters2pixels(setPointFmax) - meters2pixels(setPointFmin), 5];
  setPoint.range = [setPointFmin, setPointFmax];
  setPoint.value(setpoint_manual_inicial0);
  manualControl.value(saida_controle_manual_inicial0);

  tipoAtuador.selected(strg.titlePainelMotor[atuador]);
  //tipoAtuador.selected(selTipoAtuador);
  atuadorChanged();

  // atuadorPID.selected(selAtuadorPID);
  // atuadorPIDChanged();

  tipoControlador.selected(strg.titlePainelControlador[controlador]);
  controladorChanged();

  calculaSPBI();
  calculaSaidaBiestavel();
}