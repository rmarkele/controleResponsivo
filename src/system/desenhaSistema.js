function desenhaSistema() {
  L = map(x[1], -12, 12, L0 / 2, (3 * L0) / 2);
  let xref = processSize[0];
  let yref = processSize[1];
  let wref = processSize[2];
  let href = processSize[3];

  let envMin = meters2pixels(envelope[1]);

  let envMax = meters2pixels(envelope[0]);

  if (!hideSystem) {
    push();
    noStroke();
    fill(250);
    rect(xref, yref, wref, -href);
    pop();
  } else {
    // simula perda de sinal
    push();
    fill(0);
    noStroke();
    rect(xref, yref, wref, -href);
    noiseTexture = createNoiseTexture(Math.round(wref), Math.round(href));
    image(noiseTexture, xref, yref - href, wref, href);
    pop();
  }

  if (mostraEnvelope) {
    if (!hideSystem) {
      push();
      stroke(255, 0, 0);
      strokeWeight(strokeW + 1);
      line(envMin - Lcar / 2, yref - Hcar, envMin - Lcar / 2, yref); // linha evelope inferior
      line(envMax + Lcar / 2, yref - Hcar, envMax + Lcar / 2, yref); // linha evelope inferior

      pop();
    }
  }

  if (!hideSystem) {
    spring.L = L;
    // spring.showLabel(true);
    damper.L = L;
    // damper.showLabel(true);
    car.deltaX = meters2pixels(x[1])-xCar-Lcar/2;
    car.show();
    strokeWeight(strokeW);

    //Desenha amortecedor
    if (abs(C) > 0) {
      let [xAmo, yAmo] = [damper.posX, damper.posY];
      line(xref, yAmo, xAmo, yAmo); //linha parede amortecedor
      line(xAmo + L0, yAmo, xCar  + car.deltaX, yAmo); // linha amortecedor carro
    }
    damper.show();

    //Desenha mola
    if (abs(K) > 0) {
      let [xMol, yMol] = [spring.posX, spring.posY];
      line(xref, yMol, xMol, yMol); //linha parede mola
      line(xMol + L, yMol, xCar  + car.deltaX, yMol); // linha mola carro
    }
    spring.show();

    // Desenha atuador
    if (!noControlCheckBox.checked()) {
    let [xPID, yPID, LPID, HPID] = [
      xref + 5 + (1.4 * L0) / 2,
      (1 / 4) * yref,
      1.4 * L0,
      Hpid,
    ];
    line(xref, yPID, xPID, yPID); //linha parede atuador
    line(xPID + LPID / 2, yPID, xCar  + car.deltaX, yPID); // linha atuador carro
    push();
        textSize(txtSize-1);
        strokeWeight(strokeW);
        rectMode(CENTER);
        fill(198, 228, 160);
        rect(xPID, yPID, LPID, HPID);

        fill(0);
        textAlign(CENTER, CENTER);
        text(strg.Atuador[0], xPID, yPID -  0.8 * HPID / 4);
        if (pidControlCheckBox.checked()) {
          text(strg.Atuador[1], xPID, yPID +  HPID / 4);
        } else {
          text(strg.Atuador[2], xPID, yPID +  HPID / 4);
        }  
    pop();
    }
  } else {
    spring.showLabel(false);
    damper.showLabel(false);
  }

  if (mostraEnvelope) {
    push();
    drawingContext.setLineDash([5, 10]);
    stroke(255, 0, 0);
    strokeWeight(strokeW + 1);
    line(envMin, 0.5 * yref, envMin, yref); // linha evelope inferior
    line(envMax, 0.5 * yref, envMax, yref); // linha evelope inferior

    pop();
  }

  drawScale();
}

function createNoiseTexture(w, h) {
  let img = createImage(w, h);
  img.loadPixels();
  
  for (let i = 0; i < 50; i++) {
    let x = int(random(w));
    let y = int(random(h));
    let c = random(255);
    img.set(x, y, color(c));
  }
  
  img.updatePixels();
  return img;
}