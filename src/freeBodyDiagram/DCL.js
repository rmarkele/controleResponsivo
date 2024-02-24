function desenhaDCL() {
  if(!hideSystem){
    let forceMol = -K * x[1];
    let forceAmo;
    forceAmo = ((-C * (x[1] - x[0])) / Ts);
  
    const nConstrain = 1;
    // const multF = 100;
    let Fmax = PIDSat;
  
    
    Fpert.Lmax = Fmax; //min(Fmax, abs(perturbFmax) / 0.3);
    Fpert.L = constrain(multF * Perturb[2], -nConstrain * Fmax * 1.5, nConstrain * Fmax * 1.5);
    Fpert.posX = xCar  + car.deltaX + Lcar;
    Fpert.show();
  
    Fmol.Lmax = Fmax; 
    Fmol.posX = xCar  + car.deltaX;
    Fmol.L = constrain(multF * forceMol, -nConstrain * Fmax * 1.5, nConstrain * Fmax * 1.5); 
    Fmol.show();
  
    Famo.Lmax = Fmax; 
    Famo.posX = xCar  + car.deltaX;
    Famo.L = constrain(multF * forceAmo, -nConstrain * Fmax * 1.5, nConstrain * Fmax * 1.5); 
    Famo.show();
    
    Fpid.Lmax = Fmax; 
    Fpid.L = constrain(
      multF * (forcaAtuador[2] / 100 * PIDSat),
      -nConstrain * Fmax * 1.5,
      nConstrain * Fmax * 1.5
    ); 
    Fpid.posX = xCar  + car.deltaX;
    Fpid.show();
  }
}

function geraPainelDCL(pos){

  //gera caixa seletora para ocultar o sistema
  // hideSystemDiv=createDiv(
  //   '<div>'+
  //     '<input type="checkbox" name="DCL-mult" value="0" id="SystemView">'+
  //     `<label for="SystemView">${strg.SystemView}</label>`+
  //   '</div>'  
  // );

  // hideSystemDiv.class('radio-panel');
  // // hideSystemDiv.parent('nav-center')

  hideSystemDiv=document.querySelector("#hide-system");
  

  hideSystemCheckBox = document.querySelector("#SystemView");
  hideSystemCheckBox.addEventListener('click',(e)=>{
    hideSystem=e.target.checked;
  })

  if(hideSystem){
    hideSystemCheckBox.checked = true;
  }else{
    hideSystemCheckBox.checked = false;
  }

  let wdth=400;
  // let DCL_mult=createDiv(
  //   `<h4>${strg.varPainelForcasAtuantes[0]}:</h4>`+
  //   '<div>'+
  //     '<input type="radio" name="DCL-mult" value="0" id="x0">'+
  //     `<label for="x0">${strg.varPainelForcasAtuantes[1][0]}</label>`+
  //   '</div>'+
  //   '<div>'+
  //     '<input type="radio" name="DCL-mult" value="1" id="x1" checked>'+
  //     `<label for="x1">${strg.varPainelForcasAtuantes[1][1]}</label>`+
  //   '</div>'+
  //   '<div>'+
  //     '<input type="radio" name="DCL-mult" value="10" id="x10">'+
  //     `<label for="x10">${strg.varPainelForcasAtuantes[1][2]}</label>`+
  //   '</div>'+  
  //   '<div>'+
  //     '<input type="radio" name="DCL-mult" value="100" id="x100">'+
  //     `<label for="x100">${strg.varPainelForcasAtuantes[1][3]}</label>`+
  //   '</div>'
  // );
  let DCL_mult=document.querySelector("#foces-multiplier")

  // DCL_mult.class('radio-panel');
  // // DCL_mult.parent('nav-center')
  // DCL_mult.style(`width: ${wdth}px;`)
  



  let opts=document.querySelectorAll("input[name=DCL-mult]");
  for(let opt of opts){
    if(parseInt(opt.value)===multF){
      opt.checked=true
    }

    opt.addEventListener('click',(e)=>{
      multF=parseInt(e.target.value);
    })
  }



  
  
 
  

  


}
