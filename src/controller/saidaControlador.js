function calculaPID() {
  let atrasoPIDAnterior;
  if (pidControlCheckBox.checked()) {
    sinalControleAnterior = PID;
  } else if (manualControlCheckBox.checked()) {
    sinalControleAnterior = manualForce;
  }

  forces.pot2 = manualControl.value();
  const e_km1 = 100 * ((2 * erro) / (xSatMax - xSatMin));
  const dpos =
    100 *
    ((2 *
      (constrain(x[1]+deltaInd, xSatMin, xSatMax) - constrain(x[0]+deltaInd, xSatMin, xSatMax))) /
      (xSatMax - xSatMin));
  erro = setPoint.value() - constrain(x[1]+deltaInd, xSatMin, xSatMax);
  const e_k = 100 * ((2 * erro) / (xSatMax - xSatMin));
  const PID_km1 = PID;
  //console.log(sinalr.value(),e_km1, e_k,erroa, erro)

  let lengAtuadorMax = 10,
    lengBiestavelMax = 10;

  if (pidControlCheckBox.checked() && controlador < 3) {
    let tau = 1 / (2 * PI * freqCorte);
    saidaP = K_P * e_k;
    saidaP = constrain(saidaP, -100, 100);

    saidaD = saidaD * pow(-1, modoAcao);

    if (!eliminaSurtoCheckBox.checked() && filtroPBCheckBox.checked()) {
      saidaD =
        ((2 * K_D * (K_P != 0)) / (2 * tau + Ts)) * (e_k - e_km1) +
        ((2 * tau - Ts) / (2 * tau + Ts)) * saidaD;
    } else if (eliminaSurtoCheckBox.checked() && filtroPBCheckBox.checked()) {
      saidaD =
        ((-2 * K_D * (K_P != 0)) / (2 * tau + Ts)) * dpos +
        ((2 * tau - Ts) / (2 * tau + Ts)) * saidaD;
    } else if (!eliminaSurtoCheckBox.checked() && !filtroPBCheckBox.checked()) {
      saidaD = (2 * K_D * (K_P != 0) * (e_k - e_km1)) / Ts - saidaD;
    } else {
      saidaD = (-2 * K_D * (K_P != 0) * dpos) / Ts - saidaD;
    }

    saidaD = constrain(saidaD, -100, 100);

    let calculaI =
      controlador == 0 ||
      (controlador == 1 && abs(erro) < eLim) ||
      (controlador == 2 && abs(saidaD) < DLim);

    if (calculaI) {
      saidaI = saidaI * pow(-1, modoAcao);
      saidaI = ((K_I * (K_P != 0) * Ts) / 2) * (e_k + e_km1) + saidaI;
      saidaI = constrain(saidaI, -Imax, Imax);

    } else {
      saidaI = 0;
    }
    
    PID = saidaP + saidaI + saidaD + Fc0;
    
    
    PID = constrain(PID, -100, 100);

    if (modoAcao) {
      PID = -PID;
      saidaP = -saidaP;
      saidaI = -saidaI;
      saidaD = -saidaD;
    }

    //teste atraso de transporte
    
    if(atrasoTransp>0){  
      atrasoPIDAnterior = atrasoPID;  
      atrasoPID=(Ts - atrasoTransp * 0.001) / (Ts + atrasoTransp * 0.001) * (PID - atrasoPIDAnterior) + sinalControleAnterior;
      atrasoPID = constrain(atrasoPID, -100, 100);  
    } else{
      atrasoPIDAnterior = sinalControleAnterior;
      atrasoPID = PID;
    }
   

    forcaAtuador.push(
      calculaSaidaAtuador(atrasoPID, atrasoPIDAnterior, forcaAtuador[2])
    );
    forcaAtuador.splice(0, 1);
    PIDPlot.push(PID);
    manualPlot.push(PID);

    forcaAtuadorPlot.push([forcaAtuador[2], atrasoPID]);
    atuadorPlot.push(forcaAtuador[2]);
    let lengAtuadorPlot = forcaAtuadorPlot.length;
    if (lengAtuadorPlot > lengAtuadorMax) {
      forcaAtuadorPlot.splice(0, lengAtuadorPlot - lengAtuadorMax);
    }

    manualForce = 0;
  } else if (pidControlCheckBox.checked() && controlador == 3) {
    calculaSPBI();
    calculaSaidaBiestavel();
    saidaP = 0;
    saidaI = 0;
    saidaD = 0;
    manualForce = 0;
    PID = biestavel.saidaAtual;
    biestavelPlot.push([x[1]+deltaInd, biestavel.saidaAtual]);
    let lengBiestavelPlot = biestavelPlot.length;
    if (lengBiestavelPlot > lengBiestavelMax) {
      biestavelPlot.splice(0, lengBiestavelPlot - lengBiestavelMax);
    }


    if(atrasoTransp>0){  
      atrasoPIDAnterior = atrasoPID;  
      atrasoPID=(Ts - atrasoTransp * 0.001) / (Ts + atrasoTransp * 0.001) * (PID - atrasoPIDAnterior) + sinalControleAnterior;
      atrasoPID = constrain(atrasoPID, -100, 100);  
    } else{
      atrasoPIDAnterior = sinalControleAnterior;
      atrasoPID = PID;
    }
   

    forcaAtuador.push(
      calculaSaidaAtuador(atrasoPID, atrasoPIDAnterior, forcaAtuador[2])
    );
    forcaAtuador.splice(0, 1);
    PIDPlot.push(PID);
    manualPlot.push(PID);

    forcaAtuadorPlot.push([forcaAtuador[2], atrasoPID]);
    atuadorPlot.push(forcaAtuador[2]);
    let lengAtuadorPlot = forcaAtuadorPlot.length;
    if (lengAtuadorPlot > lengAtuadorMax) {
      forcaAtuadorPlot.splice(0, lengAtuadorPlot - lengAtuadorMax);
    }
  } else if (manualControlCheckBox.checked()) {
    if (controlador == 3) {
      calculaSPBI();
    }
    saidaP = 0;
    saidaI = 0;
    saidaD = 0;
    PID = 0;
    manualForce = manualControl.value();

    if(atrasoTransp>0){  
      atrasoPIDAnterior = atrasoPID;  
      atrasoPID=(Ts - atrasoTransp * 0.001) / (Ts + atrasoTransp * 0.001) * (manualForce - atrasoPIDAnterior) + sinalControleAnterior;
      atrasoPID = constrain(atrasoPID, -100, 100);  
    } else{
      atrasoPIDAnterior = sinalControleAnterior;
      atrasoPID = manualForce;
    }
   

    forcaAtuador.push(
      calculaSaidaAtuador(atrasoPID, atrasoPIDAnterior, forcaAtuador[2])
    );

    forcaAtuador.splice(0, 1);

    PIDPlot.push(manualControl.value());
    manualPlot.push(manualControl.value());

    forcaAtuadorPlot.push([forcaAtuador[2], atrasoPID]);
    atuadorPlot.push(forcaAtuador[2]);
    let lengAtuadorPlot = forcaAtuadorPlot.length;
    if (lengAtuadorPlot > lengAtuadorMax) {
      forcaAtuadorPlot.splice(0, lengAtuadorPlot - lengAtuadorMax);
    }
  } else {
    PID = 0;
    saidaP = 0;
    saidaI = 0;
    saidaD = 0;
    manualForce = 0;

    forcaAtuador.push(
      calculaSaidaAtuador(0, sinalControleAnterior, forcaAtuador[2])
    );
    forcaAtuador.splice(0, 1);

    PIDPlot.push(0);
    manualPlot.push(0);

    forcaAtuadorPlot.push([forcaAtuador[2], 0]);
    atuadorPlot.push(forcaAtuador[2]);
    let lengAtuadorPlot = forcaAtuadorPlot.length;
    if (lengAtuadorPlot > lengAtuadorMax) {
      forcaAtuadorPlot.splice(0, lengAtuadorPlot - lengAtuadorMax);
    }
  }
  forces.pot1 = PID;
  forces.pot2 = manualControl.value();
}
