

function calculaNovaPosicao() {
  const xn_1 = x[1];
  const xn_2 = x[0];

  const Pn = (forcaAtuador[2] / 100) * PIDSat + Perturb[2];
  const Pn_1 = (forcaAtuador[1] / 100) * PIDSat + Perturb[1];
  const Pn_2 = (forcaAtuador[0] / 100) * PIDSat + Perturb[0];

  const Coef_A = (4 * m) / (Ts * Ts) + (2 * C) / Ts + K;
  const Coef_B = (-8 * m) / (Ts * Ts) + 2 * K;
  const Coef_C = (4 * m) / (Ts * Ts) - (2 * C) / Ts + K;

  const Num = Pn + 2 * Pn_1 + Pn_2 - Coef_B * xn_1 - Coef_C * xn_2;

  const x_k = Num / Coef_A;

  if((x_k < envelope[1] || x_k > envelope[0]) && mostraEnvelope){
    document.querySelector('#light-EV').classList.add('on');
  } else{
    document.querySelector('#light-EV').classList.remove('on');
  }

  x.push(x_k);
  x.splice(0, 1);

  let velocity = abs(x_k-x[1])/Ts;
  let acceleration = abs(x_k - 2 * x[1] + x[0])/(Ts * Ts)

 let lastStability = stability;
 let stabilityCheck = (velocity < 0.008 )&&(acceleration < 0.2)&&(abs(saidaD)<0.1);
 let N_confirmation = 30;


  if(!lastStability && stabilityCheck){
    stabilityCounter++;
    // timerElement.style.backgroundColor = '#ccffcc';
  }else if(lastStability && !stabilityCheck){
    // timerElement.style.backgroundColor = '#eee';
    stabilityCounter=0;
  }

  if(stabilityCounter>0){
    if(stabilityCounter>=N_confirmation){
      stability = true;
      timerElement.style.backgroundColor = '#ccffcc';
      stabilityCounter=N_confirmation;
    }else {
      stability = false;
    }
  } else{
    stability = false;
    timerElement.style.backgroundColor = '#eee';
  }
 
}


