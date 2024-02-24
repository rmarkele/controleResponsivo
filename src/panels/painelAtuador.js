function geraPainelAtuador(pos){
  let listOfVarAtuador = strg.varPainelMotor;

  createPanel({
    panelGroup: 2,
    panelId: 'actuator',
    listOfVar: [
      [
        {inputId: 6, inputName: 'Fcmax'}, 
        {inputId: 18, inputName: 'Ksig'}
      ],
      [
        {inputId: 27, inputName: 'Tmorto'}, 
        {inputId: 19, inputName: 'histSig'}
      ]
    ]
  })

  acaoDiretaMotor = createCheckbox(" " + listOfVarAtuador[3], false);
  acaoDiretaMotor.parent("actuatorCheckBoxes");
  acaoDiretaMotor.class("BigCheck");
  acaoDiretaMotor.changed(() => {
    modoAcaoMotor = !modoAcaoMotor;
    sigmoid2Fig(kSig, histSig);
    forcaAtuador = [0,0,0];
    PID = 0;
  });

  if (modoAcaoMotor) {
    acaoDiretaMotor.checked(true);
  }

  
  tipoAtuador = createSelect();
  tipoAtuador.parent("actuator-panel-title");
  
  for(let i = 0; i < strg.titlePainelMotor.length; i++){
    tipoAtuador.option(strg.titlePainelMotor[i]);
  }
  tipoAtuador.selected(strg.titlePainelMotor[atuador]);
  tipoAtuador.changed(atuadorChanged);
  
   switch (atuador) {
    case 0:      
      sigmoid2Fig(kSig, histSig);
      hideVariableList(18);
      hideVariableList(19);
      break;
    case 1:
      sigmoid2Fig(kSig, histSig);
      showVariableList(18);
      showVariableList(19);
      break;
    default:
      break;     
    }  
}

function atuadorChanged(){
      PID = 0;
      atrasoPID=0
      saidaI=0;
      manualForce = 0;
      forcaAtuador = [0, 0, 0];
    let item = tipoAtuador.value();
    switch (item) {
      case strg.titlePainelMotor[0]:
        atuador = 0;
        hideVariableList(18);
        hideVariableList(19);
        sigmoid2Fig(kSig, histSig);
        break;
      case strg.titlePainelMotor[1]:
        atuador = 1;
        sigmoid2Fig(kSig, histSig);
        showVariableList(18);
        showVariableList(19);
        break;
      default:
        break;
    }
}