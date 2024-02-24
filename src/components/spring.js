class mola {
    constructor(posX, posY, N, altura, largura0, largura, text) {
        this.posX = posX;
        this.posY = posY;
        this.H = altura;
        this.N = N;
        this.L0 = largura0;
        this.L = largura;
        this.label = createP(text);
        this.label.parent("canvas-container");
        this.label.position(this.posX + 0.8 * this.L / 2, this.posY + this.H);
        this.label.class("component-label");
        this.text = text
        //this.label.style("font-size", "18px");
    }

    show() {
        push();

        translate(this.posX, this.posY);
        textSize(18);
        if (abs(K) > 0) {
        //this.label.html("K<sub>s</sub> = " + K + " N/m");
        strokeWeight(strokeW);
        angleMode(DEGREES);
        noFill();
        stroke(0);
        beginShape();
        let Lm = this.L - (2 * this.H) / 3;
        let Npoints = Lm / 0.1;
        push();
            fill(0);
            ellipse(0, 0, 5, 5);
            ellipse(this.L, 0, 5, 5);
        pop();
        for (let i = 0; i <= Npoints; i++) {
            let x =
            this.H / 3 +
            0.1 * i -
            (this.H / 3) * cos((0.1 * i * this.N * 180) / Lm);
            let y = this.H * sin((0.1 * i * this.N * 180) / Lm);
            vertex(x, y);
        }

        endShape();
        } else {
        this.label.html(" ");
        }
        pop();
    }

    update(txt) {
        if (abs(K) > 0) {
        this.label.html(txt);
        }
    }

    showLabel(show){
        if(show){
        this.label.style('display', 'block');
        } else{
        this.label.style('display', 'none');
        }
    }
}