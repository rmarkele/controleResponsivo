function showIHM() {
  let yref = processSize[1];
  escrevePainelPVarSis();
  // painelParPID.show();
  
  if(showCenterDiv){
    escrevePainelSaidaPID(controllerOutputsPos);
    plotaSigmoid(actuatorOutputsPos);
  }
  // painelParPerturb.show();
  // painelParSetpoint.show();
  escrevePainelPerturb();
  if (!noControlCheckBox.checked()) {
    setPoint.show();
    let posx = meters2pixels(setPoint.value());
    // if(!controlador){
    push();
    textAlign(CENTER);
    fill(corSP);
    strokeWeight(1);
    noStroke();
    textSize(txtSize-1);
    textStyle(BOLD);

    text(
       strg.configRegua[6] + " " + nf(round(setPoint.value() * 1000) / 1000, 0, 2),
      posx,
      setPoint.pos[1]+20
    );
    pop();
    // }
  }

  if(showCenterDiv){
    forces.show();
    manualControl.show();
  }
}
