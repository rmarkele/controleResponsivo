function idiomaSelect() {

  let i = languageIndex;

  //Descriçao do Simulador
  strg.tituloSimulador = [
    checkForUndefinedString(strings[i]._titulo_Simulador_linha1, "CONTROLE DE SISTEMA"),
    
    checkForUndefinedString(strings[i]._titulo_Simulador_linha2, "MASSA-MOLA-AMORTECEDOR")      
  ];

  strg.comentarioSimulador = [
    checkForUndefinedString(strings[i]._comentario_Simulador_linha1, "SIMULADOR DINÂMICO MK-1"),
    
    checkForUndefinedString(strings[i]._comentario_Simulador_linha2, "USO LIVRE PARA FINS DIDÁTICOS")      
  ];
  strg.btnSaibaMais =  checkForUndefinedString(strings[i]._botao_saiba_mais_Simulador, "SAIBA MAIS");
  
  
  //Sistema
  strg.Atuador = checkForUndefinedString(strings[i]._motor_Linear, [
    "Motor Linear",
    "AUTO",
    "MANUAL",
  ]);

  strg.SystemView = checkForUndefinedString(strings[i]._ocultar_Sistema, "Ocultar Visualização do Sistema");

  strg.tituloPainelProcesso = checkForUndefinedString(
    strings[i]._titulo_painel_Processo,
    "Param Processo"
  );

  strg.amortecedor = checkForUndefinedString(
    strings[i]._constante_amortecedor,
    "C [N.s/m]"
  );
  strg.mola = checkForUndefinedString(strings[i]._constante_mola, "Ks [N/m]");
  strg.massa = checkForUndefinedString(strings[i]._massa_carro, "m [kg]");



  // Gráficos
  strg.titulo1 = checkForUndefinedString(
    strings[i]._titulo_PV_e_SP,
    "Variável Controlada (PV) e Setpoint (SP)"
  );
  strg.xlabel1E = checkForUndefinedString(
    strings[i]._eixo_y_esq_PV_e_SP,
    "x(t) [m]"
  );
  strg.xlabel1D = checkForUndefinedString(
    strings[i]._eixo_y_dir_PV_e_SP,
    "xSP(t) [m]"
  );

  strg.titulo2 = checkForUndefinedString(
    strings[i]._titulo_Fc_e_Op,
    "Variável Manipulada (Fc) e Saída Controlador (OP)"
  );
  strg.xlabel2E = checkForUndefinedString(
    strings[i]._eixo_y_esq_Fc_e_Op,
    "Fc(t) [% Fcmax]"
  );
  strg.xlabel2D = checkForUndefinedString(
    strings[i]._eixo_y_dir_Fc_e_Op,
    "OP(t) [%]"
  );

  strg.titulo3 = checkForUndefinedString(
    strings[i]._titulo_Perturbacao,
    "Perturbação "
  );
  strg.xlabel3E = checkForUndefinedString(
    strings[i]._eixo_y_Perturbacao,
    "Fp(t) [% Fcmax]"
  );

  strg.tituloSetpoint = checkForUndefinedString(
    strings[i]._titulo_formato_setpoint,
    "Formato Setpoint "
  );
  strg.ylabelSetpoint = checkForUndefinedString(
    strings[i]._eixo_y_formato_setpoint,
    "xSP(t) [m]"
  );
  strg.xlabelSetpoint = checkForUndefinedString(
    strings[i]._eixo_x_formato_setpoint,
    "t [s]"
  );

  strg.tituloPert = checkForUndefinedString(
    strings[i]._titulo_formato_perturbacao,
    "Formato Perturbação [% Fcmax]"
  );
  strg.ylabelPert = checkForUndefinedString(
    strings[i]._eixo_y_formato_perturbacao,
    "Fp(t) "
  );
  strg.xlabelPert = checkForUndefinedString(
    strings[i]._eixo_x_formato_perturbacao,
    "t [s]"
  );

  strg.ylabelBiestavel = checkForUndefinedString(
    strings[i]._eixo_y_saida_biestavel,
    "OP(t) [%]"
  );
  strg.xlabelBiestavel = checkForUndefinedString(
    strings[i]._eixo_x_saida_biestavel,
    "x(t) [m]"
  );

  strg.ylabelSaidaMotor = checkForUndefinedString(
    strings[i]._eixo_y_saida_motor,
    "Fc(t) [% Fcmax]"
  );
  strg.xlabelSaidaMotor = checkForUndefinedString(
    strings[i]._eixo_x_saida_motor,
    "OP(t) [%]"
  );

  //Dinamômetro Analógico
  strg.tituloDinAn = checkForUndefinedString(
    strings[i]._titulo_dinamometro_analogico,
    "OP[%]"
  );
  strg.saidaAutoDinAn = checkForUndefinedString(
    strings[i]._saida_AUTO_dinamometro_analogico,
    "AUTO"
  );
  strg.saidaManDinAn = checkForUndefinedString(
    strings[i]._saida_MAN_dinamometro_analogico,
    "MAN"
  );

  //Menu da versão mobile
  strg.menu_mobile =  checkForUndefinedString(
    strings[i]._menu_mobile,
    ["Variáveis", "Controle", "Entradas"]
  );

  //Menu de navegação entre os painéis de entrada
  strg.menu_paineis =  checkForUndefinedString(
    strings[i]._menu_paineis,
    ["Processo", "OP/FC", "SP", "FP", "Exibir", "Sobre"]
  );


  //Painel Saída Controlador/Saída Motor
  strg.tituloPainelOpFc = checkForUndefinedString(
    strings[i]._titulo_painel_Op,
    "Saída Controlador (OP)"
  );
  strg.saidaP_painelOpFc = checkForUndefinedString(
    strings[i]._saida_P_painel_Op,
    "P:"
  );
  strg.saidaI_painelOpFc = checkForUndefinedString(
    strings[i]._saida_I_painel_Op,
    "I:"
  );
  strg.saidaD_painelOpFc = checkForUndefinedString(
    strings[i]._saida_D_painel_Op,
    "D:"
  );
  strg.saidaOP0_painelOpFc = checkForUndefinedString(
    strings[i]._saida_OP0_painel_Op,
    "OP0:"
  );

  //Painel Var Controlador
  strg.varPainelVarCont = [
    checkForUndefinedString(
      strings[i]._var_SP_painel_Var_Controlador,
      "SP: "
    ),
    checkForUndefinedString(
      strings[i]._var_PV_painel_Var_Controlador,
      "PV: "
    ),
    checkForUndefinedString(
      strings[i]._var_OP_painel_Var_Controlador,
      "OP: "
    ),
  ];

  //Painel de Controladores
  strg.titlePainelControlador = checkForUndefinedString(
    strings[i]._titulo_painel_Controlador,
    [
      "Controlador PID",
      "Controlador PD + I se erro < eLim",
      "Controlador PD + I se D < DLim",
      "Controlador Biestável",
    ]
  );

  strg.varPainelControlador = [
    //0
    checkForUndefinedString(strings[i]._Kp_painel_Controlador, "Kp:"),

    //1
    checkForUndefinedString(strings[i]._Ki_painel_Controlador, "Ki:"),

    //2
    checkForUndefinedString(strings[i]._Kd_painel_Controlador, "Kd:"),

    //3
    checkForUndefinedString(strings[i]._OP0_painel_Controlador, "OP0[%]:"),

    //4
    checkForUndefinedString(strings[i]._Ti_painel_Controlador, "Ti:"),

    //5
    checkForUndefinedString(strings[i]._Td_painel_Controlador, "Td:"),

    //6
    checkForUndefinedString(
      strings[i]._Imax_painel_Controlador,
      "Imax[%]:"
    ),

    //7
    checkForUndefinedString(
      strings[i]._Derivada_painel_Controlador,
      " Derivada da PV"
    ),

    //8
    checkForUndefinedString(
      strings[i]._Filtro_painel_Controlador,
      " Filtro PB"
    ),

    //9
    checkForUndefinedString(
      strings[i]._freq_corte_painel_Controlador,
      ": Freq Corte [Hz]:"
    ),

    //10
    checkForUndefinedString(
      strings[i]._eLim_painel_Controlador,
      "eLim[m]:"
    ),

    //11
    checkForUndefinedString(
      strings[i]._DLim_painel_Controlador,
      "DLim[%]:"
    ),

    //12
    checkForUndefinedString(
      strings[i]._OPmax_painel_Controlador,
      "OPmax[%]:"
    ),

    //13
    checkForUndefinedString(
      strings[i]._OPmin_painel_Controlador,
      "OPmin[%]:"
    ),

    //14
    checkForUndefinedString(
      strings[i]._BandaMorta_painel_Controlador,
      "Banda Morta[m]:"
    ),

    //15
    checkForUndefinedString(
      strings[i]._setpoint_baixo_painel_Controlador,
      "SPB:"
    ),

    //16
    checkForUndefinedString(
      strings[i]._setpoint_alto_painel_Controlador,
      "SPA:"
    ),

    //17
    checkForUndefinedString(
      strings[i]._controle_DESL_painel_Controlador,
      " DESL"
    ),

    //18
    checkForUndefinedString(
      strings[i]._controle_AUTO_painel_Controlador,
      " AUTO"
    ),

    //19
    checkForUndefinedString(
      strings[i]._controle_MAN_painel_Controlador,
      " MAN"
    ),

    //20
    checkForUndefinedString(
      strings[i]._controle_AD_painel_Controlador,
      " AD"
    ),
  ];

  //Painel Envelope
  strg.titlePainelenvelope = checkForUndefinedString(
    strings[i]._titulo_painel_Envelope,
    'Envelope'
  );

  strg.varPainelEnvelope = [
    //0
    checkForUndefinedString(strings[i]._Env_max, "max [m]"),

    //1
    checkForUndefinedString(strings[i]._Env_min, "min [m]"),
  ];

  //Painel Motor
  strg.titlePainelMotor = checkForUndefinedString(
    strings[i]._titulo_painel_Motor,
    ["Motor Linear Ideal", "Motor Linear Não Ideal"]
  );

  strg.varPainelMotor = [
    //0
    checkForUndefinedString(strings[i]._Fcmax_painel_Motor, "Fcmax[N]:"),

    //1
    checkForUndefinedString(strings[i]._Fcmax_inc_central, "Inc central:"),

    //2
    checkForUndefinedString(strings[i]._Fcmax_histerese, "Histerese[%]:"),

    //3
    checkForUndefinedString(strings[i]._modo_acao_motor, "DIR"),

    //4
    checkForUndefinedString(strings[i]._atraso_transporte_Motor, "aTransp[ms]:"),
  ];

  //Painel Indicador de Posição
  strg.titleIndPos = checkForUndefinedString(
    strings[i]._titulo_painel_Ind_Pos,
    "Lim Indic Posição"
  );

  strg.varPainelIndPos = [
    //0
    checkForUndefinedString(strings[i]._xmax_painel_Ind_Pos, "xmax[m]:"),

    checkForUndefinedString(strings[i]._xmnin_painel_Ind_Pos, "xmin[m]:"),

    checkForUndefinedString(strings[i]._erro_Ind_Pos, "erro[m]:"),
  ];

  //Painel Perturbação
  strg.titlePert = checkForUndefinedString(
    strings[i]._titulo_painel_Pert,
    "Perturbação"
  );
  strg.tiposPert = [
    checkForUndefinedString(strings[i]._tipo_Perturbacao[0], "nenhuma"),
    checkForUndefinedString(
      strings[i]._tipo_Perturbacao[1],
      "onda senoidal"
    ),
    checkForUndefinedString(
      strings[i]._tipo_Perturbacao[2],
      "onda quadrada"
    ),
    checkForUndefinedString(
      strings[i]._tipo_Perturbacao[3],
      "onda triangular"
    ),
    checkForUndefinedString(
      strings[i]._tipo_Perturbacao[4],
      "dente de serra"
    ),
    checkForUndefinedString(
      strings[i]._tipo_Perturbacao[5],
      "trem de impulsos"
    ),
    checkForUndefinedString(
      strings[i]._tipo_Perturbacao[6],
      "ruído aleatório"
    ),
    checkForUndefinedString(strings[i]._tipo_Perturbacao[7], "MANUAL"),
  ];

  strg.varPainelPert = [
    //0
    checkForUndefinedString(strings[i]._Fpmax_painel_Pert, "Fpmax[%]:"),
    //1
    checkForUndefinedString(strings[i]._Fpmin_painel_Pert, "Fpmin[%]:"),
    //2
    checkForUndefinedString(strings[i]._periodo_painel_Pert, "Período[s]:"),
    //3
    checkForUndefinedString(strings[i]._t_alto_painel_Pert, "t_alto[%]:"),
    //4
    checkForUndefinedString(strings[i]._Fp_manual_painel_Pert, "Fp:"),
  ];
  strg.buttonPainelPert = checkForUndefinedString(
    strings[i]._aplica_perturbacao_painel_Pert,
    ["Aplicar Perturbação", "Inibir Perturbação"]
  );

  //Painel Setpoint
  strg.titleSetpoint = checkForUndefinedString(
    strings[i]._titulo_painel_Setpoint,
    "Setpoint (SP)"
  );
  strg.tiposSetpoint = [
    //0
    checkForUndefinedString(strings[i]._tipo_Setpoint[0], "MANUAL"),
    //1
    checkForUndefinedString(strings[i]._tipo_Setpoint[1], "onda senoidal"),
    //2
    checkForUndefinedString(strings[i]._tipo_Setpoint[2], "onda quadrada"),
    //3
    checkForUndefinedString(strings[i]._tipo_Setpoint[3], "onda triangular"),
    //4
    checkForUndefinedString(strings[i]._tipo_Setpoint[4], "dente de serra"),
    //5
    checkForUndefinedString(strings[i]._tipo_Setpoint[5], "trem de impulsos"),
    //6
    checkForUndefinedString(strings[i]._tipo_Setpoint[6], "ruído aleatório"),
  ];

  strg.varPainelSetpoint = [
    //0
    checkForUndefinedString(
      strings[i]._xSPmax_painel_Setpoint,
      "xSPmax[m]:"
    ),
    
    //1
    checkForUndefinedString(
      strings[i]._xSPmin_painel_Setpoint,
      "xSPmin[m]:"
    ),
    
    //2
    checkForUndefinedString(
      strings[i]._periodo_painel_Setpoint,
      "Período[s]:"
    ),
    
    //3
    checkForUndefinedString(
      strings[i]._t_alto_painel_Setpoint,
      "t_alto[%]:"
    ),

  ];
  strg.buttonPainelSetpoint = checkForUndefinedString(
    strings[i]._aplica_setpoint_painel_Setpoint,
    ["Aplicar Setpoint", "Inibir Setpoint"]
  );
  
  //Configurações da Régua
  strg.configRegua = [
    //0
    checkForUndefinedString(
      strings[i]._config_regua,
      "Régua"
    ),
    
    //1
    checkForUndefinedString(
      strings[i]._banda_proporcional_config_regua,
      "Banda Proporcional"
    ),
    
    //2
    checkForUndefinedString(
      strings[i]._banda_morta_config_regua,
      "Banda Morta"
    ), 
    
    //3
    checkForUndefinedString(
      strings[i]._ind_pos_config_regua,
      "Ind Posição"
    ),
    
    //4
    checkForUndefinedString(
      strings[i]._linha_setpoint_config_regua,
      "Linha setpoint"
    ),
    
    //5
    checkForUndefinedString(
      strings[i]._linha_pos_real_config_regua,
      "Linha posição real"
    ),
    
    //6
    checkForUndefinedString(
      strings[i]._texto_slider_setpoint,
      "xSP:"
    ),

    //7
    checkForUndefinedString(
      strings[i]._envelope_de_operacao,
      "Envelope de Operação:"
    ),

    //8
    checkForUndefinedString(
      strings[i]._texto_violacao_envelope,
      "EV"
    ),
    
  ]
  
  //Painel Forças Atuantes
  strg.varPainelForcasAtuantes=[
    checkForUndefinedString(
      strings[i]._titulo_painel_Forcas_Atuantes,
      "Forças Atuantes"
    ),
    checkForUndefinedString(
      strings[i]._opcoes_painel_Forcas_Atuantes,
      ["Ocultar", "x1", "x100", "x1000"]
    ),
  ];

  


    // parâmetros de resolução de tela
  strg.fpsEsperado = checkForUndefinedString(
      strings[i]._fps_Esperado,
      "FPS esperado"
    );
  strg.fpsMedio = checkForUndefinedString(
      strings[i]._fps_medio,
      "FPS médio"
    );
  
}


