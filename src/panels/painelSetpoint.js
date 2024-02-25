function geraPainelSetpoint() {
  // let titleSetpoint = strg.titleSetpoint;
  let listOfVarSetpoint = strg.varPainelSetpoint;
  // painelParSetpoint = new Panel(
  //   titleSetpoint,
  //   pos[0],
  //   pos[1],
  //   535,
  //   260 * yScale,
  //   2
  // );
  
  let setPointPanel = createPanel({
    panelGroup: 3,
    panelId: 'setpoint',
    listOfVar: [
      [
        {inputId: 11, inputName: 'setpoint-Fmax'}, 
      // ],
      // [
        {inputId: 12, inputName: 'setpoint-Fmin'},
      // ],
      // [
        {inputId: 13, inputName: 'setpoint-Periodo'},
      // ],
      // [
        {inputId: 14, inputName: 'setpoint-Ton'},
      ],
    ]
  })
  let setPointPanelBody = setPointPanel.querySelector(".panel-body");

  
  let setPointGraph = document.createElement('div');
  setPointPanelBody.appendChild(setPointGraph);
  setPointGraph.setAttribute('id','setPointGraph')
  // document.querySelector('#setpoint-panel-title').innerHTML = listOfVarSetpoint[0];

  tipoSetpoint = createP(listOfVarSetpoint[0]);
  tipoSetpoint.parent('setpoint-panel-title');
  
  selSet = createSelect();
  // selSet.style("font-family", selFont);
  // selSet.style('font-size', '14px');
  // selSet.position(55 + 335-7, 20);
  for(let i = 0; i < strg.tiposSetpoint.length; i++){
    selSet.option(strg.tiposSetpoint[i]);
  }  
  selSet.selected(strg.tiposSetpoint[selSet0]);
  selSet.changed(setpointSelectEvent);
  // selSet.style("position", "relative");
  
  // painelParSetpoint.div.child(selSet);
  selSet.parent('setpoint-panel-title');
  
  aplicaSetpoint = createButton(strg.buttonPainelSetpoint[0]);
  document.querySelector("#setpoint-panel .input-flex-col").appendChild(aplicaSetpoint.elt)
  aplicaSetpoint.elt.classList.add('signal-btn');
  

  
  aplicaSetpoint.mousePressed(() => {
    stopTimer();
    resetTimer();
    updateTimer();
    startTimer();
    resetHolder();
    updateHolder();
    if (aplicaSetpoint.html() === strg.buttonPainelSetpoint[0]) {
      aplicaSetpoint.html(strg.buttonPainelSetpoint[1]);
      setPointMode = strg.tiposSetpoint.indexOf(selSet.value());
      setPointFmax = float(variablesList[11].inp.value);
      setPointFmin = float(variablesList[12].inp.value);

      setPointPeriodo = float(variablesList[13].inp.value);
      setPointton = float(variablesList[14].inp.value);
      setPointCount = 0;

      
      setPoint.size = [meters2pixels(setPointFmax) - meters2pixels(setPointFmin), 5];
      setPoint.range = [setPointFmin, setPointFmax]; 
    } else {
      aplicaSetpoint.html(strg.buttonPainelSetpoint[0]);
      setPointMode = 0;
    }
  });

}

function setpointSelectEvent() {
  aplicaSetpoint.html(strg.buttonPainelSetpoint[0]);
  setPointMode = 0;
  let item =  strg.tiposSetpoint.indexOf(selSet.value());
  let Fmax, Fmin, Periodo, ton;
  let Tmax, t;

  getDimensions();

  updateVariableListValue(setpoint_Fmax0,11);
  updateVariableListValue(setpoint_Fmin0,12);
  updateVariableListValue(setpoint_Periodo0,13);
  updateVariableListValue(setpoint_t_on0,14);
  aplicaSetpoint.show();
  switch (item) {
    case 0:
      setPointMode = 0;
      for (i = 11; i < 15; i++) {
        hideVariableList(i);
      }

      showVariableList(11);
      showVariableList(12);
      Periodo = 0;
      ton = 0;
      SetpointPreviewPlot = [0];
      aplicaSetpoint.hide();

      break;

    case 1:
      for (i = 11; i < 15; i++) {
        hideVariableList(i);
      }
      showVariableList(11);
      showVariableList(12);
      showVariableList(13);

      Fmax = float(variablesList[11].inp.value);
      Fmin = float(variablesList[12].inp.value);
      Periodo = float(variablesList[13].inp.value);
      Tmax = max(10, 2 * Periodo);
      for (let i = 0; i < setPointGraphPos[2] / setpointTimeScale; i++) {
        t = map(i, 0, setPointGraphPos[2] / setpointTimeScale, 0, Tmax);
        [SetpointPreviewPlot[i]] = ondaSenoidal(t / Ts, Fmax, Fmin, Periodo);
      }

      break;

    case 2:
      for (i = 11; i < 15; i++) {
        showVariableList(i);
      }
      Fmax = float(variablesList[11].inp.value);
      Fmin = float(variablesList[12].inp.value);
      Periodo = float(variablesList[13].inp.value);
      ton = float(variablesList[14].inp.value);
      Tmax = max(10, 2 * Periodo);
      for (let i = 0; i < setPointGraphPos[2] / setpointTimeScale; i++) {
        t = map(i, 0, setPointGraphPos[2] / setpointTimeScale, 0, Tmax);
        [SetpointPreviewPlot[i]] = ondaQuadrada(t / Ts, Fmax, Fmin, Periodo, ton);
      }
      break;

    case 3:
      for (i = 11; i < 14; i++) {
        showVariableList(i);
      }
      hideVariableList(14);

      Fmax = float(variablesList[11].inp.value);
      Fmin = float(variablesList[12].inp.value);
      Periodo = float(variablesList[13].inp.value);
      Tmax = max(10, 2 * Periodo);
      for (let i = 0; i < setPointGraphPos[2] / setpointTimeScale; i++) {
        t = map(i, 0, setPointGraphPos[2] / setpointTimeScale, 0, Tmax);
        [SetpointPreviewPlot[i]] = ondaTriangular(t / Ts, Fmax, Fmin, Periodo);
      }
      break;

    case 4:
      for (i = 11; i < 15; i++) { 
        showVariableList(i);
      }
      hideVariableList(14);

      Fmax = float(variablesList[11].inp.value);
      Fmin = float(variablesList[12].inp.value);
      Periodo = float(variablesList[13].inp.value);
      Tmax = max(10, 2 * Periodo);
      for (let i = 0; i < setPointGraphPos[2] / setpointTimeScale; i++) {
        t = map(i, 0, setPointGraphPos[2] / setpointTimeScale, 0, Tmax);
        [SetpointPreviewPlot[i]] = denteDeSerra(t / Ts, Fmax, Fmin, Periodo);
      }

      break;

    case 5:
      for (i = 11; i < 15; i++) {
        hideVariableList(i)
      }
      showVariableList(11);
      showVariableList(13);

      Fmax = float(variablesList[11].inp.value);
      Fmin = 0;
      Periodo = float(variablesList[13].inp.value);
      Tmax = max(10, 2 * Periodo);
      for (let i = 0; i < setPointGraphPos[2] / setpointTimeScale; i++) {
        t = map(i, 0, setPointGraphPos[2] / setpointTimeScale, 0, Tmax);
        [SetpointPreviewPlot[i]] = tremDeImpulsos(t / Ts, Fmax, Periodo);
      }
     x
      break;

    case 6:
      for (i = 11; i < 15; i++) {
        hideVariableList(i);
      }
      showVariableList(11);
      showVariableList(12);

      Fmax = float(variablesList[11].inp.value);
      Fmin = float(variablesList[12].inp.value);
      Periodo = 10;
      for (let i = 0; i < setPointGraphPos[2] / setpointTimeScale; i++) {
        SetpointPreviewPlot[i] = random(Fmin, Fmax);
      }

      break;

    default:
      break;
  }

  SetpointxTick = geraXAxisPreview(max(2 * Periodo, 10));
}
