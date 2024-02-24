let processVariables = [];
function geraPainelVariaveis(){

  processVariables = [
    [
      document.querySelector("#table-SP-0"),
      document.querySelector("#table-SP-1"),
      document.querySelector("#table-SP-2")
    ],
    [
      document.querySelector("#table-PV-0"),
      document.querySelector("#table-PV-1"),
      document.querySelector("#table-PV-2"),
    ],
    [
      document.querySelector("#table-OP-0"),
      document.querySelector("#table-OP-1"),
      document.querySelector("#table-OP-2"),
    ]
  ]
  document.querySelectorAll(".table-SP").forEach(elt=>{
    elt.style.color = `rgb(${corSP})`;
  })
  document.querySelectorAll(".table-PV").forEach(elt=>{
    elt.style.color = corPos;
  })
  document.querySelectorAll(".table-OP").forEach(elt=>{
    elt.style.color = `rgb(${corPID})`;
  })
  
  
}

function escrevePainelPVarSis(){
  processVariables[0][1].innerHTML = nf(
    round(map(setPoint.value(), xSatMin, xSatMax, -100, 100) * 100) / 100,
    0,
    1
  );
  processVariables[0][2].innerHTML = nf(round(setPoint.value() * 100) / 100, 0, 1)

  let PVind = constrain(x[1] + deltaInd, xSatMin, xSatMax);
  
  processVariables[1][1].innerHTML =  nf(round(map(PVind, xSatMin, xSatMax, -100, 100) * 100) / 100, 0, 1);

  processVariables[1][2].innerHTML = nf(round(PVind * 100) / 100, 0, 1);
  
  
  
  if (pidControlCheckBox.checked()) {
    // Saída controlador % 
    document.querySelectorAll(".table-OP").forEach(elt=>{
      elt.style.color = `rgb(${corPID})`;
    })
    processVariables[2][1].innerHTML = nf(round(PID * 100) / 100, 0, 1);
    processVariables[2][2].innerHTML = formatToExponential(PID / 100 * PIDSat, 1000, 1);
  } else {
    // Saída controlador % 
    document.querySelectorAll(".table-OP").forEach(elt=>{
      elt.style.color = `rgb(${corMan})`;
    })
    processVariables[2][1].innerHTML = nf(round(100 * manualForce) / 100, 0, 1);
    processVariables[2][2].innerHTML =  formatToExponential(manualForce / 100 * PIDSat, 1000, 1);
  }

}