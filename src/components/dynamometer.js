class dinamometro {
    constructor(posx, posy, w, h, min, max, pot1, pot2) {
      this.posx = posx;
      this.posy = posy;
      this.w = w;
      this.h = h;
      this.min = min;
      this.max = max;
      this.pot1 = pot1;
      this.pot2 = pot2;
    }
    show() {
      push();
        angleMode(DEGREES);
        translate(this.posx, this.posy);
        fill(240, 240, 240);
        stroke(0);
        strokeWeight(strokeW);
        let ang1 = -100;
        let ang2 = -80;
        rectMode(CENTER)
        let limV = this.h * 0.2;
        rect(0, 0, this.w * 2.1, 2 * limV);
        const posy = + this.w * .02;
        push();
          noStroke();
          fill(0)
          textStyle(BOLD);
          text(strg.xlabelSaidaMotor, 0, -this.h);
        pop();
        for(let i = -100; i <= 100; i += 50){
          const posx = map(i, -100, 100, -this.w, this.w);
          line(posx, -limV, posx, posy);
          push();
            noStroke();
            fill(0)
            textAlign(CENTER);
            text(i,posx, -limV * 1.15);
          pop();

        }


        for(let i = -75; i <= 75; i += 50){
          const posx = map(i, -100, 100, -this.w, this.w);
          line(posx, -limV, posx, -limV * 0.2);
        }
  
        // arc(0, 0, this.w * 2, this.w * 2, ang1, ang2);
        // arc(0, 0, this.w * 1.5, this.w * 1.5, ang1, ang2);
      //   let xb1 = this.w * cos(ang1);
      //   let xb2 = this.w * cos(ang2);
      //   let yb = this.w * sin(ang1);
      //   noStroke();
      //   triangle(xb1, yb, xb2, yb, 0, 0);
      //   stroke(0);
      //   line(xb1, yb, xb2, yb);
  
      //   push();
      //     noStroke();
      //     fill(0, 0, 0);
      //     textAlign(CENTER);
      //     textSize(10);
      //     strokeWeight(strokeW);
      //     push();
      //     textStyle(BOLD);
      //     text(strg.xlabelSaidaMotor, 0, -1.1 * this.w);
      //     pop();
      //     rectMode(RADIUS);
      //     fill(255);
      //     // rect(0, 0.3 * this.w, 50, 5);
      //     // rect(0, 0.4 * this.w, 50, 5);
      //     fill(corPID);
      //     text([strg.saidaAutoDinAn + " " + nfs(round(this.pot1 * 100) / 100, 0, 1)] + "%", 0, 0.3 * this.w);
      //     fill(corMan);
      //     text([strg.saidaManDinAn + " " + nfs(round(this.pot2 * 100) / 100, 0, 1)] + "%", 0, 0.45 * this.w);
      //   pop();
  
      //   let i = 0;
  
      //   for (i = ang1 - 90; i <= ang2 - 90; i += 24) {
      //     push();
      //       rotate(i);
      //       line(0, 0.95 * this.w, 0, this.w);
      //       push();
      //         strokeWeight(1);
      //         fill(0);
      //         translate(0, 0.8 * this.w);
      //         rotate(-i);
      //         textAlign(CENTER);
      //         textSize(10);
      //         textStyle(NORMAL);
      //         noStroke();
      //         let txt = map(i, ang1 - 90, ang2 - 90, this.min, this.max);
      //         text(txt, 0, 0);
      //       pop();
      //     pop();
      //   }
        
        let pot1, pot2, corCima, corBaixo;
        
        if(pidControlCheckBox.checked()){   
          pot1 = map(this.pot2, this.min, this.max, -this.w, this.w);
          corBaixo = corMan.slice();
          pot2 = map(this.pot1, this.min, this.max, -this.w, this.w);
          corCima = corPID.slice();
        }
        else{
          pot1 = map(this.pot1, this.min, this.max, -this.w, this.w);
          corBaixo = corPID.slice();
          pot2 = map(this.pot2, this.min, this.max, -this.w, this.w);
          corCima = corMan.slice();
        }
      
      
        push();
         strokeWeight(4);
         stroke(corBaixo)
         line(pot1, -limV, pot1, limV);
        pop();

        push();
         strokeWeight(4);
         stroke(corCima)
         line(pot2, -limV, pot2, limV);
        pop();

        push();
        noStroke();
        fill(corPID);
        textAlign(LEFT)
        text([strg.saidaAutoDinAn + " " + nfs(round(this.pot1 * 100) / 100, 0, 1)] + "%", -1 * this.w, -this.h);
        fill(corMan);
        textAlign(RIGHT)
        text([strg.saidaManDinAn + " " + nfs(round(this.pot2 * 100) / 100, 0, 1)] + "%", 1 * this.w, -this.h);
        pop();
      pop();
    }
  }
  