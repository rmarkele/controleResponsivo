function cenarioSelectEvent() {
  let i =  selPar.value;

  //estado inicial
  posicao_inicial0 = checkForUndefined(cenarios[i].posicao_inicial, 0);
  velocidade_inicial0 = checkForUndefined(
     cenarios[i].velocidade_inicial,
     0
   );

   // parâmetros do processo a ser controlado
   m = abs(checkForUndefined(cenarios[i].m, 1));
   m = max(m, 0.0001);
   K = checkForUndefined(cenarios[i].K_mola, 10);
   C = checkForUndefined(cenarios[i].C_amortecedor, 9);

   // parâmetros do indicador de posição
   xSatMax = checkForUndefined(cenarios[i].posicao_indicada_max, 16);
   xSatMin = checkForUndefined(cenarios[i].posicao_indicada_min, -16);
   deltaInd = checkForUndefined(cenarios[i].erro_indicador, 0);
   [xSatMin, xSatMax] = [xSatMin, xSatMax].sort((a, b) => (a - b)); 

   // envelope de operação
   envelope[0] = checkForUndefined(cenarios[i].envelope_max, 16);
   envelope[1] = checkForUndefined(cenarios[i].envelope_min, -16);

   // Tipo Controlador
   switch (cenarios[i].tipo_controlador) {
    case 0:
      controlador = 0;
      break;
    case 1:
      controlador = 1;
      break;
    case 2:
      controlador = 2;
      break;
    case 3:
      controlador = 3;
      break;
    default:
      controlador = 0;
      break;
  }

  modoAcao = checkForUndefined(cenarios[i].modo_acao_controlador, 0);

  //PID
  K_P = abs(checkForUndefined(cenarios[i].Kp, 1.5));
  K_I = abs(checkForUndefined(cenarios[i].Ki, 0.8));
  K_D = abs(checkForUndefined(cenarios[i].Kd, 1));
  Fc = checkForUndefined(cenarios[i].OP0, 0);
  Imax = checkForUndefined(cenarios[i].Imax, 100);
  Imax = constrain(Imax, -100, 100);
  eLim = abs(checkForUndefined(cenarios[i].eLim, 2));
  DLim = abs(checkForUndefined(cenarios[i].DLim, 10));

  eliminaSurto = checkForUndefined(cenarios[i].elimina_surto_derivativo, 0);
  ativaFiltro = checkForUndefined(cenarios[i].ativa_filtro_passa_baixa, 1);
  freqCorte = checkForUndefined(cenarios[i].frequencia_corte, 10);

  //Biestável
  biestavel = {
    setpointAlto: 0,
    setpointBaixo: 0,
    saidaAlta: constrain(
      checkForUndefined(cenarios[i].biestavel_OPmax, 100),
      -100,
      100
    ),
    saidaBaixa: constrain(
      checkForUndefined(cenarios[i].biestavel_OPmin, -100),
      -100,
      100
    ),
    bandaMorta: abs(
      checkForUndefined(cenarios[i].biestavel_banda_morta, 4)
    ),
    saidaAtual: checkForUndefined(cenarios[i].biestavel_OPmin, -100),
  };
  [biestavel.saidaBaixa, biestavel.saidaAlta] = [biestavel.saidaBaixa, biestavel.saidaAlta].sort((a, b) => (a - b));
  

  //parâmetros atuador
  atuador = checkForUndefined(cenarios[i].tipo_atuador, 0);
  PIDSat = abs(checkForUndefined(cenarios[i].Fcmax, 300));     
  atrasoTransp = abs(checkForUndefined(cenarios[i].atraso_transporte_atuador, 0));
  kSig = abs(checkForUndefined(cenarios[i].ganho_atuador, 1));
  kSig = max(kSig, 0.0001);
  histSig = abs(checkForUndefined(cenarios[i].histerese_atuador, 10));
  
  
  modoAcaoMotor = checkForUndefined(cenarios[i].modo_acao_motor, 1);

  //oculta sistema
  hideSystem = checkForUndefined(cenarios[i].exibir_sistema, 1)==1?false:true;
     
  //Perturbação
  sel0 = checkForUndefined(
    cenarios[i].perturbacao_Tipo,
    0
  );
  perturbacao_Fmax0 = checkForUndefined(cenarios[i].perturbacao_Fmax, 10);
  perturbacao_Fmin0 = checkForUndefined(cenarios[i].perturbacao_Fmin, -10);
  [perturbacao_Fmin0, perturbacao_Fmax0] = [perturbacao_Fmin0, perturbacao_Fmax0].sort((a, b) => (a - b));  
  perturbacao_Periodo0 = abs(
    checkForUndefined(cenarios[i].perturbacao_Periodo, 10)
  );
  perturbacao_Periodo0 = max(perturbacao_Periodo0, 0.0001);
  perturbacao_manual_inicial0 = constrain(
    checkForUndefined(cenarios[i].perturbacao_manual_inicial, 0),
    perturbacao_Fmin0,
    perturbacao_Fmax0
  );
  perturbacao_t_on0 = checkForUndefined(cenarios[i].perturbacao_t_on, 50);
  perturbIniOff = checkForUndefined(
    cenarios[i].perturbacao_inicialmente_inibida,
    0
  );

  //Setpoint
  setpoint_Fmax0 = checkForUndefined(cenarios[i].setpoint_Vmax, 12);
  setpoint_Fmin0 = checkForUndefined(cenarios[i].setpoint_Vmin, -12);
  [setpoint_Fmin0, setpoint_Fmax0] = [setpoint_Fmin0, setpoint_Fmax0].sort((a, b) => (a - b));
  
  estado_inicial_controlador = checkForUndefined(
    cenarios[i].estado_inicial_controlador,
    1
  );
  
  selSet0 = checkForUndefined(
    cenarios[i].setpoint_Tipo,
    0
  );

  setpoint_Periodo0 = abs(
    checkForUndefined(cenarios[i].setpoint_Periodo, 10)
  );
  setpoint_Periodo0 = max(setpoint_Periodo0, 0.0001);
  setpoint_t_on0 = checkForUndefined(cenarios[i].setpoint_t_on, 50);
  setpoint_auto_inibido = checkForUndefined(
    cenarios[i].setpoint_auto_inibido,
    0
  );
  setpoint_manual_inicial0 = checkForUndefined(
    cenarios[i].setpoint_manual_inicial,
    0
  );

  resetAtSteps = cenarios[i].zerar_em_degrau;

  //Controle manual Inicial
  saida_controle_manual_inicial0 = checkForUndefined(
    cenarios[i].Fc_manual_inicial,
    0
  );  

  // modo de exibição da régua
  mostraBP = checkForUndefined(cenarios[i].exibe_banda_proporcional, 1);
  mostraBM = checkForUndefined(cenarios[i].exibe_banda_morta, 1);
  mostraIndPos = checkForUndefined(cenarios[i].exibe_faixa_indicao, 1);
  mostraLinhaSP = checkForUndefined(cenarios[i].exibe_linha_setpoint, 1);
  mostraPosReal = checkForUndefined(
    cenarios[i].exibe_linha_posicao_real,
    1
  );
  mostraEnvelope = checkForUndefined(
    cenarios[i].exibe_envelope_operacao,
    0
  );

  // Forças Atuantes

  multF= checkForUndefined(cenarios[i].multiplicador_forcas_atuantes, 1);
  let opts=document.querySelectorAll("input[name=DCL-mult]");
  for(let opt of opts){
    if(parseInt(opt.value)===multF){
      opt.checked=true
    }
  }

  //exibição do gráfico PV_SP na versão mobile

  showPvGraph = checkForUndefined(cenarios[i].exibe_grafico_PV_SP, 1)===1;

  // modo de exibição do painel Saída Controlador/Atuador

  selAtuadorPID =
    strg.tituloPainelOpFc[
      checkForUndefined(cenarios[i].exibe_saida_atuador, 0)
    ];


  // parâmetros de resolução de tela
  frameRate0 = checkForUndefined(cenarios[i].frameRate, 40);
  
}




