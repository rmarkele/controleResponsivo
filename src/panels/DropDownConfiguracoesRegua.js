function geradrpDwnRegua(pos){  
  
  
  BPCheck = createCheckbox(" " +strg.configRegua[1], true);
  BPCheck.parent("panels-group-5");
  BPCheck.class("radio-panel");
  BPCheck.changed(() => {
    mostraBP = BPCheck.checked();
  });
  
  BMCheck = createCheckbox(" " +strg.configRegua[2], true);
  BMCheck.parent("panels-group-5");
  BMCheck.class("radio-panel");
  BMCheck.changed(() => {
    mostraBM = BMCheck.checked();
  });
  
  if(controlador){
    BPCheck.hide();
    BMCheck.show();
  }
  else{
    BPCheck.show();
    BMCheck.hide();
  }

  IndPosCheck = createCheckbox(" " +strg.configRegua[3], true);
  IndPosCheck.parent("panels-group-5");
  IndPosCheck.class("radio-panel");
  IndPosCheck.changed(() => {
    mostraIndPos = IndPosCheck.checked();
  });

  LinhaSPCheck = createCheckbox(" " +strg.configRegua[4], true);
  LinhaSPCheck.parent("panels-group-5");
  LinhaSPCheck.class("radio-panel");
  LinhaSPCheck.changed(() => {
    mostraLinhaSP = LinhaSPCheck.checked();
  });

  LinhaPosReal = createCheckbox(" " +strg.configRegua[5], true);
  LinhaPosReal.parent("panels-group-5");
  LinhaPosReal.class("radio-panel");
  LinhaPosReal.changed(() => {
    mostraPosReal = LinhaPosReal.checked();
  });

  LinhaEnvelope = createCheckbox(" " +strg.configRegua[7], true);
  LinhaEnvelope.parent("panels-group-5");
  LinhaEnvelope.class("radio-panel");

  EVlight = document.querySelector('#light-EV')
  LinhaEnvelope.changed(() => {
    mostraEnvelope = LinhaEnvelope.checked();
    if(mostraEnvelope){
      EVlight.style.display='block';
    } else{
      EVlight.style.display='none';
    }
    
  });

  
  if (mostraBP) {
    BPCheck.checked(true);
  } else {
    BPCheck.checked(false);
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
    EVlight.style.display='block';
  } else {
    LinhaEnvelope.checked(false);
    EVlight.style.display='none';
  }
  
}