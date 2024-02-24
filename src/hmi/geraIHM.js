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
    
    let posDinamometro = [dynamometerPos[0] + 0.5 * dynamometerPos[2] , dynamometerPos[1] - 0.4 * dynamometerPos[3]];
    //let posPainelSetpoint = [offSetPanelx + 470, 240  + offSetPanely];

  


    //Gera Slider setpoint
    geraSliderSetpoint(posSliderSetpoint);
  
    //Gera Painel de Parametros
    geraPainelParametros();

     //Gera Painel do Indicador de Posição
     geraPainelIndicadorPosicao();
  
    //Gera Painel do Envelope
    geraPainelEnvelope();
  
    //Gera drop down de configurações da régua
    geraShowPanel();
  
    //Gera Painel Variáveis
    geraPainelVariaveis();
  
    //Gera Painel do PID
    geraPainelControlador();
    
    //Gera Painel do Atuador
    geraPainelAtuador();
  
    //Gera dinamômetro analógico e slider de controle manual
    geraDinamômetro(posDinamometro);
    
    //Gera Painel da Perturbação
    geraPainelPerturbacao();
  
    //Gera Painel de SetPoint
    geraPainelSetpoint();
  
    //Gera Painel DCL
    geraPainelDCL();
    
}