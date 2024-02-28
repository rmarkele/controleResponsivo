function escrevePainelSaidaPID(pos) {
  if ((controlador < 3 && pidControlCheckBox.checked())) {
    plotaPID(pos);
    
  } 
  else if( controlador == 3 && pidControlCheckBox.checked()){
    plotaBiestavel(pos);       
  }
}

function plotaPID(pos){
  push()
    textSize(12);
    textAlign(CENTER);
    textStyle(BOLD);
    text(strg.tituloPainelOpFc, pos[0] + 0.5 * pos[2], pos[1] + 20);
  pop()
  push();
  textAlign(CENTER);
  textSize(12);
  let offy = 45;
  let linespace = (pos[3] - offy) / 4;
  text(
    [strg.saidaP_painelOpFc + nf(round(1000 * saidaP) / 1000, 0, 1) + "%"],
    pos[0] + 0.5 * pos[2],
    pos[1] + offy + 6
  );
  
  text(
    [strg.saidaI_painelOpFc + nf(round(1000 * saidaI) / 1000, 0, 1) + "%"],
    pos[0] + 0.5 * pos[2],
    pos[1] + offy + linespace + 6
  );

  
  if (eliminaSurtoCheckBox.checked()) {
    push();
    fill(corPID);
    noStroke();
    ellipse(
      pos[0] + 0.5 * pos[2] - 45,
       (pos[1] + offy + 2 * linespace),
      10,
      10
    );
    pop();
    }
    text(
      [strg.saidaD_painelOpFc + nf(round(1000 * saidaD) / 1000, 0, 1) + "%"],
      pos[0] + 0.5 * pos[2],
      pos[1] + offy + 2 * linespace + 6
    );
    text(
      [strg.saidaOP0_painelOpFc + nf(round(1000 * Fc0) / 1000, 0, 1) + "%"],
      pos[0] + 0.5 * pos[2],
      pos[1] + offy + 3 * linespace + 6
    );

    fill(corPID);
    let barMax = 0.9 * pos[2] / 2;
    strokeWeight(2);
    translate(
      pos[0] + 0.5 * pos[2],
      pos[1] + offy + 15
    );
    const barWidth = 15;
    noStroke();
    rect(0, 0 - barWidth / 2, saidaP / 100 * barMax, barWidth);
  
    rect(0, linespace - barWidth / 2, constrain(saidaI, -100, 100) / 100 * barMax, barWidth);
   
    rect(0, 2 * linespace - barWidth / 2, saidaD / 100 * barMax, barWidth);

    if (pidControlCheckBox.checked()) {
      rect(
        0,
        3 * linespace - barWidth / 2,
        (constrain(Fc0, -100, 100) / 100) * barMax,
        barWidth
      );
    }

    noFill();
    stroke(100);
    rect(-barMax, 0 - barWidth / 2, barMax, barWidth);
    rect(0, 0 - barWidth / 2, barMax, barWidth);

    rect(-barMax, linespace - barWidth / 2, barMax, barWidth);
    rect(0, linespace - barWidth / 2, barMax, barWidth);

    rect(-barMax, 2 * linespace - barWidth / 2, barMax, barWidth);
    rect(0, 2 * linespace - barWidth / 2, barMax, barWidth);

    rect(-barMax, 3 * linespace - barWidth / 2, barMax, barWidth);
    rect(0, 3 * linespace - barWidth / 2, barMax, barWidth);

    pop();
  //}
}

function plotaBiestavel(pos){
  let corBi = corMan.slice();
  if(pidControlCheckBox.checked()){
    corBi = corPID.slice();
  }

  // push()
  //   textSize(12);
  //   textStyle(BOLD);
  //   text(strg.tituloPainelOpFc[0], pos[0] + 0.5 * (pos[2] -50 ), pos[1] + 28);
  // pop()

  createAxis({
    posx: pos[0] + 35,
    posy: pos[1] + pos[3] - 35,
    w: pos[2] - 45 - 5,
    h: pos[3] - 40 - 40,
    xtick: [-16, -8, 0, 8, 16],
    tick1: [-100, -50, 0, 50, 100],
    title: strg.ylabelBiestavel,
    titleColor: corPID,
    // ylabel1: strg.ylabelBiestavel,
    color1: corPID,
    xlabel: strg.xlabelBiestavel,
    tick2: [],
    ylabel2: "",
    color2: 0,
    corX: corPos
  });
  biestavel2Fig(pos);
  //biestavel2Fig(-50, 50, 4);
}

function plotaSigmoid(pos) {
  let corAt = corAtuador.slice();
  let corOP = corMan;
  if(pidControlCheckBox.checked()){
    corOP = corPID
  }

  // push()
  //   textStyle(BOLD);
  //   textSize(12);
  //   text(strg.tituloPainelOpFc[1], pos[0] + 0.5 * (pos[2] - 50), pos[1] - 25 + 30);
  // pop()

  createAxis({
    posx: pos[0] + 35,
    posy: pos[1] + pos[3] - 20,
    w: pos[2] - 30,
    h: pos[3] - 40,
    xtick: [-100, -50, 0, 50, 100],
    tick1: [-100, -50, 0, 50, 100],
    title: strg.ylabelSaidaMotor,
    titleColor: corAtuador,
    // ylabel1: strg.ylabelSaidaMotor,
    color1: corAtuador,
    xlabel: strg.xlabelSaidaMotor,
    tick2: [],
    ylabel2: "",
    color2: 0,
    corX: corOP
  });

  image(SigFig, pos[0] + 35, pos[1] + 20  );
  push();
  translate(
    pos[0] + 35,
    pos[1] + pos[3] - 20
  );
  let w = pos[2] - 30;
  let h = pos[3] - 40;

  let lengAtuadorPlot = forcaAtuadorPlot.length;
  let yplot, xplot;
  if(forcaAtuadorPlot[lengAtuadorPlot - 1][0]){
    yplot = map(forcaAtuadorPlot[lengAtuadorPlot - 1][0], -100, 100, -0.05 * h, -0.95 * h);
    xplot = map(forcaAtuadorPlot[lengAtuadorPlot - 1][1], -100, 100, 0, w);
  }
  else{
    xplot = 0;
    yplot = 0;
  }
    fill(corAt);
    noStroke();
    ellipse(xplot, yplot, 10, 10);
  
    push();
    noFill();
    strokeWeight(6);

    let yplotA, xplotA;
    beginShape();
    corAt[3] = 100;
    stroke(corAt);
    for (let i = max(lengAtuadorPlot - 10, 1); i < lengAtuadorPlot - 1; i++) {
      let arr = [];
      arr = geraCaminhoAtuador(
        forcaAtuadorPlot[i][1]||0,
        forcaAtuadorPlot[i - 1][1]||0,
        forcaAtuadorPlot[i - 1][0]||0
      );
    
      for (let j = 0; j < arr.length; j++) {
        yplot = map(arr[j][0], -100, 100, -0.05 * h, -0.95 * h);
        xplot = map(arr[j][1], -100, 100, 0, w);
        
        vertex(xplot, yplot);
      }

    }

   
    endShape();

    pop();


  pop();
}
