function geraIHM() {
    // posição dos objetos
    let xref = processSize[0];
    let yref = processSize[1];
    let wref = processSize[2];
    let href = processSize[3];


    
  
    
    let posSliderSetpoint = [
      meters2pixels(-16),
      yref + posYScale + 2 * heightScale,
    ];
    let posPainelParametros = [1.1 * wref, 1.1 * href];
    let posDrpDwn = [posPainelParametros[0] , posPainelParametros[1]];
    let posPainelControlador = [posPainelParametros[0] , posPainelParametros[1]];
    // let posPainelSaidaPID = [posPainelParametros[0] , posPainelParametros[1]];
    
    
    let posPainelAtuador =[posPainelParametros[0] , posPainelParametros[1]];
    let posDinamometro = [dynamometerPos[0] + 0.5 * dynamometerPos[2] , dynamometerPos[1] - 0.4 * dynamometerPos[3]];
    //let posPainelSetpoint = [offSetPanelx + 470, 240  + offSetPanely];
    let posPainelPerturbacao = [posPainelParametros[0] , posPainelParametros[1]];
    let posPainelSetpoint = [posPainelParametros[0] , posPainelParametros[1]];
    let posPainelDCL=[posPainelParametros[0] , posPainelParametros[1]];


    //Gera Slider setpoint
    geraSliderSetpoint(posSliderSetpoint);
  
    //Gera Painel de Parametros
    geraPainelParametros();

     //Gera Painel do Indicador de Posição
     geraPainelIndicadorPosicao();
  
    //Gera Painel do Envelope
    geraPainelEnvelope();
  
    //Gera drop down de configurações da régua
    geradrpDwnRegua(posDrpDwn);
  
    //Gera Painel Variáveis
    geraPainelVariaveis();
  
    //Gera Painel do PID
    geraPainelControlador(posPainelControlador);
    
    //Gera Painel do Atuador
    geraPainelAtuador(posPainelAtuador);
  
    //Gera Painel de saídas do PID
    // geraPainelSaidaPID(posPainelSaidaPID);
    
  
   
  
  
    //Gera dinamômetro analógico e slider de controle manual
    geraDinamômetro(posDinamometro);
    
    //Gera Painel da Perturbação
    geraPainelPerturbacao(posPainelPerturbacao);
  
  
    //Gera Painel de SetPoint
    geraPainelSetpoint(posPainelSetpoint);
  
    //Gera Painel DCL
    geraPainelDCL(posPainelDCL);
    

    // cria botão pausa
    // pauseButton = createButton(strg.btnPausarIniciar[0]);  
    // pauseButton.parent("play-stop-reset");
    // pauseButton.mousePressed(() => {
    //   if (pauseButton.html() === strg.btnPausarIniciar[0]) {
    //     pauseButton.html(strg.btnPausarIniciar[1]);
    //     stopTimer();
    //     noLoop();
    //   } else if (pauseButton.html() === strg.btnPausarIniciar[1]) {
    //     pauseButton.html(strg.btnPausarIniciar[0]);
    //     startTimer();
    //     loop();
    //   }
    // });

    // //cria botão de reset
    // resetButton = createButton(strg.btnResetar);
    // resetButton.parent("play-stop-reset");
    // resetButton.mousePressed(softReset);
}