function createAxis(
  {
    posx,
    posy,
    w,
    h,
    xtick,
    tick1,
    title,
    ylabel1,
    color1,
    xlabel,
    tick2,
    ylabel2,
    color2,
    corX = 0
  }
) {
  let nTick1 = tick1.length;
  textSize(10)

  push();
    translate(posx, posy);
    stroke(0);
    strokeWeight(3);
    fill(255);
    rect(0, 0, w, -h);

    let tickPlot1 = [];

    for (var i = 0; i < nTick1; i++) {
      tickPlot1[i] = map(
        tick1[i],
        tick1[0],
        tick1[nTick1 - 1],
        -0.05 * h,
        -0.95 * h
      );
      push();
        stroke(0, 50);
        strokeWeight(1);
        line(0, tickPlot1[i], w, tickPlot1[i]);
      pop();
      push();
        strokeWeight(1);
        noStroke();
        fill(color1);
        textAlign(CENTER);
        text(tick1[i], -18, tickPlot1[i]);
      pop();
    }

    if (tick2) {
      let nTick2 = tick2.length;

      for (i = 0; i < nTick2; i++) {
        let tickPlot2 = [];
        tickPlot2[i] = map(
          tick2[i],
          tick2[0],
          tick2[nTick2 - 1],
          -0.05 * h,
          -0.95 * h
        );
        push();
          strokeWeight(1);
          noStroke();
          fill(color2);
          textAlign(CENTER);
          text(tick2[i], w + 15, tickPlot2[i]);
        pop();
      }
    }

    if (xtick) {
      let nTick = xtick.length;
      for (var i = 0; i < nTick; i++) {
        let tickPlot = [];
        tickPlot[i] = map(xtick[i], xtick[0], xtick[nTick - 1], 0, w);
        push();
          stroke(0, 50);
          strokeWeight(1);
          line(tickPlot[i], 0, tickPlot[i], -h);
        pop();
        push();
          strokeWeight(1);
          noStroke();
          fill(corX);
          textAlign(CENTER);
          text(xtick[i], tickPlot[i], 10);
        pop();
      }
    }

    push();
      strokeWeight(1);
      noStroke();
      fill(0);
      textAlign(CENTER);
      angleMode(DEGREES);
      textSize(12);
      text(title, w / 2, -h - 10);
      push();
        fill(color1);
        translate(0, -h / 2);
        rotate(-90);
        text(ylabel1, 0, -35);
      pop();
    pop();

    if (ylabel2) {
      push();
        strokeWeight(1);
        noStroke();
        fill(color2);
        textAlign(CENTER);
        angleMode(DEGREES);
        translate(w, -h / 2);
        rotate(90);
        text(ylabel2, 0, -30);
      pop();
    }

    push();
      strokeWeight(1);
      noStroke();
      fill(corX);
      textAlign(CENTER);
      angleMode(DEGREES);
      textSize(12);
      text(title, w / 2, -h - 10);
      text(xlabel, w / 2, 25);
    pop();
  pop();
}

function plot({posx, posy, w, h, s1, tick1, color, timeScale, value}) {
  let N = s1.length;
  let nTick1 = tick1.length;
  // if (N > w / timeScale) {
  //   s1.splice(0, Math.round(N-w/ timeScale));
  //   N = s1.length;
  // }

  push();
    noFill();
    translate(posx, posy);
    strokeWeight(2);
    stroke(color);
    beginShape();
    for (let i = 0; i < N; i++) {
      let yplot = map(s1[i], tick1[0], tick1[nTick1 - 1], -0.05 * h, -0.95 * h);
      if (yplot < -h) {
        vertex(i * timeScale, -h);
      } else if (yplot > 0) {
        vertex(i * timeScale, 0); 
      } else {
        vertex(i * timeScale, yplot);
      }
    }
    endShape();
    if(value){
      push()
        stroke(200)
        line(value[0] * timeScale, 0, value[0] * timeScale, -h)
        stroke(color);
        strokeWeight(10)
        point( 
          value[0] * timeScale, 
          map(value[1], tick1[0], tick1[nTick1 - 1], -0.05 * h, -0.95 * h)
        );
      pop()
    }

    stroke(0);
    strokeWeight(3);
    rect(0, 0, w, -h);
  pop();
}



function geraYAxisPreview(Vmin, Vmax) {
  if (Vmax < Vmin) {
    let aux = Vmax;
    Vmax = -Vmin;
    Vmin = aux;
  }

  if (Vmin !== Vmin) {
    Vmin = -10;
  }

  if (Vmax !== Vmax) {
    Vmax = 10;
  }

  const step = max(1, abs(floor((Vmax - Vmin) / 4)));
  const nSteps = abs(ceil((Vmax - Vmin) / step));
  let yTick = [];
  for (let i = 0; i <= nSteps; i++) {
    yTick[i] = Vmin + step * i;
  }
  return yTick;
}

function geraXAxisPreview(Tmax) {
  let step = max((Tmax / 4),1);
  let nSteps = ceil(Tmax / step);

  let xTick = [];
  for (let i = 0; i <= nSteps; i++) {
    xTick[i] = step * i;
  }
  return xTick;
}
