function calculaSaidaAtuador(
  sinalControleAtual,
  sinalControleAnterior,
  saidaAtuadorAtual
) {
  if (atuador == 1) {
    let deltaPID = sinalControleAtual - sinalControleAnterior;
    if ((modoAcaoMotor & deltaPID > 0)|| (!modoAcaoMotor & deltaPID < 0)) {//Alterado em 11/2022
      return max(
        100 * sigmoid(sinalControleAtual / 100, kSig, histSig),
        saidaAtuadorAtual
      ) 
    } else if ((modoAcaoMotor & deltaPID < 0) ||  (!modoAcaoMotor & deltaPID > 0)) {//Alterado em 11/2022
      return min(
        100 * sigmoid(sinalControleAtual / 100, kSig, -histSig),
        saidaAtuadorAtual
      ) 
    } else {
      return saidaAtuadorAtual; 
    }
  } else {
    return (sinalControleAtual) * pow(-1, !modoAcaoMotor); //Alterado em 11/2022
  }
}

function sigmoid(x, k, h) {
  return (-1 + 2 / (1 + exp(-2 * k * (x * pow(-1, !modoAcaoMotor) - h / 100)))) ; //Alterado em 11/2022
}

function geraSigmoid(k, h) {
  let arr = [];
  arr[0] = [];
  arr[1] = [];
  let sigMax = sigmoid(1 * pow(-1, !modoAcaoMotor), k, h);//Alterado em 11/2022
  let sigMin = sigmoid(-1 * pow(-1, !modoAcaoMotor), k, -h);//Alterado em 11/2022
  for (let i = 0; i < 200; i++) {
    arr[0][i] = 100 * min(sigmoid((i - 100) / 100, k, -h), sigMax);
    arr[1][i] = 100 * max(sigmoid((i - 100) / 100, k, +h), sigMin);
  }
  return arr;
}

function geraCaminhoAtuador(x2, x1, y1) {
  let arr = [];
   

  if (x2 > x1) {
    
    arr[0] = [y1, x1];
    
    for (let i = 1; i < (x2 - x1); i++) {
      arr[i] = [calculaSaidaAtuador((x1  + i), (x1 + i - 1), arr[i - 1][0]), x1 + i];
    }
    
    let lengArr = arr.length;
    arr[lengArr] = [ calculaSaidaAtuador(x2, (x2 - 1), arr[lengArr - 1][0]), x2];
    
  } else {
    arr[0] = [y1, x1];
    for (let i = 1; i < (x1 - x2); i++) {
      arr.push([calculaSaidaAtuador((x1 - i), (x1 - i + 1), arr[i - 1][0]), x1 - i]);
    }
   let lengArr = arr.length;
    arr.push([calculaSaidaAtuador(x2, (x2 + 1), arr[lengArr - 1][0]), x2]);
  }
  return arr;
}

function sigmoid2Fig(k, h) {
  let wdth = actuatorOutputsPos[2] - 45;
  let hgt = actuatorOutputsPos[3] - 40;
  if (atuador == 1) {
    let sigArr = geraSigmoid(k, h);
    SigFig = createGraphics(wdth, hgt);
    push();
    SigFig.noFill();
    SigFig.stroke(150);
    SigFig.strokeWeight(2);
    SigFig.background(255, 0);
    let N = sigArr[0].length;
    SigFig.beginShape();
    for (let i = 0; i < N; i++) {
      let yplot = map(sigArr[0][i], -100, 100, 0.95 * hgt, 0.05 * hgt);
      let xplot = map(i, 0, N, 0, wdth);
      SigFig.vertex(xplot, yplot);
    }
    SigFig.endShape();
    SigFig.beginShape();
    for (let i = 0; i < N; i++) {
      let yplot = map(sigArr[1][i], -100, 100, 0.95 * hgt, 0.05 * hgt);
      let xplot = map(i, 0, N, 0, wdth);
      SigFig.vertex(xplot, yplot);
    }
    SigFig.endShape();

    SigFig.stroke(0);
    SigFig.strokeWeight(3);
    SigFig.rect(0, 0, wdth, hgt);
    pop();
  } else {
    SigFig = createGraphics(wdth, hgt);
    push();
    SigFig.noFill();
    SigFig.stroke(150);
    SigFig.strokeWeight(2);
    SigFig.background(255, 0);
    if(modoAcaoMotor){//Alterado em 11/2022
      SigFig.line(0, 0.95 * hgt, wdth, 0.05 * hgt);
    } else {//Alterado em 11/2022
      SigFig.line(0, 0.05 * hgt, wdth, 0.95 * hgt);//Alterado em 11/2022
    }

    SigFig.stroke(0);
    SigFig.strokeWeight(3);
    SigFig.rect(0, 0, wdth, hgt);
    pop();
  }
}
