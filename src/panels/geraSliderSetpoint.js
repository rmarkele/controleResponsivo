function geraSliderSetpoint(pos) {
  setPoint = new mySlider(
    pos[0],
    pos[1],
    [setpoint_Fmin0, setpoint_Fmax0],
    setpoint_manual_inicial0,
    0.1,
    0,
    corSP
  );
}



