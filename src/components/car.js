class carro {
  constructor(posX, posY, altura, largura, deltaX, text) {
    this.posX = posX;
    this.posY = posY;
    this.H = altura;
    this.L = largura;
    this.deltaX = deltaX;
    this.text = text;
  }

  updateDimensions(posX, posY, altura, largura) {
    this.posX = posX;
    this.posY = posY;
    this.H = altura;
    this.L = largura;
  }

  show() {
    push();
    translate(this.posX + this.deltaX, this.posY);

    angleMode(RADIANS);
    noFill();
    stroke(0);
    strokeWeight(strokeW);

    let yc = -this.H * 0.1;
    let xc1 = this.L / 4;
    let xc2 = (3 * this.L) / 4;
    let r = abs(yc);
    let w = this.deltaX / r;
    let mult = 1.3;
    push();
    fill(180);
    beginShape();

    //corpo

    vertex(0, yc);
    vertex(0, -this.H);
    vertex(this.L, -this.H);
    vertex(this.L, yc);
    endShape();

    line(0, yc, xc1 - mult * r, yc);
    line(xc1 + mult * r, yc, xc2 - mult * r, yc);
    line(xc2 + mult * r, yc, this.L, yc);

    fill(220);
    ellipseMode(RADIUS);
    arc(xc1, yc, mult * r, mult * r, -PI, 0);
    arc(xc2, yc, mult * r, mult * r, -PI, 0);
    pop();
    push();
    textSize(txtSize);
    textAlign(CENTER);
    fill(0);
    noStroke();
    text(this.text, this.L / 2, -this.H / 2);
    pop();
    //Rodas
    push();
    fill(220);
    ellipseMode(RADIUS);
    stroke(0, 0, 250);
    arc(xc1, yc, r, r, 0 + w, HALF_PI + w, PIE);
    arc(xc1, yc, r, r, HALF_PI + w, PI + w, PIE);
    arc(xc1, yc, r, r, PI + w, 3 * HALF_PI + w, PIE);
    arc(xc1, yc, r, r, 3 * HALF_PI + w, TWO_PI + w, PIE);

    arc(xc2, yc, r, r, 0 + w, HALF_PI + w, PIE);
    arc(xc2, yc, r, r, HALF_PI + w, PI + w, PIE);
    arc(xc2, yc, r, r, PI + w, 3 * HALF_PI + w, PIE);
    arc(xc2, yc, r, r, 3 * HALF_PI + w, TWO_PI + w, PIE);

    fill(0);
    stroke(0);
    ellipse(xc1, yc, r * 0.2);
    ellipse(xc2, yc, r * 0.2);
    pop();
    pop();
  }

  update(txt){
    this.text = txt;
  }
}
