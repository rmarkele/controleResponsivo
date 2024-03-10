let strings = [
  {
    idioma: "PT-BR",
    
    //Descriçao do Simulador
    _titulo_Simulador_linha1: "CONTROLE EM MALHA FECHADA",
    _titulo_Simulador_linha2: " ",
    _comentario_Simulador_linha1: "Simulador Didático Mk-1",//SIST. MASSA-MOLA-AMORTECEDOR
    _comentario_Simulador_linha2: " ",
    _botao_saiba_mais_Simulador: "SAIBA MAIS",

    //Sistema
    _motor_Linear: [
      "Motor Linear",
      "AUTO",
      "MAN",
    ],

    _ocultar_Sistema: "Ocultar Animação",

    //Menu da versão mobile
    _menu_mobile: ["Variáveis", "Controle", "Entradas"],

    //Menu de navegação entre os painéis de entrada
    _menu_paineis:["Proc   IPos   Env", "ModC   Fc", "SP", "Fp", "Exibe", "Sobre"],

    //Painel Parametros do Processo
    _titulo_painel_Processo: "Processo",
    _constante_amortecedor: "c [N.s/m]",
    _constante_mola: "Ks [N/m]",
    _massa_carro: "m [kg]",

    //Painel do Envelope de Operação
    _titulo_painel_Envelope: "Envelope de Operação",
    _Env_min: "min [m]",
    _Env_max: "max [m]",
    
    // Gráficos
    _titulo_PV_e_SP: "Var. Controlada PV(t) e Setpoint SP(t)",
    _eixo_y_esq_PV_e_SP: "PV [m]",
    _eixo_y_dir_PV_e_SP: "SP [m]",

    _titulo_Fc_e_Op: "Var. Manipulada Fc(t) e Saída Controlador OP(t)",
    _eixo_y_esq_Fc_e_Op: "Fc [% Fcmax]",
    _eixo_y_dir_Fc_e_Op: "OP [%]",

    _titulo_Perturbacao: "Perturbação Fp(t)",
    _eixo_y_Perturbacao: "Fp [% Fcmax]",

    _titulo_formato_setpoint: "SP(t)",
    _eixo_y_formato_setpoint: "[m]",
    _eixo_x_formato_setpoint: "t [s]",

    _titulo_formato_perturbacao: "Fp(t)",
    _eixo_y_formato_perturbacao: "[% Fcmax]",
    _eixo_x_formato_perturbacao: "t [s]",

    _eixo_y_saida_biestavel: "OP [%]",
    _eixo_x_saida_biestavel: "PV [m]",

    _eixo_y_saida_motor: "Fc [% Fcmax]",
    _eixo_x_saida_motor: "OP [%]",

    //Dinamômetro Analógico
    _titulo_dinamometro_analogico: "OP [%]",
    _saida_AUTO_dinamometro_analogico: "AUTO",
    _saida_MAN_dinamometro_analogico: "MAN",

    //Painel Saída Controlador/Saída Motor
    _titulo_painel_Op: "Componentes de OP",
    _saida_P_painel_Op: "P: ",
    _saida_I_painel_Op: "I: ",
    _saida_D_painel_Op: "D: ",
    _saida_OP0_painel_Op: "OPo: ",

    //Painel Var Controlador
    _titulo_painel_Var_Controlador: "PODE REMOVER",
    _var_SP_painel_Var_Controlador: "SP [m]: ",
    _var_PV_painel_Var_Controlador: "PV [m]: ",
    _var_OP_painel_Var_Controlador: "OP [%]: ",

    //Painel de Controladores
    _titulo_painel_Controlador: [
      "Modo de Controle: PID",
      "Modo de Controle: PD + I se |e| < eLim",
      "Modo de Controle: PD + I se |D| < DLim",
      "Modo de Controle: Biestável",
    ],
    _Kp_painel_Controlador: "Kp:",
    _Ki_painel_Controlador: "Ki:",
    _Kd_painel_Controlador: "Kd:",
    _OP0_painel_Controlador: "OPo[%]:",
    _Ti_painel_Controlador: "Ti:",
    _Td_painel_Controlador: "Td:",
    _Imax_painel_Controlador: "Imax[%]:",
    _Derivada_painel_Controlador: "Derivada da PV",
    _Filtro_painel_Controlador: "Filtro PB",
    _freq_corte_painel_Controlador: "Freq Corte [Hz]:",
    _eLim_painel_Controlador: "eLim[m]:",
    _DLim_painel_Controlador: "DLim[%]:",
    _OPmax_painel_Controlador: "OPmax[%]:",
    _OPmin_painel_Controlador: "OPmin[%]:",
    _BandaMorta_painel_Controlador: "Banda Morta[m]:",
    _setpoint_baixo_painel_Controlador: "SPB:",
    _setpoint_alto_painel_Controlador: "SPA:",
    _controle_DESL_painel_Controlador: "DESL",
    _controle_AUTO_painel_Controlador: "AUTO",
    _controle_MAN_painel_Controlador: "MAN",
    _controle_AD_painel_Controlador: "DIR",

    //Painel Motor
    _titulo_painel_Motor: ["Motor Linear: Ideal", "Motor Linear: Não-ideal"],
    _Fcmax_painel_Motor: "Fcmax[N]: ",
    _atraso_transporte_Motor: "Tmorto[ms]:",
    _Fcmax_inc_central: "Incl. central:",
    _Fcmax_histerese: "Folga[%]:",
    _modo_acao_motor: "DIR",

    //Painel Indicador de Posição
    _titulo_painel_Ind_Pos: "Indicador de Posição",
    _xmax_painel_Ind_Pos: "PVmax[m]:",
    _xmnin_painel_Ind_Pos: "PVmin[m]:",
    _erro_Ind_Pos: "erro[m]:",

    //Painel Perturbação
    _titulo_painel_Pert: "Perturbação: ",
    _tipo_Perturbacao: [
      "Nenhuma",
      "Onda Senoidal",
      "Onda Quadrada",
      "Onda Triangular",
      "Dente de Serra",
      "Trem de Pulsos",
      "Ruído Aleatório",
      "Cursor Manual",
    ],
    _Fpmax_painel_Pert: "Fpmax[%]:",
    _Fpmin_painel_Pert: "Fpmin[%]:",
    _periodo_painel_Pert: "Período[s]:",
    _t_alto_painel_Pert: "t_alto[%]:",
    _Fp_manual_painel_Pert: "Fp:",
    _aplica_perturbacao_painel_Pert: ["Iniciar", "Desligar"],
    
    
     //Painel Setpoint
    _titulo_painel_Setpoint: "Setpoint: ",
    _tipo_Setpoint: [
      "Cursor Manual",
      "Onda Senoidal",
      "Onda Quadrada",
      "Onda Triangular",
      "Onda Dente Serra",
      "Trem Pulsos",
      "Ruído Aleatório",
    ],
    _xSPmax_painel_Setpoint: "SPmax[m]:",
    _xSPmin_painel_Setpoint: "SPmin[m]:",
    _periodo_painel_Setpoint: "Período[s]:",
    _t_alto_painel_Setpoint: "t_alto[%]:",
    _aplica_setpoint_painel_Setpoint: ["Iniciar", "Parar"],
    _zerar_em_degrau: "Zerar em Degrau",
    
    //Configurações da Régua
    _config_regua: "Visualizar",
    _banda_proporcional_config_regua: "Banda Proporcional",
    _banda_morta_config_regua: "Banda Morta",
    _ind_pos_config_regua: "Faixa Indicação PV",
    _linha_setpoint_config_regua: "Tracejado SP",
    _linha_pos_real_config_regua: "Tracejado PV",
    _texto_slider_setpoint: "SP: ",
    _envelope_de_operacao: "Envelope Operação",
    _texto_violacao_envelope:"Violação Envelope Operação",

    //Painel Forças Atuantes
    _titulo_painel_Forcas_Atuantes: "Forças",
    _opcoes_painel_Forcas_Atuantes: ["Ocultar", "x1", "x10", "x100"],
    
    // parâmetros de resolução de tela
    _fps_Esperado: "FPS esperado",
    _fps_medio: "FPS médio",
     
    
  },




  {
    idioma: "EN-US",
    
    //Descriçao do Simulador
    _titulo_Simulador_linha1: "CLOSED-LOOP CONTROL",
    _titulo_Simulador_linha2: " ",
    _comentario_Simulador_linha1: "Teaching Simulator Mk-1",//MASS-SPRING-DAMPER SYSTEM
    _comentario_Simulador_linha2: " ",//= free use for teaching =
    _botao_saiba_mais_Simulador: "LEARN MORE",
    

    //Sistema
    _motor_Linear: [
      "Linear Motor",
      "AUTO",
      "MAN",
    ],
    _ocultar_Sistema: "Hide Animation",

    //Menu da versão mobile
    _menu_mobile: ["Variables", "Control", "Inputs"],

    //Menu de navegação entre os painéis de entrada
    _menu_paineis:["Proc   PInd   Env", "CMod   Fc", "SP", "Fp", "Show", "About"],

    //Painel Parametros do Processo
    _titulo_painel_Processo: " Process",
    _constante_amortecedor: "c [N.s/m]",
    _constante_mola: "Ks [N/m]",
    _massa_carro: "m [kg]",

    //Painel Envelope de Operação
    _titulo_painel_Envelope: "Operating Envelope",
    _Env_min: "min [m]",
    _Env_max: "max [m]",

    // Gráficos
    _titulo_PV_e_SP: "Controlled Variable PV(t) / Setpoint SP(t)",
    _eixo_y_esq_PV_e_SP: "PV [m]",
    _eixo_y_dir_PV_e_SP: "SP [m]",

    _titulo_Fc_e_Op: "Manipulated Var. Fc(t) / Controller Output OP(t)",
    _eixo_y_esq_Fc_e_Op: "Fc [% Fcmax]",
    _eixo_y_dir_Fc_e_Op: "OP [%]",

    _titulo_Perturbacao: "Perturbation Fp(t)",
    _eixo_y_Perturbacao: "Fp [% Fcmax]",

    _titulo_formato_setpoint: "SP(t)",
    _eixo_y_formato_setpoint: "[m]",
    _eixo_x_formato_setpoint: "t [s]",

    _titulo_formato_perturbacao: "Fp(t)",
    _eixo_y_formato_perturbacao: "[% Fcmax] ",
    _eixo_x_formato_perturbacao: "t [s]",

    _eixo_y_saida_biestavel: "OP [%]",
    _eixo_x_saida_biestavel: "PV [m]",

    _eixo_y_saida_motor: "Fc [% Fcmax]",
    _eixo_x_saida_motor: "OP [%]",

    //Dinamômetro Analógico
    _titulo_dinamometro_analogico: "OP [%]",
    _saida_AUTO_dinamometro_analogico: "AUTO",
    _saida_MAN_dinamometro_analogico: "MAN",

    //Painel Saída Controlador/Saída Motor
    _titulo_painel_Op: "OP Components",
    _saida_P_painel_Op: "P: ",
    _saida_I_painel_Op: "I: ",
    _saida_D_painel_Op: "D: ",
    _saida_OP0_painel_Op: "OPo: ",

    //Painel Var Controlador
    _titulo_painel_Var_Controlador: "PODE REMOVER",
    _var_SP_painel_Var_Controlador: "SP [m]: ",
    _var_PV_painel_Var_Controlador: "PV [m]: ",
    _var_OP_painel_Var_Controlador: "OP [%]: ",

    //Painel de Controladores
    _titulo_painel_Controlador: [
      "Control Mode: PID",
      "Control Mode: PD + I if |e| < eTh",
      "Control Mode: PD + I if |D| < DTh",
      "Control Mode: Bistable",
    ],
    _Kp_painel_Controlador: "Kp:",
    _Ki_painel_Controlador: "Ki:",
    _Kd_painel_Controlador: "Kd:",
    _OP0_painel_Controlador: "OPo[%]:",
    _Ti_painel_Controlador: "Ti:",
    _Td_painel_Controlador: "Td:",
    _Imax_painel_Controlador: "Imax[%]:",
    _Derivada_painel_Controlador: "Derivative on PV",
    _Filtro_painel_Controlador: "LP Filter",
    _freq_corte_painel_Controlador: "Cutoff Freq [Hz]:",
    _eLim_painel_Controlador: "eTh[m]:",
    _DLim_painel_Controlador: "DTh[%]:",
    _OPmax_painel_Controlador: "OPmax[%]:",
    _OPmin_painel_Controlador: "OPmin[%]:",
    _BandaMorta_painel_Controlador: "Deadband[m]:",
    _setpoint_baixo_painel_Controlador: "SPL:",
    _setpoint_alto_painel_Controlador: "SPH:",
    _controle_DESL_painel_Controlador: "OFF",
    _controle_AUTO_painel_Controlador: "AUTO",
    _controle_MAN_painel_Controlador: "MAN",
    _controle_AD_painel_Controlador: "DIR",

    //Painel Motor
    _titulo_painel_Motor: ["Linear Motor: Ideal", "Linear Motor: Non-ideal"],
    _Fcmax_painel_Motor: "Fcmax[N]: ",
    _atraso_transporte_Motor: "DeadT[ms]:",
    _Fcmax_inc_central: "Centerslope:",
    _Fcmax_histerese: "Deadspace[%]:",
    _modo_acao_motor: "DIR",

    //Painel Indicador de Posição
    _titulo_painel_Ind_Pos: "Position Indicator",
    _xmax_painel_Ind_Pos: "PVmax[m]:",
    _xmnin_painel_Ind_Pos: "PVmin[m]:",
    _erro_Ind_Pos: "error[m]:",

    //Painel Perturbação
    _titulo_painel_Pert: "Perturbation: ",
    _tipo_Perturbacao: [
      "None",
      "Sine Wave",
      "Step Wave",
      "Ramp Wave",
      "Sawtooth Wave",
      "Pulse Train",
      "Random Noise",
      "Manual Slider",
    ],
    _Fpmax_painel_Pert: "Fpmax[%]:",
    _Fpmin_painel_Pert: "Fpmin[%]:",
    _periodo_painel_Pert: "Period[s]:",
    _t_alto_painel_Pert: "t_hi[%]:",
    _Fp_manual_painel_Pert: "Fp:",
    _aplica_perturbacao_painel_Pert: ["Start", "Turn Off"] ,
    
    //Painel Setpoint
    _titulo_painel_Setpoint: "Setpoint: ",
    _tipo_Setpoint: [
      "Manual Slider",
      "Sine Wave",
      "Step Wave",
      "Ramp Wave",
      "Sawtooth Wave",
      "Pulse Train",
      "Random Noise",
    ],
    _xSPmax_painel_Setpoint: "SPmax[m]:",
    _xSPmin_painel_Setpoint: "SPmin[m]:",
    _periodo_painel_Setpoint: "Period[s]:",
    _t_alto_painel_Setpoint: "t_hi[%]:",
    _aplica_setpoint_painel_Setpoint: ["Start", "Stop"],
    _zerar_em_degrau: "Reset at Step",
    
    //Configurações da Régua
    _config_regua: "View",
    _banda_proporcional_config_regua: "Proportional Band",
    _banda_morta_config_regua: "Deadband",
    _ind_pos_config_regua: "PV Indication Range",
    _linha_setpoint_config_regua: "SP Dashed Line",
    _linha_pos_real_config_regua: "PV Dashed Line",
    _texto_slider_setpoint: "SP: ",
    _envelope_de_operacao: "Operating Envelope",
    _texto_violacao_envelope:"Operating Envelope Violation",

    //Painel Forças Atuantes
    _titulo_painel_Forcas_Atuantes: "Forces",
    _opcoes_painel_Forcas_Atuantes: ["Hide", "x1", "x10", "x100"],
    
    // parâmetros de resolução de tela
    _fps_Esperado: "Expected FPS",
    _fps_medio: "Average FPS",
    
  },
];
