class forcaDiagrama {
    constructor(posX, posY, W, L, Lmax, cor) {
      this.posX = posX;
      this.posY = posY;
      this.W = W;
      this.L = L;
      this.Lmax = Lmax;
      this.cor = cor;
    }
  
    show() {
      push();
        translate(this.posX, this.posY);
        stroke(0);
        strokeWeight(1);
        fill(this.cor);
        //line(0, 0, this.L, 0)
        beginShape();
        const H = 0.15 * abs(this.L / this.Lmax) * this.W;
        const arrowLength = (this.L / this.Lmax) * this.W;
        const bodyLength = 0.8 * arrowLength;
        vertex(0, -H / 2);
        vertex(0, H / 2);
        vertex(bodyLength, H / 2);
        vertex(bodyLength, (3 * H) / 4);
        vertex(arrowLength, 0);
        vertex(bodyLength, (-3 * H) / 4);
        vertex(bodyLength, -H / 2);
        vertex(0, -H / 2);
        endShape();
      pop();
    }
  }