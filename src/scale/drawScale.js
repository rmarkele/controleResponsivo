function drawScale() {
  // Desenha régua posição
  let yref = processSize[1];
  push();
    if (noControlCheckBox.checked()) {
      stroke(100);
      fill(100);
      strokeWeight(strokeW);
    } else {
      stroke(0);
      fill(0);
      strokeWeight(strokeW + 1);
    }
    const xCarLimInf =meters2pixels(xSatMin);
    const xCarLimSup = meters2pixels(xSatMax);

    

    line(
      meters2pixels(-16 ),
      yref + posYScale,
      meters2pixels(16),
      yref + posYScale
    ); // linha central escala setpoint

    if(width>700){
      for (let i = 0; i <= 16; i++) {
        let xpos = meters2pixels(-16 + 2 * i );
        let posLabel = -16 + 2 * i;

        if (posLabel == 0) {
          line(xpos, yref+1, xpos,  yref + posYScale + heightScale);
        } else {
          line(xpos, yref + posYScale - heightScale, xpos, yref + posYScale + heightScale);
        }

        push();
          textAlign(CENTER,CENTER);
          noStroke();
          text(posLabel, xpos, yref + posYScale + heightScale * 1.6);
        pop();

      }
    
      for (let i = 1; i < 32; i+=2) {
        let xpos = meters2pixels(-16 + i );
        line(xpos, yref + posYScale - heightScale * 0.7, xpos, yref + posYScale + heightScale * 0.7);
      }
    }
    else{
      for (let i = 0; i <= 8; i++) {
        let xpos = meters2pixels(-16 + 4 * i );
        let posLabel = -16 + 4 * i;

        if (posLabel == 0) {
          line(xpos, yref+1, xpos,  yref + posYScale + heightScale);
        } else {
          line(xpos, yref + posYScale - heightScale, xpos, yref + posYScale + heightScale);
        }
        push();
          textAlign(CENTER,CENTER);
          noStroke();
          text(posLabel, xpos, yref + posYScale + heightScale * 1.8);
        pop();
      }

    }

    const setPA = meters2pixels(biestavel.setpointAlto);
    const setPB = meters2pixels(biestavel.setpointBaixo);
  

  push();
    drawingContext.setLineDash([5, 10]);
    let posx = meters2pixels(setPoint.value());
    
    if (mostraLinhaSP && !noControlCheckBox.checked() && controlador < 3) {
      stroke(corSP);
      line(posx, yref - Hcar / 2 * 0.9, posx, yref + posYScale );
    } else if (
      mostraLinhaSP &&
      !noControlCheckBox.checked() &&
      controlador == 3
    ) {
      stroke(corSP);
      line(setPB, yref - Hcar / 2 * 0.9, setPB, yref + posYScale);
      line(setPA, yref - Hcar / 2 * 0.9, setPA, yref + posYScale);
    }

    if (!hideSystem && mostraPosReal) {
      stroke(corPosReal);
      line(
        xCar  + car.deltaX + Lcar / 2,
        yref - Hcar / 2,
        xCar  + car.deltaX + Lcar / 2,
        yref
      );
    }

    let posInd = constrain(
        meters2pixels(x[1]+deltaInd),
        xCarLimInf,
        xCarLimSup
      );
    if (mostraIndPos && !noControlCheckBox.checked()) {
      stroke(corPos);
      if(!hideSystem){
        line(posInd, yref, posInd, yref + posYScale);
      } else{
        line(posInd, yref - Hcar / 2 * 0.9, posInd, yref + posYScale);
      }
    }
  pop();

  const ybp = heightScale * 4.8 ;
  if (pidControlCheckBox.checked() && mostraBP && controlador < 3) {
    const BpMin = meters2pixels(
      constrain(
        setPoint.value() - (xSatMax - xSatMin) / (2 * K_P),
        xSatMin,
        xSatMax
      )  
    );
    
    const BpMax = meters2pixels(
      constrain(
        setPoint.value() + (xSatMax - xSatMin) / (2 * K_P),
        xSatMin,
        xSatMax
      )  
    );
    
    
    push();
      strokeWeight(strokeW + 1);
      stroke(corPID);
      line(BpMin, yref + ybp - 5, BpMin, yref + ybp + 5); // linha vertical BpMin

      line(BpMin, yref + ybp, BpMax, yref + ybp); // linha central banda proporcional

      line(BpMax, yref + ybp - 5, BpMax, yref + ybp + 5); // linha vertical BpMax

      line(posx, yref + ybp - 5, posx, yref + ybp + 5); // linha vertical setpoint
    pop();
  } else if (pidControlCheckBox.checked() && mostraBM && controlador == 3) {
    push();
      strokeWeight(strokeW + 1);
      stroke(corPID);

      line(setPB, yref + ybp - 5, setPB, yref + ybp + 5); // linha vertical setpoint baixo

      line(setPB, yref + ybp, setPA, yref + ybp); // linha central banda morta

      line(setPA, yref + ybp - 5, setPA, yref + ybp + 5); // linha vertical setpoint Alto
    pop();
  }

  if (mostraIndPos && !noControlCheckBox.checked()) {
    push();
    let corTemp = color(corPos);
    corTemp.setAlpha(200);
      // stroke(corTemp);
      noStroke();
      fill(corTemp);
      strokeWeight(5);
      // point(posInd, yref + 40);
      triangle(
        posInd - (heightScale) - 2, yref + posYScale + heightScale, 
        posInd, yref + posYScale - 2, 
        posInd + (heightScale) + 2, yref + posYScale + heightScale
      )
    pop();

    const indMin = meters2pixels(xSatMin);
    const indMax = meters2pixels(xSatMax);

    push();
      strokeWeight(strokeW + 1);
      stroke(corPos);
      line(indMin, yref + posYScale - 5, indMin, yref + posYScale + 5); // linha vertical xmax

      line(indMin, yref + posYScale, indMax, yref + posYScale); // linha central pos ind

      line(indMax, yref + posYScale - 5, indMax, yref + posYScale + 5); // linha vertical xmin
    pop();
    }
    
  pop();
}

function meters2pixels(m){
  return  map(
    m,
    -16,
    16,
    xCar - L0,
    xCar + L0 + Lcar
  );
}