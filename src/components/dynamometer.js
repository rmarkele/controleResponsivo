class dinamometro {
    constructor({posx, posy, w, h, min, max, pot1, pot2, titleDiv}) {
      this.posx = posx;
      this.posy = posy;
      this.w = w;
      this.h = h;
      this.min = min;
      this.max = max;
      this.pot1 = pot1;
      this.pot2 = pot2;
      this.txtAuto = document.createElement('div');
      this.title = document.createElement('div');
      this.txtMan = document.createElement('div');

      // this.txtAuto.style.color = `rgb(${corPID})`;
      // this.txtMan.style.color = `rgb(${corMan})`;

      
      // document.querySelector(`#${titleDiv}`).appendChild(this.txtAuto);
      document.querySelector(`#${titleDiv}`).appendChild(this.title);
      // document.querySelector(`#${titleDiv}`).appendChild(this.txtMan);

    }
    show() {
      push();
        angleMode(DEGREES);
        translate(this.posx, this.posy);
        fill(240, 240, 240);
        stroke(0);
        strokeWeight(strokeW);
        rectMode(CENTER)
        let limV = this.h * 0.3;
        rect(0, 0, this.w * 2.1, 2 * limV);
        const posy = + this.w * .02;
        
        for(let i = -100; i <= 100; i += 20){
          const posx = map(i, -100, 100, -this.w, this.w);
          line(posx, -limV, posx, posy);
          push();
            noStroke();
            fill(0)
            textAlign(CENTER);
            text(i,posx, -limV * 1.15);
          pop();

        }


        for(let i = -90; i <= 90; i += 20){
          const posx = map(i, -100, 100, -this.w, this.w);
          line(posx, -limV, posx, -limV * 0.2);
        }
  
     
        
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
      
      
        strokeWeight(6);
        push();
         stroke(corBaixo)
         line(pot1, -limV, pot1, limV);
        pop();

        push();
         stroke(corCima)
         line(pot2, -limV, pot2, limV);
        pop();


        // this.txtAuto.innerHTML = `${strg.saidaAutoDinAn} ${String(nfs(round(this.pot1 * 100) / 100, 0, 1)).padStart(6, " ")}%`
        // this.txtMan.innerHTML = `${strg.saidaManDinAn} ${String(nfs(round(this.pot2 * 100) / 100, 0, 1)).padStart(6, " ")}%`

      pop();
    }

    // controlMode(mode){
    //   switch(mode){
    //     case 0: 
    //       this.txtAuto.style.backgroundColor = '#eee';
    //       this.txtAuto.style.border = 'none';
    //       this.txtMan.style.backgroundColor = '#eee';
    //       this.txtMan.style.border = 'none';
    //       break;
    //     case 1: 
    //       this.txtAuto.style.backgroundColor = '#fff';
    //       this.txtAuto.style.border = `2px solid rgb(${corPID})`;
    //       this.txtMan.style.backgroundColor = '#eee';
    //       this.txtMan.style.border = 'none';
    //       break;
    //     case 2: 
    //       this.txtAuto.style.backgroundColor = '#eee';
    //       this.txtAuto.style.border = `none`;
    //       this.txtMan.style.backgroundColor = '#fff';
    //       this.txtMan.style.border = `2px solid rgb(${corMan})`;
    //       break;
    //   }
    // }
  }
  