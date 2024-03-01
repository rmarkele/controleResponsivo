class amortecedor {
    constructor(posX, posY, altura, largura0, largura, text) {
        this.posX = posX;
        this.posY = posY;
        this.H = altura;
        this.L0 = largura0;
        this.L = largura;
        this.label = createP(text);
        this.label.parent("canvas-container");
        this.label.position(this.posX + 0.8 * this.L / 2, this.posY - this.H / 2 - txtSize - 5);
        this.label.class("component-label");
        this.text = text
    }


    show() {
        push();
        translate(this.posX, this.posY);
        if (abs(C) > 0) {
        //this.label.html("C<sub>a</sub> = " + C + " N.s/m");
        angleMode(DEGREES);
        fill(180);
        stroke(0);
        strokeWeight(strokeW);
        beginShape();
        vertex(this.L0, -this.H / 4);
        vertex(this.L0 * 0.95, -this.H / 4);
        vertex(this.L0 * 0.95, -this.H / 2);
        vertex(0, -this.H / 2);
        vertex(0, this.H / 2);
        vertex(this.L0 * 0.95, this.H / 2);
        vertex(this.L0 * 0.95, this.H / 4);
        vertex(this.L0, this.H / 4);
        endShape();
        rectMode(CENTER);

        let posMol = map(
            this.L - this.L0 / 2,
            0,
            this.L0,
            this.L0 / 4,
            (3 / 4) * this.L0
        );

        posMol = constrain(posMol, 0, this.L0);

        line(posMol, 0, this.L0, 0);
        fill(0);
        noStroke();
        rect(posMol, 0, 5, this.H * 0.7);
        } else {
        this.label.html(" ");
        }
        if(this.hideLabel){
        this.label.html(" ");
        }
        pop();
    }

    update(txt) {
        if (abs(C) > 0) {
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