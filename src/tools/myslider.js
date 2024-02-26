class mySlider {
    constructor(pos, size, range, val0, prec, rot, color, enabled=true) {
      this.pos = pos;
      this.size = size;
      this.range = range;
      this.val = val0;
      this.prec = prec;
      this.rot = rot;
      this.color = color;
      this.enabled = enabled;
      
    }
  
    show() {
      if (this.isChanging && this.enabled) {
        let val = map(
          mouseX,
          this.pos[0],
          this.pos[0] + this.size[0],
          this.range[0],
          this.range[1]
        );
        this.val = constrain(val, this.range[0], this.range[1]);
      }
      push();
  
      strokeWeight(1);
      textAlign(CENTER, CENTER);
      textFont(selFont);
      ellipseMode(CENTER);
      translate(this.pos[0], this.pos[1]);
      angleMode(DEGREES);
      rotate(this.rot);
      let color1, color2;
      if (this.mouseIsOver()) {
        color1 = 229;
        // color2 = [0, 92, 200];
      } else {
        color1 = 239;
        // color2 = [0, 117, 255];
      }
      color2 = this.color;
  
      fill(color1);
      rect(0, -this.size[1] / 2, this.size[0], this.size[1], 30, 30);
      let posx = map(this.val, this.range[0], this.range[1], 0, this.size[0]);
      fill(color2);
      beginShape();
      vertex(posx - this.size[1] * 1.5, this.size[1] * 1.5);
      vertex(posx + this.size[1] * 1.5, this.size[1] * 1.5);
      vertex(posx + this.size[1] * 1.5, -this.size[1] * 1.5);
      vertex(posx, -this.size[1] * 3);
      vertex(posx - this.size[1] * 1.5, -this.size[1] * 1.5);
      vertex(posx - this.size[1] * 1.5, this.size[1] * 1.5);
      endShape();
      pop();
    }
  
    mouseIsOver() {
      if (
        mouseX > 0.98 * this.pos[0] &&
        mouseX < 1.02 * (this.pos[0] + this.size[0]) &&
        mouseY < 1.0 * (this.pos[1] + (1.5 * this.size[1]) / 2) &&
        mouseY > 0.95 * (this.pos[1] - 1.5 * this.size[1])
      ) {
        return true;
      } else {
        return false;
      }
    }
  
    value(v) {
      if (typeof v !== "undefined") {
        this.val = constrain(v, this.range[0], this.range[1]);
      }
      return this.val;
    }
  }
  
  function mousePressed() {
    if (setPoint.mouseIsOver()) {
      setPoint.isChanging = true;
    }
    
    if (manualControl.mouseIsOver()) {
      manualControl.isChanging = true;
    }
    
    if (perturbSlider.mouseIsOver()) {
      perturbSlider.isChanging = true;
    }
    
    // if( drpDwn.dropped && !drpDwn.mouseIsOverDrop()){
    //   drpDwn.dropped = false;
    //   drpDwn.btn.html([drpDwn.title + String.fromCharCode(0x25BC)])
    //   drpDwn.dropD.hide();        
    // }
    
  }
  
  
  function mouseReleased() {
    setPoint.isChanging = false;
    manualControl.isChanging = false;
    perturbSlider.isChanging = false;
  }
  