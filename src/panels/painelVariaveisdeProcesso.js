let processVariables = [];
function geraPainelVariaveis(){

  processVariables = [
    [
      document.querySelector("#label-SP"),
      document.querySelector("#value-SP"),
      // document.querySelector("#table-SP-2")
    ],
    [
      document.querySelector("#label-PV"),
      document.querySelector("#value-PV"),
      // document.querySelector("#table-PV-2"),
    ],
    [
      document.querySelector("#label-OP"),
      document.querySelector("#value-OP"),
      // document.querySelector("#table-OP-2"),
    ]
  ]
  document.querySelector("#variable-SP").style.color = `rgb(${corSP})`;
  document.querySelector("#variable-PV").style.color = corPos;
  document.querySelector("#variable-OP").style.color = `rgb(${corPID})`;
  
  
}

function escrevePainelPVarSis(){
  processVariables[0][1].innerHTML = nf(round(setPoint.value() * 100) / 100, 0, 1)

  let PVind = constrain(x[1] + deltaInd, xSatMin, xSatMax);

  processVariables[1][1].innerHTML = nf(round(PVind * 100) / 100, 0, 1);
  
  
  
  if (pidControlCheckBox.checked()) {
    // Saída controlador % 
    document.querySelector("#variable-OP").style.color =`rgb(${corPID})`
    processVariables[2][1].innerHTML = nf(round(PID * 100) / 100, 0, 1);
  } else {
    // Saída controlador % 
    document.querySelector("#variable-OP").style.color =`rgb(${corMan})`
    processVariables[2][1].innerHTML = nf(round(100 * manualForce) / 100, 0, 1);
  }

}