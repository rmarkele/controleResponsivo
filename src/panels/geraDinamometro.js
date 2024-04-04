function geraDinamômetro(pos) {
  const scale = 0.4;

  forces = new dinamometro({
    posx: pos[0], 
    posy: pos[1], 
    w: scale * dynamometerPos[2], 
    h: scale * dynamometerPos[3] ,
    min: -100, 
    max: 100, 
    pot1: 30, 
    pot2:-20,
    titleDiv: 'dynamometer-title'
  });

  manualControl = new mySlider(
    [ pos[0] -  scale * dynamometerPos[2],   pos[1] + scale * dynamometerPos[3] * 0.2 + 18],
    [dynamometerPos[2] * 2 * scale, 5],
    [-100, 100],
    saida_controle_manual_inicial0,
    1,
    0,
    corMan
  );



  noControlCheckBox.parent("auto-man-checkboxes");
  noControlCheckBox.class("myCheckBox");
  noControlCheckBox.addClass("BigCheck");
  noControlCheckBox.changed(() => {
    noControlCheckBox.checked(true);
    pidControlCheckBox.checked(false);
    manualControlCheckBox.checked(false);
    PID = 0;
    saidaP = 0;
    saidaI = 0;
    saidaD = 0;
    manualForce = 0;
    forcaAtuador = [0, 0, 0];

    // forces.controlMode(0);
    showCenterDivGraphs = false;
  
  });

  pidControlCheckBox = createCheckbox(
    " " + strg.varPainelControlador[18],
    true
  );
  pidControlCheckBox.parent("auto-man-checkboxes");  
  pidControlCheckBox.class("myCheckBox");
  pidControlCheckBox.addClass("BigCheck");
  pidControlCheckBox.changed(() => {
    if (manualControlCheckBox.checked()) {
      saidaI = manualControl.value() * (K_I > 0);
    }
    noControlCheckBox.checked(false);
    pidControlCheckBox.checked(true);
    manualControlCheckBox.checked(false);
    showCenterDivGraphs = true;
    document.querySelector("#controller-outputs").style.display = 'flex';
    getDimensions();
    sigmoid2Fig(kSig, histSig);
    // forces.controlMode(1);
  });

  manualControlCheckBox = createCheckbox(
    " " + strg.varPainelControlador[19],
    false
  );
  manualControlCheckBox.parent("auto-man-checkboxes");
  manualControlCheckBox.class("myCheckBox");
  manualControlCheckBox.addClass("BigCheck");
  manualControlCheckBox.changed(() => {
    noControlCheckBox.checked(false);
    pidControlCheckBox.checked(false);
    manualControlCheckBox.checked(true);
    showCenterDivGraphs = true;
    document.querySelector("#controller-outputs").style.display = 'none';
    getDimensions();
    sigmoid2Fig(kSig, histSig);
    // forces.controlMode(2);
  });

  
  switch (estado_inicial_controlador) {
    case 0:
      noControlCheckBox.checked(true);
      pidControlCheckBox.checked(false);
      manualControlCheckBox.checked(false);
      showCenterDivGraphs = false;
      break;
    case 1:
      noControlCheckBox.checked(false);
      pidControlCheckBox.checked(true);
      manualControlCheckBox.checked(false);
      showCenterDivGraphs = true;
      document.querySelector("#controller-outputs").style.display = 'flex';
      getDimensions();
      sigmoid2Fig(kSig, histSig);
      break;
    case 2:
      noControlCheckBox.checked(false);
      pidControlCheckBox.checked(false);
      manualControlCheckBox.checked(true);
      showCenterDivGraphs = true;
      document.querySelector("#controller-outputs").style.display = 'none';
      getDimensions();
      sigmoid2Fig(kSig, histSig);
      break;
    default:
      noControlCheckBox.checked(false);
      pidControlCheckBox.checked(true);
      manualControlCheckBox.checked(false);
      break;
  }
}
