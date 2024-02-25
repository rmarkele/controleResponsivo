function atualizaParametros(id) {
    let Fmax, Fmin, Periodo, ton;
    switch (id) {
      case 0: // massa
        m = abs(checkForNaN(variablesList[id].inp.value, 0));
        if (m == 0) {
          m = 1;
        }
        variablesList[id].inp.value = formatToExponential(m, 1000);
        saidaI = 0;
        saidaD = 0;
        Perturb = [0, 0, 0];
        forcaAtuador = [0, 0, 0];
        updateComponentes(); 
        break;
        
      case 1: // mola
        K = checkForNaN(variablesList[id].inp.value, 0);
        variablesList[id].inp.value = formatToExponential(K, 1000);
        saidaI = 0;
        saidaD = 0;
        Perturb = [0, 0, 0];
        forcaAtuador = [0, 0, 0];
        updateComponentes();
        break;
        
      case 2: // amortecedor
        C = checkForNaN(variablesList[id].inp.value, 0);
        variablesList[id].inp.value = formatToExponential(C, 1000);
        saidaI = 0;
        saidaD = 0;
        updateComponentes();
        break;
        
      case 3: //Kp
        K_P = abs(checkForNaN(variablesList[id].inp.value, 0));
        variablesList[id].inp.value = K_P;
        saidaI = 0;
        saidaD = 0;
        atualizaTiTd();
        updateInputValue(Ti,TiInp)
        updateInputValue(Td,TdInp)
        break;
        
      case 4: //Ki
        K_I = abs(checkForNaN(variablesList[id].inp.value, 0));
        variablesList[id].inp.value = K_I;
        saidaI = 0;
        saidaD = 0;
        atualizaTiTd();
        updateInputValue(Ti,TiInp)
        updateInputValue(Td,TdInp)
        break;
        
      case 5: // Kd
        K_D = abs(checkForNaN(variablesList[id].inp.value, 0));
        variablesList[id].inp.value = K_D;
        saidaI = 0;
        saidaD = 0;
        atualizaTiTd();
        updateInputValue(Ti,TiInp)
        updateInputValue(Td,TdInp)
        break;
  
      case 6: //Fcmax
        PIDSat = abs(checkForNaN(variablesList[id].inp.value, 300)); 
        variablesList[id].inp.value = formatToExponential(PIDSat, 1000);    
        break;
      case 7: //Fpmax
      case 8: //Fpmin
      case 9: //período perturbação
      case 10: //Ton perturbação
        aplicaPerturb.html(strg.buttonPainelPert[0]);
        perturbMode = 0;
        Fmax = checkForNaN(variablesList[7].inp.value, 0);         
        Fmin = checkForNaN(variablesList[8].inp.value, 0);
        [Fmin, Fmax] = [Fmin, Fmax].sort((a, b) => (a - b));
        
        variablesList[7].inp.value = (Fmax);
        variablesList[8].inp.value = (Fmin);
        
        Periodo = abs(checkForNaN(variablesList[9].inp.value, 10));
        Periodo = max(Periodo, 0.0001);
        variablesList[9].inp.value = (Periodo);
        
        ton = float(variablesList[10].inp.value);
        if (ton === ton) {
          ton = constrain(ton, 0, 100);
          variablesList[10].inp.value = (ton);
        }
        PerturbPreviewPlot = geraSinalOnChange(
          strg.tiposPert.indexOf(sel.value()),
          Fmax,
          Fmin,
          Periodo,
          ton,
          perturbTimeScale
        );
        PerturbyTick = geraYAxisPreview(Fmin, Fmax);
        PerturbxTick = geraXAxisPreview(max(2 * Periodo, 10));
        perturbSlider.range = [Fmin, Fmax];
        perturbSlider.value(constrain(perturbSlider.value(), Fmin, Fmax));
        Perturb = [0, 0, 0];
        break;
  
      case 11: // setpoint máximo
      case 12: // setpoint mínimo
      case 13: // período setpoint
      case 14: // ton setpoint
        aplicaSetpoint.html(strg.buttonPainelSetpoint[0]);
        setPointMode = 0;
        Fmax = checkForNaN(variablesList[11].inp.value, 0);
        Fmax = constrain(Fmax, -16, 16);
        Fmin = checkForNaN(variablesList[12].inp.value, 0);
        Fmin = constrain(Fmin, -16, 16);
        [Fmin, Fmax] = [Fmin, Fmax].sort((a, b) => (a - b));
        
        variablesList[11].inp.value = (Fmax);
        variablesList[12].inp.value = (Fmin);
  
        Periodo = abs(checkForNaN(variablesList[13].inp.value, 10));
        Periodo = max(Periodo, 0.0001);
        variablesList[13].inp.value = (Periodo);
        
        ton = float(variablesList[14].inp.value);
        if (ton === ton) {
          ton = constrain(ton, 0, 100);
          variablesList[14].inp.value = (ton);
        }

        SetpointPreviewPlot = geraSinalOnChange(
         strg.tiposSetpoint.indexOf(selSet.value()),
          Fmax,
          Fmin,
          Periodo,
          ton,
          setpointTimeScale
        );
  
        
        SetpointxTick = geraXAxisPreview(max(2 * Periodo, 10));
        if(strg.tiposSetpoint.indexOf(selSet.value())==0){
          setPoint.size = [meters2pixels(Fmax) - meters2pixels(Fmin), 5];
          setPoint.range = [Fmin, Fmax];  
          setPoint.value(constrain(setPoint.value(), Fmin, Fmax));
        }

  
        break;
  
      case 15: //pré carga controlador PID
        Fc0 = checkForNaN(variablesList[id].inp.value, 0);
        variablesList[id].inp.value = Fc0;
        break;
  
      case 16: //limite máximo de indicação do sensor de posição
        xSatMax = checkForNaN(variablesList[id].inp.value, 12);
        xSatMax = constrain(xSatMax, -16, 16);
        [xSatMin, xSatMax] = [xSatMin, xSatMax].sort((a, b) => (a - b));
        variablesList[id].inp.value = xSatMax;
        variablesList[17].inp.value = xSatMin;
        break;
  
      case 17: //limite mínimo de indicação do sensor de posição
        xSatMin = checkForNaN(variablesList[id].inp.value, -12);
        xSatMin = constrain(xSatMin, -16, 16);
        [xSatMin, xSatMax] = [xSatMin, xSatMax].sort((a, b) => (a - b));
        
        variablesList[16].inp.value = xSatMax;
        variablesList[id].inp.value = xSatMin;
        break;
  
      case 18: // inclinação central do atuador não ideal
        kSig = abs(checkForNaN(variablesList[id].inp.value, 1));
        kSig = max(kSig, 0.0001)
    
        variablesList[id].inp.value = kSig;
        PID = 0;
        saidaI = 0;
        manualForce = 0;
        forcaAtuador =  [0, 0, 0];
        
        sigmoid2Fig(kSig, histSig);
  
        break;
  
      case 19: // histerese do atuador não ideal
        histSig = abs(checkForNaN(variablesList[id].inp.value, 10));
        variablesList[id].inp.value = histSig;
        PID = 0;
        saidaI = 0;
        manualForce = 0;
        forcaAtuador = [0, 0, 0];
        sigmoid2Fig(kSig, histSig);
        break;
      case 20: // saída alta do biestável
        biestavel.saidaAlta = checkForNaN(variablesList[id].inp.value, 100);
        biestavel.saidaAlta = constrain(biestavel.saidaAlta, -100, 100);
        
        [biestavel.saidaBaixa, biestavel.saidaAlta] = [biestavel.saidaBaixa, biestavel.saidaAlta].sort((a, b) => (a - b));
        variablesList[20].inp.value = biestavel.saidaAlta;
        variablesList[21].inp.value = biestavel.saidaBaixa;

       
        break;
      case 21: // saída baixa do biestável
        biestavel.saidaBaixa = checkForNaN(variablesList[id].inp.value, -100);
        biestavel.saidaBaixa = constrain(biestavel.saidaBaixa, -100, 100);
        
        [biestavel.saidaBaixa, biestavel.saidaAlta] = [biestavel.saidaBaixa, biestavel.saidaAlta].sort((a, b) => (a - b));
        variablesList[20].inp.value = (biestavel.saidaAlta);
        variablesList[21].inp.value = (biestavel.saidaBaixa);

        break;
      case 22: //banda morta do biestável
        biestavel.bandaMorta = abs(checkForNaN(variablesList[id].inp.value, 0));
        variablesList[id].inp.value = (biestavel.bandaMorta);
        break;
      case 23: //frequencia de corte filtro passa baixa
        freqCorte = abs(checkForNaN(variablesList[id].inp.value, 10));
        freqCorte = max(freqCorte, 0.0001);
        variablesList[id].inp.value = (freqCorte);
        break;
      case 24: //
        Imax = abs(checkForNaN(variablesList[id].inp.value, 100));
        Imax = constrain(Imax, -100,100);
        variablesList[id].inp.value = (Imax);
        break;
      case 25: //
        eLim = abs(checkForNaN(variablesList[id].inp.value, 2));
        variablesList[id].inp.value = (eLim);
        break;
      case 26: //f
        DLim = abs(checkForNaN(variablesList[id].inp.value, 10));
        variablesList[id].inp.value = (DLim);
        break;
      case 27: //atrasoTransp
        atrasoTransp = abs(checkForNaN(variablesList[id].inp.value, 0));
        variablesList[id].inp.value = (atrasoTransp);
        break;
      case 28: //deltaInd
        deltaInd = checkForNaN(variablesList[id].inp.value, 0);
        variablesList[id].inp.value = (deltaInd);
        break;
      case 29: //limite máximo do envelope de operação
        envelope[0] = checkForNaN(variablesList[id].inp.value, 16);
        envelope[0] = constrain(envelope[0], -16, 16);
        envelope = envelope.sort((a, b) => (b - a));
        variablesList[id].inp.value = (envelope[0]);
        variablesList[30].inp.value = (envelope[1]);
        break;
  
      case 30: //limite mínimo do envelope de operação
        envelope[1]  = checkForNaN(variablesList[id].inp.value, -16);
        envelope[1]  = constrain(envelope[1] , -16, 16);
        envelope= envelope.sort((a, b) => (b - a));
        
        variablesList[29].inp.value = (envelope[0]);
        variablesList[id].inp.value = (envelope[1]);
        break;
  
      default:
        break;
    }
  }
  
  
  