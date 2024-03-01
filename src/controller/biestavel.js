function biestavel2Fig(pos) {
  let [x, yt, w, h] = pos;
  let y = yt
  let lengBiestavelPlot = biestavelPlot.length;
  let wdth = w - 45 - 5;
  let hgt = h - 40 -40;
  let xSPL = map(biestavel.setpointBaixo, -16, 16, 0, wdth);
  let xSPH = map(biestavel.setpointAlto, -16, 16, 0, wdth);
  let yMax = map(biestavel.saidaAlta, -100, 100, -0.05 * hgt, -0.95 * hgt);
  let yMin = map(biestavel.saidaBaixa, -100, 100, -0.05 * hgt, -0.95 * hgt);
  let xAt = map(constrain(biestavelPlot[lengBiestavelPlot-1][0], xSatMin, xSatMax), -16, 16, 0, wdth);
  let yAt = map(biestavelPlot[lengBiestavelPlot-1][1], -100, 100, -0.05 * hgt, -0.95 * hgt);
  
  push();
  noFill();
  stroke(0);
  strokeWeight(2);
  translate(x , y + h );
  if (modoAcao) {  
    line(0, yMin, xSPH, yMin);
    line(xSPH, yMin, xSPH, yMax);
    line(xSPL, yMax, wdth, yMax);
    line(xSPL, yMin, xSPL, yMax);  
  }
  else{
    line(0, yMax, xSPH, yMax);
    line(xSPH, yMin, xSPH, yMax);
    line(xSPL, yMin, wdth, yMin);
    line(xSPL, yMin, xSPL, yMax);  
  }
  
  let corBiest = corPID.slice();
  
  push()
    noFill();
    strokeWeight(6);
    
    corBiest[3] = 100;
    stroke(corBiest);
    for(let i = 1; i < lengBiestavelPlot; i++){
      geraCaminhoBiestavel(biestavelPlot[i][0], biestavelPlot[i][1], biestavelPlot[i-1][0], biestavelPlot[i-1][1], xSPL, xSPH, wdth, hgt)
    }

  pop()
  
  fill(corPID);
  noStroke();
  ellipse(xAt, yAt, 10, 10);
  
  
  pop();
}

function geraCaminhoBiestavel(x2, y2, x1, y1, xSPL, xSPH, wdth, hgt){
  let xplot1 = map(constrain(x1, xSatMin, xSatMax), -16, 16, 0, wdth);
  let yplot1 = map(y1, -100, 100, -0.05 * hgt, -0.95 * hgt);
  
  let xplot2 = map(constrain(x2, xSatMin, xSatMax), -16, 16, 0, wdth);
  let yplot2 = map(y2, -100, 100, -0.05 * hgt, -0.95 * hgt);
  
  if(y2 === y1){
    line(xplot1, yplot1, xplot2, yplot2, xSPL, xSPH);
  }
  else if(x2 > x1){
    line(xplot1, yplot1, xSPH, yplot1)
    line(xSPH, yplot1, xSPH, yplot2)
    line(xSPH, yplot2, xplot2, yplot2)
  }
  else if(x2 < x1){
    line(xplot2, yplot2, xSPL, yplot2)
    line(xSPL, yplot2, xSPL, yplot1)
    line(xSPL, yplot1, xplot1, yplot1)
  }
  
}


function calculaSPBI(){
  let hig = xSatMax;
  let low = xSatMin;
  let SP = setPoint.value(); 
  
  hig = min(biestavel.bandaMorta / 2, hig);
  low = max(-biestavel.bandaMorta / 2, low);
  
  if(SP > 0){
    let deltaMax = min(SP, xSatMax - hig);
    hig = hig + deltaMax;
    low = low + deltaMax;
  }
  else{
    let deltaMin = max(SP, xSatMin - low);
    hig = hig + deltaMin;
    low = low + deltaMin;
  }
  biestavel.setpointBaixo = low;
  biestavel.setpointAlto = hig;
  updateInputValue(nf(biestavel.setpointAlto, 0, 2),txtSPH)
  updateInputValue(nf(biestavel.setpointBaixo, 0, 2), txtSPL)
  
}

function calculaSaidaBiestavel(){
  if (modoAcao) {  
    if(x[1] > biestavel.setpointAlto){
      biestavel.saidaAtual = biestavel.saidaAlta;
    }
    else if(x[1] < biestavel.setpointBaixo) {
      biestavel.saidaAtual = biestavel.saidaBaixa;      
    }
  }
  else{
    if(x[1] > biestavel.setpointAlto){
      biestavel.saidaAtual = biestavel.saidaBaixa;
    }
    else if(x[1] < biestavel.setpointBaixo) {
      biestavel.saidaAtual = biestavel.saidaAlta;      
    }
    
  }

  
}