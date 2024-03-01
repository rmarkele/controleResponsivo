function ondaSenoidal(i, Fmax, Fmin, Periodo) {
  push();
  angleMode(RADIANS);
  let v =
    (Fmax + Fmin) / 2 +
    ((Fmax - Fmin) / 2) * sin(((2 * PI * 1) / Periodo) * Ts * i);
  pop();
  return [v, false];
}

function ondaQuadrada(i, Fmax, Fmin, Periodo, ton) { 
  let t = (i * Ts) % Periodo;
  let v = Fmin + (Fmax - Fmin) * (t > Periodo * (1 - ton / 100));

  let tm1 = ((i - 1) * Ts) % Periodo;
  let step= (tm1 <= (Periodo * (1 - ton / 100))) && (t > (Periodo * (1 - ton / 100))) || (tm1 > (Periodo * (1 - ton / 100))) && (t <= (Periodo * (1 - ton / 100)));

  return [v, step] ;
}

function denteDeSerra(i, Fmax, Fmin, Periodo) {
  let t = (i * Ts) % Periodo;
  let v = Fmin + (Fmax - Fmin) * (t / Periodo);
  
  let tm1 = ((i - 1) * Ts) % Periodo;
  let step= t<tm1
  return [v, step] ;
}

function ondaTriangular(i, Fmax, Fmin, Periodo) {
  let t = (i * Ts) % Periodo;
  let v =
    (Fmin + (Fmax - Fmin) * ((t / Periodo) * 2)) * (t <= Periodo / 2) +
    (Fmax - (Fmax - Fmin) * (((t - Periodo / 2) / Periodo) * 2)) *
      (t > Periodo / 2);
  return [v, false];
}

function tremDeImpulsos(i, Fmax, Periodo) {
  let t = (i * Ts) % Periodo;
  let v = Fmax * (abs(t) < 20 * Ts);
  let tm1 = ((i - 1) * Ts) % Periodo;
  let step= (tm1 <= 2 * Ts) && (t > 2 * Ts);
  return [v, step] ;
}

function geraSinalOnChange(tipo, Fmax, Fmin, Periodo, ton, timeScale) {
  const Tmax = 2 * Periodo;
  let t;
  let sinal = [];
  let wdth = mostraSetpointPrev?setPointGraphPos[2]:perturbGraphPos[2];

  switch (tipo) {
    case 0:
      for (let i = 0; i <  wdth / timeScale; i++) {
        sinal[i] = 0;
      }
      break;

    case 1:
      for (let i = 0; i <  wdth / timeScale; i++) {
        t = map(i, 0,  wdth / timeScale, 0, Tmax);
        [sinal[i]] = ondaSenoidal(t / Ts, Fmax, Fmin, Periodo);
      }

      break;

    case 2:
      for (let i = 0; i <  wdth / timeScale; i++) {
        t = map(i, 0,  wdth / timeScale, 0, Tmax);
        [sinal[i]] = ondaQuadrada(t / Ts, Fmax, Fmin, Periodo, ton);
      }
      break;

    case 3:
      for (let i = 0; i <  wdth / timeScale; i++) {
        t = map(i, 0,  wdth / timeScale, 0, Tmax);
        [sinal[i]] = ondaTriangular(t / Ts, Fmax, Fmin, Periodo);
      }

      break;

    case 4:
      for (let i = 0; i <  wdth / timeScale; i++) {
        t = map(i, 0,  wdth / timeScale, 0, Tmax);
        [sinal[i]] = denteDeSerra(t / Ts, Fmax, Fmin, Periodo);
      }

      break;

    case 5:
      for (let i = 0; i <  wdth / timeScale; i++) {
        t = map(i, 0,  wdth / timeScale, 0, Tmax);
        [sinal[i]] = tremDeImpulsos(t / Ts, Fmax, Periodo);
      }


      break;

    case 6:
      for (let i = 0; i <  wdth / timeScale; i++) {
        [sinal[i]] = random(Fmin, Fmax);
      }

      break;

    default:
      break;
  }
  return sinal;
}

function geraSinalAplicado(tipo, i, Fmax, Fmin, Periodo, ton) {
  switch (tipo) {
    case 0:
      return [0, false];

    case 1:
      return ondaSenoidal(i, Fmax, Fmin, Periodo);

    case 2:
      return ondaQuadrada(i, Fmax, Fmin, Periodo, ton);

    case 3:
      return ondaTriangular(i, Fmax, Fmin, Periodo);

    case 4:
      return denteDeSerra(i, Fmax, Fmin, Periodo);

    case 5:
      return tremDeImpulsos(i, Fmax, Periodo);

    case 6:
      return [random(Fmin, Fmax), false];

    default:
      return NaN;
  }
}


