/* Arquivo de cenários pré configarados

Para incluir um novo cenário siga os seguintes passos:
 1 - copie todo o conteúdo delimitado pelas chaves {} do cenário com "label": 'padrão' (incluindo as chaves) 
e cole logo após o último cenário, antes do colchete de fechamento ].
 2 - Identifique o novo cenário modificando o campo "label": 'padrão' para "label": 'novaIdentificaçãoDesejada' 
e modifique os demais campos com os novos parâmetros.

Observações importantes:
 1 - Cada cenário deve estar delimitado por chaves {} e separados entre si por vírgulas
 2 - Todos os campos devem ser estar no seguinte padrão "nomeCampo": valorCampo
 3 - Todos os cenários devem conter todos campos "label":, "m":, "K_mola":,     
      "C_amortecedor":, "Kp":, "Ki":, "Kd":, "Fcmax":...
   3.1 - O nome dos campos nunca deve ser alterado, somente seus valores.
 4 - Todos os campos devem estar separados por vírgulas
 5 - O campo "label" deve ser preenchido com um valor entre '' 
           Ex: maneira correta  "label": 'padrão'
               maneira INcorreta "label": padrão

Definições:

Erro: 
e(t) = SP-PV

Saída: 
OP(t) = Kp[e(t)+(1/Ti)integral(e(t))+(Td)derivada(e(t))] + OP0

Kp, Ki, Kd, Ti e Td são adimensionais, sendo Ki = Kp/Ti e Kd = KpTd
logo   

OP(t) = Kp[e(t)] + Ki[integral(e(t))] + Kd[derivada(e(t))] + OP0

*/



let cenarios = [

    {
      label_ptBR: "Cenário Demonstração",
      label_enUS: "Demo Scenario",
      m: 5, //massa do carrinho em unidades SI
      posicao_indicada_min: -10, // piso de escala de x indicada (unidades SI)
      posicao_indicada_max: 10, // teto de escala de x indicada (unidades SI)
  
      posicao_inicial: -16, // valor inicial da posição x do carrinho em relação à origem (unidades SI)
      velocidade_inicial: 150, // velocidade inicial do carrinho (SI)
      Kp: 2, // ganho da componente proporcional (adimensional) - Obs. Kp=0 desativa o PID sem inibir a pré-carga OP0
      Ki: 1, // ganho da componente integral (adimensional) - Ki precisa ser nulo para habilitar a pré-carga OP0
      Kd: 2, // ganho da componente derivativa (adimensional)
  
      perturbacao_Tipo: 2, // 0-nenhuma, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório, 7-manual
      perturbacao_manual_inicial: 0, // habilitado no modo manual (% de Fcmax), limitado aos valores de perturbacao_Fmax e perturbacao_Fmin
      perturbacao_Fmax: -40, // valor máximo da perturbAção (unidades SI)
      perturbacao_Fmin: 0, // valor mínimo da perturbAção (unidades SI)
      perturbacao_Periodo: 10, // período da perturbAção (unidades SI)
      perturbacao_t_on: 95, // percentual do período da onda de perturbAção em nível máximo (para onda quadrada)
      setpoint_Vmin: -5, // valor mínimo que o setpoint pode assumir (unidades SI)
      setpoint_Vmax: 5, // valor máximo que o setpoint pode assumir (unidades SI)
      setpoint_Tipo: 2, // 0-MANUAL, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório
      setpoint_Periodo: 25, // período do setpoint se for selecionada uma onda (unidades SI)
      setpoint_t_on: 50, // percentual do período da onda do setpoint em nível máximo (onda quadrada)
      setpoint_manual_inicial: 10, // valor inicial do setpoint quando é selecionado o setpoint manual (unidades SI)
      Fc_manual_inicial: -100, // valor inicial % de OP (de -100 a 100) do modo MAN 
      eLim: 3, //limiar para integração no modo PD+I se erro<eLim
      DLim: 10, //limiar para integração no modo PD+I se D<DLim
      elimina_surto_derivativo: 1, // 0-função desabilitada, 1-função habilitada
      ativa_filtro_passa_baixa: 1, // 0-filtro desabilitado, 1-filtro habilitado
      frequencia_corte: 1, // frequencia de corte do filtro passa baixa. (em Hz)
      multiplicador_forcas_atuantes: 1,// multiplicador para as forças atuantes no carrinho. Valores possíveis: 0, 1, 10 ou 100. Valores diferentes serão tratados como 1. 
  
    },
  
  
  
  
  
    {
      label_ptBR: "1. Espaço Sideral", //nome do cenário em português BR
      label_enUS: "1. Outer Space", //nome do cenário em inglês US
      // expressar valores decimais com ponto . em vez de vírgula ,
  
      // parâmetros do processo a ser controlado
      m: 5000, //massa do carrinho em unidades SI
      K_mola: 0, // constante da mola em unidades SI (pode ser negativa para simular pêndulo invertido)
      C_amortecedor: 0, // coeficiente de amortecimento SI (pode ser negativa)
      posicao_inicial: -16, // valor inicial da posição x do carrinho em relação à origem (unidades SI)
      velocidade_inicial: 8, // velocidade inicial do carrinho (SI)
      perturbacao_Tipo: 2, // 0-nenhuma, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório, 7-manual
      perturbacao_manual_inicial: 0, // habilitado no modo manual (% de Fcmax), limitado aos valores de perturbacao_Fmax e perturbacao_Fmin
      perturbacao_Fmax: 0, // valor máximo da perturbAção (unidades SI)
      perturbacao_Fmin: -50, // valor mínimo da perturbAção (unidades SI)
      perturbacao_Periodo: 30, // período da perturbAção (unidades SI)
      perturbacao_t_on: 95, // percentual do período da onda de perturbAção em nível máximo (para onda quadrada)
      perturbacao_inicialmente_inibida: 0, //0-perturbacao inicialmente ativada, 1- perturbacao inicialmente inibida
  
      // parâmetros do indicador de posição
      posicao_indicada_min: -15, // piso de escala de x indicada (unidades SI)
      posicao_indicada_max: 15, // teto de escala de x indicada (unidades SI)
      erro_indicador: 0, // erro no indicador de posição (unidade SI)
  
      // parâmetros dos controladores
      // os dois parâmetros a seguir precisam ser coerentes com os parâmetros do indicador de posição
      setpoint_Vmin: -5, // valor mínimo que o setpoint pode assumir (unidades SI)
      setpoint_Vmax: 5, // valor máximo que o setpoint pode assumir (unidades SI)
      tipo_controlador: 0, //0-Controlador PID, 1-Controlador PD + I se e<eLim, 2-Controlador PD + I se D<DLim, 3- Controlador Biestável
      estado_inicial_controlador: 0, //0-DESL., 1-controle AUTO, 2-controle MANUAL
      modo_acao_controlador: 0, // 0-Ação Reversa, 1- Ação Direta
      Fc_manual_inicial: -20, // valor inicial % de OP (de -100 a 100) do modo MAN 
      setpoint_Tipo: 0, // 0-MANUAL, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório
      setpoint_Periodo: 100, // período do setpoint se for selecionada uma onda (unidades SI)
      setpoint_t_on: 50, // percentual do período da onda do setpoint em nível máximo (onda quadrada)
      setpoint_auto_inibido: 0, // 0-setpoint automatico inicialmente ativado, 1- setpoint automatico inicialmente inibido
      setpoint_manual_inicial: 5, // valor inicial do setpoint quando é selecionado o setpoint manual (unidades SI)
      
      //parâmetros do controlador PID
      Kp: 3, // ganho da componente proporcional (adimensional) - Obs. Kp=0 desativa o PID sem inibir a pré-carga OP0
      Ki: 0, // ganho da componente integral (adimensional) - Ki precisa ser nulo para habilitar a pré-carga OP0
      Kd: 6, // ganho da componente derivativa (adimensional)
      OP0: 0, //pré-carga em % de OP (de -100 a 100) (adimensional)
      Imax: 100, //valor máximo em % da componente integral
      eLim: 2, //limiar para integração no modo PD+I se erro<eLim
      DLim: 5, //limiar para integração no modo PD+I se D<DLim
      elimina_surto_derivativo: 1, // 0-função desabilitada, 1-função habilitada
      ativa_filtro_passa_baixa: 1, // 0-filtro desabilitado, 1-filtro habilitado
      frequencia_corte: 0.1, // frequencia de corte do filtro passa baixa. (em Hz)
      
      //parâmetros do controlador Biestável
      biestavel_OPmax: 100, // saída nivel alto do controlador, (% de Fcmax) 
      biestavel_OPmin: -100, // saída nivel alto do controlador, (% de Fcmax)
      biestavel_banda_morta: 4, //banda morta do controlador Biestável (unidades SI)
  
      // parâmetros do motor linear
      tipo_atuador: 0, // 0- Motor Linear Ideal, 1- Motor Linear NÃO Ideal (sigmoid)
      modo_acao_motor: 1, // 0-Ação Reversa, 1- Ação Direta
      Fcmax: 5e4, // valor absoluto da máxima força aplicável (trAção/compress�o) pelo motor linear (unidades SI)
      atraso_transporte_atuador: 0, //valor em milissegundos do atraso de transporte do atuador. O valor é
                                  // aproximado pois foi utilizada uma aproximação de primeira ordem para a
                                  // função de transferência do atraso de transporte.
      ganho_atuador: 2, // ganho/inclinação central da curva do atuador (aplicável somente para atuador NÃO ideal)
      histerese_atuador: 0, // "folga" do atuador em %
  
      // modo de exibição da régua
      exibe_banda_proporcional: 1, // 0-NÃO exibe a barra (cor verde) de banda proporcional (aplicável ao controlador PID somente), 1-exibe a barra de banda proporcional
      exibe_banda_morta: 1, // 0-NÃO exibe a barra (cor verde) de banda morta (aplicável ao controlador Biestável somente), 1-exibe a barra de banda morta
      exibe_faixa_indicao: 1, // 0-NÃO exibe faixa de indicAção (cor laranja), 1-exibe faixa de indicAção
      exibe_linha_setpoint: 1, // 0-NÃO exibe linha tracejada (cor azul) de setpoint, 1-exibe linha tracejada de setpoint
      exibe_linha_posicao_real: 1, // 0-NÃO exibe linha tracejada (cor cinza) de posição real, 1-exibe linha tracejada de posição real
      exibe_envelope_operacao: 1, // 0-NÃO exibe linhas (cor vermelha) dos limites do envelope de operaçao, 1-exibe linhas dos limites do envelope de operaçao
  
      // envelope de operação
      envelope_max: 14, // limite superior para o envelope de operação em [m]
      envelope_min: -14, // limite inferior para o envelope de operação em [m]
  
      // Forças Atuantes
      multiplicador_forcas_atuantes: 1,// multiplicador para as forças atuantes no carrinho. Valores possíveis: 0, 1, 10 ou 100. Valores diferentes serão tratados como 1. 
  
      // modo de exibição do painel saída PID/Atuador
      exibe_saida_atuador: 0, // 0-exibe saída PID, 1-exibe saída Atuador x sinal de controle 
      // parâmetros de resolu��o de tela
      // Ajustar a frame rate conforme o computador.
      // Inicialmente ajustar em 40 fps, ler o FPS m�dio e ajustar um valor definitivo ligeiramente inferior
      frameRate: 40, //taxa de frames por segundo
    },
  
  
  
  
  
  
  
  
  
  
  {
      label_ptBR: "2. Equilíbrio Indiferente", //nome do cenário
      label_enUS: "2. Indifferent Equilibrium", //nome do cenário em inglês US
      // expressar valores decimais com ponto . em vez de vírgula ,
  
      // parâmetros do motor linear
      Fcmax: 50000, // valor absoluto da máxima força aplicável (tração/compressão) pelo motor linear (unidades SI)
  
      // parâmetros do processo a ser controlado
      m: 5000, //massa do carrinho em unidades SI
      K_mola: 0, // constante da mola em unidades SI (pode ser negativa para simular pêndulo invertido)
      C_amortecedor: 4280, // coeficiente de amortecimento SI (pode ser negativa)
      posicao_inicial: -16, // valor inicial da posição x do carrinho em relação à origem (unidades SI)
      velocidade_inicial: 10, // velocidade inicial do carrinho (SI)
      perturbacao_Tipo: 2, // 0-nenhuma, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório, 7-manual
      perturbacao_manual_inicial: -70, // habilitado no modo manual (% de Fcmax), limitado aos valores de perturbacao_Fmax e perturbacao_Fmin
      perturbacao_Fmax: 0, // valor máximo da perturbação (% de Fcmax)
      perturbacao_Fmin: -110, // valor mínimo da perturbação (% de Fcmax)
      perturbacao_Periodo: 15, // periodo da perturbação (unidades SI)
      perturbacao_t_on: 93, // percentual do periodo da onda de perturbação em nível máximo (para onda quadrada)
      perturbacao_inicialmente_inibida: 1, 
  
      // parâmetros do indicador de posição
      posicao_indicada_min: -6, // piso de escala de x indicada (unidades SI)
      posicao_indicada_max: 14, // teto de escala de x indicada (unidades SI)
  
      // parâmetros do controlador
      // os dois parâmetros a seguir precisam ser coerentes com os parâmetros do indicador de posição
      setpoint_Vmin: 0, // valor mínimo que o setpoint pode assumir (unidades SI)
      setpoint_Vmax: 8, // valor máximo que o setpoint pode assumir (unidades SI)
      estado_inicial_controlador: 0, //0-DESL., 1-controle AUTO, 2-controle MANUAL
      Kp: 2, // ganho da componente proporcional (adimensional) - Obs. Kp=0 desativa o PID sem inibir a pré-carga OP0
      Ki: 0,  // ganho da componente integral (adimensional) - Ki precisa ser nulo para habilitar a pré-carga OP0
      Kd: 2, // ganho da componente derivativa (adimensional)
      OP0: 0, //pré-carga em % de OP (de -100 a 100) (adimensional)
      modo_acao_controlador: 0, // 0-Ação Reversa, 1- Ação Direta
      Fc_manual_inicial: -20, // valor inicial % de OP (de -100 a 100) do modo MAN
      setpoint_Tipo: 0, // 0-MANUAL, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório
      setpoint_Periodo: 100, // periodo do setpoint se for selecionada uma onda (unidades SI)
      setpoint_t_on: 50, // percentual do periodo da onda do setpoint em nível máximo (onda quadrada)
      setpoint_manual_inicial: 4, // valor inicial do setpoint quando é selecionado o setpoint manual (unidades SI)
      elimina_surto_derivativo: 1, // 0-função desabilitada, 1-função habilitada
      ativa_filtro_passa_baixa: 1, // 0-filtro desabilitado, 1-filtro habilitado
      frequencia_corte: 0.1, // frequencia de corte do filtro passa baixa. (em Hz)
  
  
      // parâmetros de tela e modo de exibição da régua
      exibe_banda_proporcional: 1, // 0-NÃO exibe a barra (cor verde) de banda proporcional , 1-exibe a barra de banda proporcional
      exibe_faixa_indicao: 1, // 0-NÃO exibe faixa de indicação (cor laranja), 1-exibe faixa de indicação
      exibe_linha_setpoint: 1, // 0-NÃO exibe linha tracejada (cor azul) de setpoint, 1-exibe linha tracejada de setpoint
      exibe_linha_posicao_real: 1, // 0-NÃO exibe linha tracejada (cor cinza) de posição real, 1-exibe linha tracejada de posição real
      // Ajustar a frame rate conforme o computador. 
      // Inicialmente ajustar em 40 fps, ler o FPS médio e ajustar um valor definitivo ligeiramente inferior 
      frameRate: 40, //taxa de frames por segundo
  },
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  {
      label_ptBR: "3. Oscilador Ideal", //nome do cenário
      label_enUS: "3. Ideal Oscillator", //nome do cenário em inglês US
      // expressar valores decimais com ponto . em vez de vírgula ,
  
      // parâmetros do motor linear
      Fcmax: 50000, // valor absoluto da máxima força aplicável (tração/compressão) pelo motor linear (unidades SI)
  
      // parâmetros do processo a ser controlado
      m: 5000, //massa do carrinho em unidades SI
      K_mola: 1000, // constante da mola em unidades SI (pode ser negativa para simular pêndulo invertido)
      C_amortecedor: 0, // coeficiente de amortecimento SI (pode ser negativa)
      posicao_inicial: -16, // valor inicial da posição x do carrinho em relação à origem (unidades SI)
      velocidade_inicial: 0, // velocidade inicial do carrinho (SI)
      perturbacao_Tipo: 2, // 0-nenhuma, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório, 7-manual
      perturbacao_manual_inicial: -9, // habilitado no modo manual (% de Fcmax), limitado aos valores de perturbacao_Fmax e perturbacao_Fmin
      perturbacao_Fmax: 10, // valor máximo da perturbação (% de Fcmax)
      perturbacao_Fmin: -10, // valor mínimo da perturbação (% de Fcmax)
      perturbacao_Periodo: 14, // RESSON�NCIA = 14s 
      perturbacao_t_on: 50, // percentual do periodo da onda de perturbação em nível máximo (para onda quadrada)
      perturbacao_inicialmente_inibida: 1, 
  
      // parâmetros do indicador de posição
      posicao_indicada_min: 0, // piso de escala de x indicada (unidades SI)
      posicao_indicada_max: 10, // teto de escala de x indicada (unidades SI)
  
      // parâmetros do controlador
      // os dois parâmetros a seguir precisam ser coerentes com os parâmetros do indicador de posição
      setpoint_Vmin: 2, // valor mínimo que o setpoint pode assumir (unidades SI)
      setpoint_Vmax: 8, // valor máximo que o setpoint pode assumir (unidades SI)
      estado_inicial_controlador: 0, //0-DESL., 1-controle AUTO, 2-controle MANUAL
      Kp: 1, // ganho da componente proporcional (adimensional) - Obs. Kp=0 desativa o PID sem inibir a pré-carga OP0
      Ki: 0,  // ganho da componente integral (adimensional) - Ki precisa ser nulo para habilitar a pré-carga OP0
      Kd: 2, // ganho da componente derivativa (adimensional)
      OP0: 9, //pré-carga em % de OP (de -100 a 100) (adimensional)
      modo_acao_controlador: 0, // 0-Ação Reversa, 1- Ação Direta
      Fc_manual_inicial: -100, // valor inicial % de OP (de -100 a 100) do modo MAN
      setpoint_Tipo: 0, // 0-MANUAL, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório
      setpoint_Periodo: 100, // periodo do setpoint se for selecionada uma onda (unidades SI)
      setpoint_t_on: 50, // percentual do periodo da onda do setpoint em nível máximo (onda quadrada)
      setpoint_manual_inicial: 5, // valor inicial do setpoint quando é selecionado o setpoint manual (unidades SI)
      elimina_surto_derivativo: 0, // 0-função desabilitada, 1-função habilitada
      ativa_filtro_passa_baixa: 1, // 0-filtro desabilitado, 1-filtro habilitado
      frequencia_corte: 0.1, // frequencia de corte do filtro passa baixa. (em Hz)
  
      // parâmetros de tela e modo de exibição da régua
      exibe_banda_proporcional: 1, // 0-NÃO exibe a barra (cor verde) de banda proporcional , 1-exibe a barra de banda proporcional
      exibe_faixa_indicao: 1, // 0-NÃO exibe faixa de indicação (cor laranja), 1-exibe faixa de indicação
      exibe_linha_setpoint: 1, // 0-NÃO exibe linha tracejada (cor azul) de setpoint, 1-exibe linha tracejada de setpoint
      exibe_linha_posicao_real: 1, // 0-NÃO exibe linha tracejada (cor cinza) de posição real, 1-exibe linha tracejada de posição real
      // Ajustar a frame rate conforme o computador. 
      // Inicialmente ajustar em 40 fps, ler o FPS médio e ajustar um valor definitivo ligeiramente inferior 
      frameRate: 40, //taxa de frames por segundo
  },
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  {
      label_ptBR: "4. Processo Subamortecido", //nome do cenário
      label_enUS: "4. Underdampened Process", //nome do cenário em inglês US
      // expressar valores decimais com ponto . em vez de vírgula ,
  
      // parâmetros do motor linear
      Fcmax: 50000, // valor absoluto da máxima força aplicável (tração/compressão) pelo motor linear (unidades SI)
  
      // parâmetros do processo a ser controlado
      m: 5000, //massa do carrinho em unidades SI
      K_mola: 1000, // constante da mola em unidades SI (pode ser negativa para simular pêndulo invertido)
      C_amortecedor: 1000, // coeficiente de amortecimento SI (pode ser negativa)
      posicao_inicial: -12, // valor inicial da posição x do carrinho em relação à origem (unidades SI)
      velocidade_inicial: 2, // velocidade inicial do carrinho (SI)
      perturbacao_Tipo: 2, // 0-nenhuma, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório, 7-manual
      perturbacao_manual_inicial: -60, // habilitado no modo manual (% de Fcmax), limitado aos valores de perturbacao_Fmax e perturbacao_Fmin
      perturbacao_Fmax: 0, // valor máximo da perturbação (% de Fcmax)
      perturbacao_Fmin: -100, // valor mínimo da perturbação (% de Fcmax)
      perturbacao_Periodo: 30, // periodo da perturbação (unidades SI)
      perturbacao_t_on: 93, // percentual do periodo da onda de perturbação em nível máximo (para onda quadrada)
      perturbacao_inicialmente_inibida: 1, 
  
      // parâmetros do indicador de posição
      posicao_indicada_min: -6, // piso de escala de x indicada (unidades SI)
      posicao_indicada_max: 14, // teto de escala de x indicada (unidades SI)
  
      // parâmetros do controlador
      // os dois parâmetros a seguir precisam ser coerentes com os parâmetros do indicador de posição
      setpoint_Vmin: -4, // valor mínimo que o setpoint pode assumir (unidades SI)
      setpoint_Vmax: 12, // valor máximo que o setpoint pode assumir (unidades SI)
      estado_inicial_controlador: 0, //0-DESL., 1-controle AUTO, 2-controle MANUAL
      Kp: 2, // ganho da componente proporcional (adimensional) - Obs. Kp=0 desativa o PID sem inibir a pré-carga OP0
      Ki: 0.5,  // ganho da componente integral (adimensional) - Ki precisa ser nulo para habilitar a pré-carga OP0
      Kd: 2, // ganho da componente derivativa (adimensional)
      OP0: 0, //pré-carga em % de OP (de -100 a 100) (adimensional)
      modo_acao_controlador: 0, // 0-Ação Reversa, 1- Ação Direta
      Fc_manual_inicial: -100, // valor inicial % de OP (de -100 a 100) do modo MAN
      setpoint_Tipo: 0, // 0-MANUAL, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório
      setpoint_Periodo: 100, // periodo do setpoint se for selecionada uma onda (unidades SI)
      setpoint_t_on: 50, // percentual do periodo da onda do setpoint em nível máximo (onda quadrada)
      setpoint_manual_inicial: 4, // valor inicial do setpoint quando é selecionado o setpoint manual (unidades SI)
      DLim: 5,
      eLim: 1,
      elimina_surto_derivativo: 0, // 0-função desabilitada, 1-função habilitada
      ativa_filtro_passa_baixa: 1, // 0-filtro desabilitado, 1-filtro habilitado
      frequencia_corte: 0.1, // frequencia de corte do filtro passa baixa. (em Hz)
  
      // parâmetros de tela e modo de exibição da régua
      exibe_banda_proporcional: 1, // 0-NÃO exibe a barra (cor verde) de banda proporcional , 1-exibe a barra de banda proporcional
      exibe_faixa_indicao: 1, // 0-NÃO exibe faixa de indicação (cor laranja), 1-exibe faixa de indicação
      exibe_linha_setpoint: 1, // 0-NÃO exibe linha tracejada (cor azul) de setpoint, 1-exibe linha tracejada de setpoint
      exibe_linha_posicao_real: 1, // 0-NÃO exibe linha tracejada (cor cinza) de posição real, 1-exibe linha tracejada de posição real
      // Ajustar a frame rate conforme o computador. 
      // Inicialmente ajustar em 40 fps, ler o FPS médio e ajustar um valor definitivo ligeiramente inferior 
      frameRate: 40, //taxa de frames por segundo
  },
  
  
  
  
  
  
  
  
  {
      label_ptBR: "5. Processo c/ Amort. Crítico", //nome do cenário
      label_enUS: "5. Critically-dampened Process", //nome do cenário em inglês US
      // expressar valores decimais com ponto . em vez de vírgula ,
  
      // parâmetros do motor linear
      Fcmax: 50000, // valor absoluto da máxima força aplicável (tração/compressão) pelo motor linear (unidades SI)
  
      // parâmetros do processo a ser controlado
      m: 5000, //massa do carrinho em unidades SI
      K_mola: 1000, // constante da mola em unidades SI (pode ser negativa para simular pêndulo invertido)
      C_amortecedor: 4280, // coeficiente de amortecimento SI (pode ser negativa)
      posicao_inicial: -12, // valor inicial da posição x do carrinho em relação à origem (unidades SI)
      velocidade_inicial: 2, // velocidade inicial do carrinho (SI)
      perturbacao_Tipo: 2, // 0-nenhuma, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório, 7-manual
      perturbacao_manual_inicial: -60, // habilitado no modo manual (% de Fcmax), limitado aos valores de perturbacao_Fmax e perturbacao_Fmin
      perturbacao_Fmax: 0, // valor máximo da perturbação (% de Fcmax)
      perturbacao_Fmin: -100, // valor mínimo da perturbação (% de Fcmax)
      perturbacao_Periodo: 15, // periodo da perturbação (unidades SI)
      perturbacao_t_on: 93, // percentual do periodo da onda de perturbação em nível máximo (para onda quadrada)
      perturbacao_inicialmente_inibida: 1, 
  
      // parâmetros do indicador de posição
      posicao_indicada_min: -4, // piso de escala de x indicada (unidades SI)
      posicao_indicada_max: 16, // teto de escala de x indicada (unidades SI)
  
      // parâmetros do controlador
      // os dois parâmetros a seguir precisam ser coerentes com os parâmetros do indicador de posição
      setpoint_Vmin: -2, // valor mínimo que o setpoint pode assumir (unidades SI)
      setpoint_Vmax: 14, // valor máximo que o setpoint pode assumir (unidades SI)
      estado_inicial_controlador: 0, //0-DESL., 1-controle AUTO, 2-controle MANUAL
      Kp: 1, // ganho da componente proporcional (adimensional) - Obs. Kp=0 desativa o PID sem inibir a pré-carga OP0
      Ki: 0,  // ganho da componente integral (adimensional) - Ki precisa ser nulo para habilitar a pré-carga OP0
      Kd: 0, // ganho da componente derivativa (adimensional)
      OP0: 12, //pré-carga em % de OP (de -100 a 100) (adimensional)
      modo_acao_controlador: 0, // 0-Ação Reversa, 1- Ação Direta
      Fc_manual_inicial: -100, // valor inicial % de OP (de -100 a 100) do modo MAN
      setpoint_Tipo: 0, // 0-MANUAL, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório
      setpoint_Periodo: 100, // periodo do setpoint se for selecionada uma onda (unidades SI)
      setpoint_t_on: 50, // percentual do periodo da onda do setpoint em nível máximo (onda quadrada)
      setpoint_manual_inicial: 6, // valor inicial do setpoint quando é selecionado o setpoint manual (unidades SI)
      elimina_surto_derivativo: 0,// 0-função desabilitada, 1-função habilitada
      ativa_filtro_passa_baixa: 0, // 0-filtro desabilitado, 1-filtro habilitado
      frequencia_corte: 0.1, // frequencia de corte do filtro passa baixa. (em Hz)
  
      // parâmetros de tela e modo de exibição da régua
      exibe_banda_proporcional: 1,// 0-NÃO exibe a barra (cor verde) de banda proporcional , 1-exibe a barra de banda proporcional
      exibe_faixa_indicao: 1,// 0-NÃO exibe faixa de indicação (cor laranja), 1-exibe faixa de indicação
      exibe_linha_setpoint: 1,// 0-NÃO exibe linha tracejada (cor azul) de setpoint, 1-exibe linha tracejada de setpoint
      exibe_linha_posicao_real: 1,// 0-NÃO exibe linha tracejada (cor cinza) de posição real, 1-exibe linha tracejada de posição real
      // Ajustar a frame rate conforme o computador. 
      // Inicialmente ajustar em 40 fps, ler o FPS médio e ajustar um valor definitivo ligeiramente inferior 
      frameRate: 40, //taxa de frames por segundo
  },
  
  
  
  
  
  
  
  
  
  {
      label_ptBR: "6. Processo Superamortecido", //nome do cenário
      label_enUS: "6. Overdampened Process", //nome do cenário em inglês US
  
      // expressar valores decimais com ponto . em vez de vírgula ,
  
      // parâmetros do motor linear
      Fcmax: 35000, // valor absoluto da máxima força aplicável (tração/compressão) pelo motor linear (unidades SI)
  
      // parâmetros do processo a ser controlado
      m: 5000, //massa do carrinho em unidades SI
      K_mola: 1000, // constante da mola em unidades SI (pode ser negativa para simular pêndulo invertido)
      C_amortecedor: 10000, // coeficiente de amortecimento SI (pode ser negativa)
      posicao_inicial: -12, // valor inicial da posição x do carrinho em relação à origem (unidades SI)
      velocidade_inicial: 2, // velocidade inicial do carrinho (SI)
      perturbacao_Tipo: 6, // 0-nenhuma, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório, 7-manual
      perturbacao_manual_inicial: -60, // habilitado no modo manual (% de Fcmax), limitado aos valores de perturbacao_Fmax e perturbacao_Fmin
      perturbacao_Fmax: 0, // valor máximo da perturbação (% de Fcmax)
      perturbacao_Fmin: -80, // valor mínimo da perturbação (% de Fcmax)
      perturbacao_Periodo: 30, // periodo da perturbação (unidades SI)
      perturbacao_t_on: 93, // percentual do periodo da onda de perturbação em nível máximo (para onda quadrada)
      perturbacao_inicialmente_inibida: 0, 
  
      // parâmetros do indicador de posição
      posicao_indicada_min: -10, // piso de escala de x indicada (unidades SI)
      posicao_indicada_max: 10, // teto de escala de x indicada (unidades SI)
  
      // parâmetros do controlador
      // os dois parâmetros a seguir precisam ser coerentes com os parâmetros do indicador de posição
      setpoint_Vmin: -6, // valor mínimo que o setpoint pode assumir (unidades SI)
      setpoint_Vmax: 6, // valor máximo que o setpoint pode assumir (unidades SI)
      estado_inicial_controlador: 0, //0-DESL., 1-controle AUTO, 2-controle MANUAL
      Kp: 5, // ganho da componente proporcional (adimensional) - Obs. Kp=0 desativa o PID sem inibir a pré-carga OP0
      Ki: 1,  // ganho da componente integral (adimensional) - Ki precisa ser nulo para habilitar a pré-carga OP0
      Kd: 0, // ganho da componente derivativa (adimensional)
      OP0: 0, //pré-carga em % de OP (de -100 a 100) (adimensional)
      Imax: 100, //valor máximo em % da componente integral
      eLim: 1.5, //limiar para integração no modo PD+I se erro<eLim
      DLim: 4, //limiar para integração no modo PD+I se D<DLim
      modo_acao_controlador: 0, // 0-Ação Reversa, 1- Ação Direta
      Fc_manual_inicial: -100, // valor inicial % de OP (de -100 a 100) do modo MAN
      setpoint_Tipo: 1, // 0-MANUAL, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório
      setpoint_Periodo: 90, // periodo do setpoint se for selecionada uma onda (unidades SI)
      setpoint_t_on: 50, // percentual do periodo da onda do setpoint em nível máximo (onda quadrada)
      setpoint_manual_inicial: 6, // valor inicial do setpoint quando é selecionado o setpoint manual (unidades SI)
      elimina_surto_derivativo: 0,// 0-função desabilitada, 1-função habilitada
      ativa_filtro_passa_baixa: 0, // 0-filtro desabilitado, 1-filtro habilitado
      frequencia_corte: 0.1, // frequencia de corte do filtro passa baixa. (em Hz)
  
      // parâmetros de tela e modo de exibição da régua
      exibe_banda_proporcional: 1 ,// 0-NÃO exibe a barra (cor verde) de banda proporcional , 1-exibe a barra de banda proporcional
      exibe_faixa_indicao: 1, // 0-NÃO exibe faixa de indicação (cor laranja), 1-exibe faixa de indicação
      exibe_linha_setpoint: 1, // 0-NÃO exibe linha tracejada (cor azul) de setpoint, 1-exibe linha tracejada de setpoint
      exibe_linha_posicao_real: 1, // 0-NÃO exibe linha tracejada (cor cinza) de posição real, 1-exibe linha tracejada de posição real
      // Ajustar a frame rate conforme o computador. 
      // Inicialmente ajustar em 40 fps, ler o FPS médio e ajustar um valor definitivo ligeiramente inferior 
      frameRate: 40, //taxa de frames por segundo
  },
  
  
  
  
  
  
  
  
  {
      label_ptBR: "7. Pêndulo Invertido", //nome do cenário
      label_enUS: "7. Inverted Pendulum", //nome do cenário em inglês US
      // expressar valores decimais com ponto . em vez de vírgula ,
  
      // parâmetros do motor linear
      Fcmax: 50000, // valor absoluto da máxima força aplicável (tração/compressão) pelo motor linear (unidades SI)
  
      // parâmetros do processo a ser controlado
      m: 5000, //massa do carrinho em unidades SI
      K_mola: -2000, // constante da mola em unidades SI (pode ser negativa para simular pêndulo invertido)
      C_amortecedor: 1000, // coeficiente de amortecimento SI (pode ser negativa)
      posicao_inicial: 1.5, // valor inicial da posição x do carrinho em relação à origem (unidades SI)
      velocidade_inicial: 0, // velocidade inicial do carrinho (SI)
      perturbacao_Tipo: 1, // 0-nenhuma, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório, 7-manual
      perturbacao_manual_inicial: -10, // habilitado no modo manual (% de Fcmax), limitado aos valores de perturbacao_Fmax e perturbacao_Fmin
      perturbacao_Fmax: 0, // valor máximo da perturbação (% de Fcmax)
      perturbacao_Fmin: -10, // valor mínimo da perturbação (% de Fcmax)
      perturbacao_Periodo: 1, // periodo da perturbação (unidades SI)
      perturbacao_t_on: 93, // percentual do periodo da onda de perturbação em nível máximo (para onda quadrada)
      perturbacao_inicialmente_inibida: 1, 
  
      // parâmetros do indicador de posição
      posicao_indicada_min: -15, // piso de escala de x indicada (unidades SI)
      posicao_indicada_max: 15, // teto de escala de x indicada (unidades SI)
  
      // parâmetros do controlador
      // os dois parâmetros a seguir precisam ser coerentes com os parâmetros do indicador de posição
      setpoint_Vmin: -6, // valor mínimo que o setpoint pode assumir (unidades SI)
      setpoint_Vmax: 6, // valor máximo que o setpoint pode assumir (unidades SI)
      estado_inicial_controlador: 0, //0-DESL., 1-controle AUTO, 2-controle MANUAL
      Kp: 3, // ganho da componente proporcional (adimensional) - Obs. Kp=0 desativa o PID sem inibir a pré-carga OP0
      Ki: 1,  // ganho da componente integral (adimensional) - Ki precisa ser nulo para habilitar a pré-carga OP0
      Kd: 5, // ganho da componente derivativa (adimensional)
      OP0: 0, //pré-carga em % de OP (de -100 a 100) (adimensional)
      modo_acao_controlador: 0, // 0-Ação Reversa, 1- Ação Direta
      Fc_manual_inicial: 80, // valor inicial % de OP (de -100 a 100) do modo MAN
      setpoint_Tipo: 1, // 0-MANUAL, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório
      setpoint_Periodo: 32, // periodo do setpoint se for selecionada uma onda (unidades SI)
      setpoint_t_on: 50, // percentual do periodo da onda do setpoint em nível máximo (onda quadrada)
      setpoint_manual_inicial: 6, // valor inicial do setpoint quando é selecionado o setpoint manual (unidades SI)
      setpoint_auto_inibido: 0, // 0-setpoint automatico inicialmente ativado, 1- setpoint automatico inicialmente inibido
      elimina_surto_derivativo: 0, // 0-função desabilitada, 1-função habilitada
      ativa_filtro_passa_baixa: 1, // 0-filtro desabilitado, 1-filtro habilitado
      frequencia_corte: 0.1, // frequencia de corte do filtro passa baixa. (em Hz)
  
  
      // parâmetros de tela e modo de exibição da régua
      exibe_banda_proporcional: 1, // 0-NÃO exibe a barra (cor verde) de banda proporcional , 1-exibe a barra de banda proporcional
      exibe_faixa_indicao: 1, // 0-NÃO exibe faixa de indicação (cor laranja), 1-exibe faixa de indicação
      exibe_linha_setpoint: 1, // 0-NÃO exibe linha tracejada (cor azul) de setpoint, 1-exibe linha tracejada de setpoint
      exibe_linha_posicao_real: 1, // 0-NÃO exibe linha tracejada (cor cinza) de posição real, 1-exibe linha tracejada de posição real
      // Ajustar a frame rate conforme o computador. 
      // Inicialmente ajustar em 40 fps, ler o FPS médio e ajustar um valor definitivo ligeiramente inferior 
      frameRate: 40, //taxa de frames por segundo
  },
  
  
  
  
  
  
  
  
  {
      label_ptBR: "8A. Transição Rápida", //nome do cenário
      label_enUS: "8A. Fast Transition", //nome do cenário em inglês US
      // expressar valores decimais com ponto . em vez de vírgula ,
  
      // parâmetros do motor linear
      Fcmax: 13e6, // valor absoluto da máxima força aplicável (tração/compressão) pelo motor linear (unidades SI)
  
      // parâmetros do processo a ser controlado
      m: 5000, //massa do carrinho em unidades SI
      K_mola: -2000, // constante da mola em unidades SI (pode ser negativa para simular pêndulo invertido)
      C_amortecedor: 1000, // coeficiente de amortecimento SI (pode ser negativa)
      posicao_inicial: 1, // valor inicial da posição x do carrinho em relação à origem (unidades SI)
      velocidade_inicial: 0, // velocidade inicial do carrinho (SI)
      perturbacao_Tipo: 1, // 0-nenhuma, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório, 7-manual
      perturbacao_manual_inicial: 0, // habilitado no modo manual (% de Fcmax), limitado aos valores de perturbacao_Fmax e perturbacao_Fmin
      perturbacao_Fmax: 0, // valor máximo da perturbação (% de Fcmax)
      perturbacao_Fmin: -1, // valor mínimo da perturbação (% de Fcmax)
      perturbacao_Periodo: 1, // periodo da perturbação (unidades SI)
      perturbacao_t_on: 93, // percentual do periodo da onda de perturbação em nível máximo (para onda quadrada)
      perturbacao_inicialmente_inibida: 1, 
  
      // parâmetros do indicador de posição
      posicao_indicada_min: -16, // piso de escala de x indicada (unidades SI)
      posicao_indicada_max: 16, // teto de escala de x indicada (unidades SI)
  
      // parâmetros do controlador
      // os dois parâmetros a seguir precisam ser coerentes com os parâmetros do indicador de posição
      setpoint_Vmin: -12, // valor mínimo que o setpoint pode assumir (unidades SI)
      setpoint_Vmax: 12, // valor máximo que o setpoint pode assumir (unidades SI)
      estado_inicial_controlador: 1, //0-DESL., 1-controle AUTO, 2-controle MANUAL
      Kp: 1, // ganho da componente proporcional (adimensional) - Obs. Kp=0 desativa o PID sem inibir a pré-carga OP0
      Ki: 0,  // ganho da componente integral (adimensional) - Ki precisa ser nulo para habilitar a pré-carga OP0
      Kd: 0.121, // ganho da componente derivativa (adimensional)
      OP0: 0, //pré-carga em % de OP (de -100 a 100) (adimensional)
      Imax: 0, //valor máximo em % da componente integral
      modo_acao_controlador: 0, // 0-Ação Reversa, 1- Ação Direta
      Fc_manual_inicial: 0, // valor inicial % de OP (de -100 a 100) do modo MAN
      setpoint_Tipo: 2, // 0-MANUAL, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório
      setpoint_Periodo: 3, // periodo do setpoint se for selecionada uma onda (unidades SI)
      setpoint_t_on: 50, // percentual do periodo da onda do setpoint em nível máximo (onda quadrada)
      setpoint_manual_inicial: -8, // valor inicial do setpoint quando é selecionado o setpoint manual (unidades SI)
      elimina_surto_derivativo: 1, // 0-função desabilitada, 1-função habilitada
      ativa_filtro_passa_baixa: 1, // 0-filtro desabilitado, 1-filtro habilitado
      frequencia_corte: 100, // frequencia de corte do filtro passa baixa. (em Hz)
  
      // parâmetros de tela e modo de exibição da régua
      exibe_banda_proporcional: 1, // 0-NÃO exibe a barra (cor verde) de banda proporcional , 1-exibe a barra de banda proporcional
      exibe_faixa_indicao: 1, // 0-NÃO exibe faixa de indicação (cor laranja), 1-exibe faixa de indicação
      exibe_linha_setpoint: 1, // 0-NÃO exibe linha tracejada (cor azul) de setpoint, 1-exibe linha tracejada de setpoint
      exibe_linha_posicao_real: 1, // 0-NÃO exibe linha tracejada (cor cinza) de posição real, 1-exibe linha tracejada de posição real
      // Ajustar a frame rate conforme o computador. 
      // Inicialmente ajustar em 40 fps, ler o FPS médio e ajustar um valor definitivo ligeiramente inferior 
      frameRate: 40, //taxa de frames por segundo
  },
  
  
  
  
  {                    
      label_ptBR: "8B. Qual é a razão do alarme?", //nome do cenário
      label_enUS: "8B. What is the alarm reason?", //nome do cenário em inglês US
      // expressar valores decimais com ponto . em vez de vírgula ,
  
      // parâmetros do motor linear
      Fcmax: 13e6, // valor absoluto da máxima força aplicável (tração/compressão) pelo motor linear (unidades SI)
  
      // parâmetros do processo a ser controlado
      m: 5000, //massa do carrinho em unidades SI
      K_mola: -2000, // constante da mola em unidades SI (pode ser negativa para simular pêndulo invertido)
      C_amortecedor: 1000, // coeficiente de amortecimento SI (pode ser negativa)
      posicao_inicial: 1, // valor inicial da posição x do carrinho em relação à origem (unidades SI)
      velocidade_inicial: 0, // velocidade inicial do carrinho (SI)
      perturbacao_Tipo: 1, // 0-nenhuma, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório, 7-manual
      perturbacao_manual_inicial: 0, // habilitado no modo manual (% de Fcmax), limitado aos valores de perturbacao_Fmax e perturbacao_Fmin
      perturbacao_Fmax: 0, // valor máximo da perturbação (% de Fcmax)
      perturbacao_Fmin: -1, // valor mínimo da perturbação (% de Fcmax)
      perturbacao_Periodo: 1, // periodo da perturbação (unidades SI)
      perturbacao_t_on: 93, // percentual do periodo da onda de perturbação em nível máximo (para onda quadrada)
      perturbacao_inicialmente_inibida: 1, 
      ocultar_sistema: 1, // 0: processo visível, 1: processo invisível
  
  
     // parâmetros do indicador de posição
      posicao_indicada_min: -16, // piso de escala de x indicada (unidades SI)
      posicao_indicada_max: 16, // teto de escala de x indicada (unidades SI)
      erro_indicador: -7, // erro no indicador de posição (unidade SI)
  
      // parâmetros do controlador
      // os dois parâmetros a seguir precisam ser coerentes com os parâmetros do indicador de posição
      setpoint_Vmin: -12, // valor mínimo que o setpoint pode assumir (unidades SI)
      setpoint_Vmax: 12, // valor máximo que o setpoint pode assumir (unidades SI)
      estado_inicial_controlador: 1, //0-DESL., 1-controle AUTO, 2-controle MANUAL
      Kp: 1, // ganho da componente proporcional (adimensional) - Obs. Kp=0 desativa o PID sem inibir a pré-carga OP0
      Ki: 0,  // ganho da componente integral (adimensional) - Ki precisa ser nulo para habilitar a pré-carga OP0
      Kd: 0.121, // ganho da componente derivativa (adimensional)
      OP0: 0, //pré-carga em % de OP (de -100 a 100) (adimensional)
      Imax: 0, //valor máximo em % da componente integral
      modo_acao_controlador: 0, // 0-Ação Reversa, 1- Ação Direta
      Fc_manual_inicial: 0, // valor inicial % de OP (de -100 a 100) do modo MAN
      setpoint_Tipo: 2, // 0-MANUAL, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório
      setpoint_Periodo: 3, // periodo do setpoint se for selecionada uma onda (unidades SI)
      setpoint_t_on: 50, // percentual do periodo da onda do setpoint em nível máximo (onda quadrada)
      setpoint_manual_inicial: -8, // valor inicial do setpoint quando é selecionado o setpoint manual (unidades SI)
      elimina_surto_derivativo: 1, // 0-função desabilitada, 1-função habilitada
      ativa_filtro_passa_baixa: 1, // 0-filtro desabilitado, 1-filtro habilitado
      frequencia_corte: 100, // frequencia de corte do filtro passa baixa. (em Hz)
  
  
   // modo de exibição da régua
      exibe_banda_proporcional: 0, // 0-NÃO exibe a barra (cor verde) de banda proporcional (aplicável ao controlador PID somente), 1-exibe a barra de banda proporcional
      exibe_banda_morta: 0, // 0-NÃO exibe a barra (cor verde) de banda morta (aplicável ao controlador Biestável somente), 1-exibe a barra de banda morta
      exibe_faixa_indicao: 0, // 0-NÃO exibe faixa de indicAção (cor laranja), 1-exibe faixa de indicAção
      exibe_linha_setpoint: 0, // 0-NÃO exibe linha tracejada (cor azul) de setpoint, 1-exibe linha tracejada de setpoint
      exibe_linha_posicao_real: 0, // 0-NÃO exibe linha tracejada (cor cinza) de posição real, 1-exibe linha tracejada de posição real
  
      // envelope de operação
      envelope_max: 16, // limite superior para o envelope de operação em [m]
      envelope_min: -16, // limite inferior para o envelope de operação em [m]
      exibe_envelope_operacao: 1, // 0-NÃO exibe linhas (cor vermelha) dos limites do envelope de operaçao, 1-exibe linhas dos limites do envelope de operaçao
  
   
      // Ajustar a frame rate conforme o computador. 
      // Inicialmente ajustar em 40 fps, ler o FPS médio e ajustar um valor definitivo ligeiramente inferior 
      frameRate: 40, //taxa de frames por segundo
  
  
  },
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  {
      label_ptBR: "9. Estabilização Forçada", //nome do cenário
      label_enUS: "9. Forced Stabilization", //nome do cenário em inglês US
      // expressar valores decimais com ponto . em vez de vírgula ,
  
      // parâmetros do motor linear
      tipo_atuador: 1, // 0- Motor Linear Ideal, 1- Motor Linear NÃO Ideal (sigmoid)
      Fcmax: 1.3e7, // valor absoluto da máxima força aplicável (trAção/compress�o) pelo motor linear (unidades SI)
      ganho_atuador: 1.5, // ganho/inclinação central da curva do atuador (aplicável somente para atuador NÃO ideal)
      histerese_atuador: 0, // "folga" do atuador em %
  
      // parâmetros do processo a ser controlado
      m: 5000, //massa do carrinho em unidades SI
      K_mola: 1000, // constante da mola em unidades SI (pode ser negativa para simular pêndulo invertido)
      C_amortecedor: 4280, // coeficiente de amortecimento SI (pode ser negativa)
      posicao_inicial: 0, // valor inicial da posição x do carrinho em relação à origem (unidades SI)
      velocidade_inicial: 0, // velocidade inicial do carrinho (SI)
      perturbacao_Tipo: 1, // 0-nenhuma, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório, 7-manual
      perturbacao_manual_inicial: 0, // habilitado no modo manual (% de Fcmax), limitado aos valores de perturbacao_Fmax e perturbacao_Fmin
      perturbacao_Fmax: 1, // valor máximo da perturbação (% de Fcmax)
      perturbacao_Fmin: -1, // valor mínimo da perturbação (% de Fcmax)
      perturbacao_Periodo: 5, // periodo da perturbação (unidades SI)
      perturbacao_t_on: 93, // percentual do periodo da onda de perturbação em nível máximo (para onda quadrada)
      perturbacao_inicialmente_inibida: 0, 
  
      // parâmetros do indicador de posição
      posicao_indicada_min: -16, // piso de escala de x indicada (unidades SI)
      posicao_indicada_max: 16, // teto de escala de x indicada (unidades SI)
  
      // parâmetros do controlador
      // os dois parâmetros a seguir precisam ser coerentes com os parâmetros do indicador de posição
      setpoint_Vmin: -5, // valor mínimo que o setpoint pode assumir (unidades SI)
      setpoint_Vmax: 5, // valor máximo que o setpoint pode assumir (unidades SI)
      estado_inicial_controlador: 0, //0-DESL., 1-controle AUTO, 2-controle MANUAL
      Kp: 1, // ganho da componente proporcional (adimensional) - Obs. Kp=0 desativa o PID sem inibir a pré-carga OP0
      Ki: 0,  // ganho da componente integral (adimensional) - Ki precisa ser nulo para habilitar a pré-carga OP0
      Kd: 0.118, // ganho da componente derivativa (adimensional)
      OP0: 0, //pré-carga em % de OP (de -100 a 100) (adimensional)
      Imax: 0, //valor máximo em % da componente integral
      modo_acao_controlador: 0, // 0-Ação Reversa, 1- Ação Direta
      Fc_manual_inicial: -100, // valor inicial % de OP (de -100 a 100) do modo MAN
      setpoint_Tipo: 0, // 0-MANUAL, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório
      setpoint_Periodo: 5, // periodo do setpoint se for selecionada uma onda (unidades SI)
      setpoint_t_on: 50, // percentual do periodo da onda do setpoint em nível máximo (onda quadrada)
      setpoint_manual_inicial: 0, // valor inicial do setpoint quando é selecionado o setpoint manual (unidades SI)
      elimina_surto_derivativo: 1, // 0-função desabilitada, 1-função habilitada
      frequencia_corte: 100, // frequencia de corte do filtro passa baixa. (em Hz)
  
      // Forças Atuantes
      multiplicador_forcas_atuantes: 10,// multiplicador para as forças atuantes no carrinho. Valores possíveis: 0, 1, 10 ou 100. Valores diferentes serão tratados como 1. 
  
      // parâmetros de tela e modo de exibição da régua
      exibe_banda_proporcional: 1, // 0-NÃO exibe a barra (cor verde) de banda proporcional , 1-exibe a barra de banda proporcional
      exibe_faixa_indicao: 1, // 0-NÃO exibe faixa de indicação (cor laranja), 1-exibe faixa de indicação
      exibe_linha_setpoint: 1, // 0-NÃO exibe linha tracejada (cor azul) de setpoint, 1-exibe linha tracejada de setpoint
      exibe_linha_posicao_real: 1, // 0-NÃO exibe linha tracejada (cor cinza) de posição real, 1-exibe linha tracejada de posição real
      // Ajustar a frame rate conforme o computador. 
      // Inicialmente ajustar em 40 fps, ler o FPS médio e ajustar um valor definitivo ligeiramente inferior 
      frameRate: 40, //taxa de frames por segundo
  },
  
  
  
  
  
  
  
  {
      label_ptBR: "10. Estabilização Forçada 2", //nome do cenário
      label_enUS: "10. Forced Stabilization 2", //nome do cenário em inglês US
      // expressar valores decimais com ponto . em vez de vírgula ,
  
      // parâmetros do motor linear
      tipo_atuador: 1, // 0- Motor Linear Ideal, 1- Motor Linear NÃO Ideal (sigmoid)
      Fcmax: 6e4, // valor absoluto da máxima força aplicável (trAção/compress�o) pelo motor linear (unidades SI)
      ganho_atuador: 2, // ganho/inclinação central da curva do atuador (aplicável somente para atuador NÃO ideal)
      histerese_atuador: 0, // "folga" do atuador em %
  
      // parâmetros do processo a ser controlado
      m: 5000, //massa do carrinho em unidades SI
      K_mola: 1000, // constante da mola em unidades SI (pode ser negativa para simular pêndulo invertido)
      C_amortecedor: 4280, // coeficiente de amortecimento SI (pode ser negativa)
      posicao_inicial: 0, // valor inicial da posição x do carrinho em relação à origem (unidades SI)
      velocidade_inicial: 0, // velocidade inicial do carrinho (SI)
      perturbacao_Tipo: 1, // 0-nenhuma, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório, 7-manual
      perturbacao_manual_inicial: 0, // habilitado no modo manual (% de Fcmax), limitado aos valores de perturbacao_Fmax e perturbacao_Fmin
      perturbacao_Fmax: 70, // valor máximo da perturbação (% de Fcmax)
      perturbacao_Fmin: -70, // valor mínimo da perturbação (% de Fcmax)
      perturbacao_Periodo: 11, // periodo da perturbação (unidades SI)
      perturbacao_t_on: 50, // percentual do periodo da onda de perturbação em nível máximo (para onda quadrada)
      perturbacao_inicialmente_inibida: 0, 
  
      // parâmetros do indicador de posição
      posicao_indicada_min: -12, // piso de escala de x indicada (unidades SI)
      posicao_indicada_max: 12, // teto de escala de x indicada (unidades SI)
  
      // parâmetros do controlador
      // os dois parâmetros a seguir precisam ser coerentes com os parâmetros do indicador de posição
      setpoint_Vmin: -6, // valor mínimo que o setpoint pode assumir (unidades SI)
      setpoint_Vmax: 6, // valor máximo que o setpoint pode assumir (unidades SI)
      estado_inicial_controlador: 0, //0-DESL., 1-controle AUTO, 2-controle MANUAL
      Kp: 10, // ganho da componente proporcional (adimensional) - Obs. Kp=0 desativa o PID sem inibir a pré-carga OP0
      Ki: 0,  // ganho da componente integral (adimensional) - Ki precisa ser nulo para habilitar a pré-carga OP0
      Kd: 20, // ganho da componente derivativa (adimensional)
      OP0: 0, //pré-carga em % de OP (de -100 a 100) (adimensional)
      Imax: 0, //valor máximo em % da componente integral
      modo_acao_controlador: 0, // 0-Ação Reversa, 1- Ação Direta
      Fc_manual_inicial: -100, // valor inicial % de OP (de -100 a 100) do modo MAN
      setpoint_Tipo: 0, // 0-MANUAL, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório
      setpoint_Periodo: 200, // periodo do setpoint se for selecionada uma onda (unidades SI)
      setpoint_t_on: 50, // percentual do periodo da onda do setpoint em nível máximo (onda quadrada)
      setpoint_manual_inicial: 0, // valor inicial do setpoint quando é selecionado o setpoint manual (unidades SI)
      elimina_surto_derivativo: 0, // 0-função desabilitada, 1-função habilitada
      ativa_filtro_passa_baixa: 1, // 0-filtro desabilitado, 1-filtro habilitado
      frequencia_corte: 10, // frequencia de corte do filtro passa baixa. (em Hz)
  
      // parâmetros de tela e modo de exibição da régua
      exibe_banda_proporcional: 1, // 0-NÃO exibe a barra (cor verde) de banda proporcional , 1-exibe a barra de banda proporcional
      exibe_faixa_indicao: 1, // 0-NÃO exibe faixa de indicação (cor laranja), 1-exibe faixa de indicação
      exibe_linha_setpoint: 1, // 0-NÃO exibe linha tracejada (cor azul) de setpoint, 1-exibe linha tracejada de setpoint
      exibe_linha_posicao_real: 1, // 0-NÃO exibe linha tracejada (cor cinza) de posição real, 1-exibe linha tracejada de posição real
      // Ajustar a frame rate conforme o computador. 
      // Inicialmente ajustar em 40 fps, ler o FPS médio e ajustar um valor definitivo ligeiramente inferior 
      frameRate: 40, //taxa de frames por segundo
  },
  
  
  
  
  
  
  
  
  
  {
      label_ptBR: "11. Comparação Biestável/Proporcional", //nome do cenário
      label_enUS: "11. Bistable/Proportional Comparison", //nome do cenário em inglês US
      // expressar valores decimais com ponto . em vez de vírgula ,
  
      // parâmetros do motor linear
      Fcmax: 3e4, // valor absoluto da máxima força aplicável (tração/compressão) pelo motor linear (unidades SI)
  
      // parâmetros do processo a ser controlado
      m: 5000, //massa do carrinho em unidades SI
      K_mola: 1000, // constante da mola em unidades SI (pode ser negativa para simular pêndulo invertido)
      C_amortecedor: 4280, // coeficiente de amortecimento SI (pode ser negativa)
      posicao_inicial: -12, // valor inicial da posição x do carrinho em relação à origem (unidades SI)
      velocidade_inicial: 2, // velocidade inicial do carrinho (SI)
      perturbacao_Tipo: 1, // 0-nenhuma, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório, 7-manual
      perturbacao_manual_inicial: -60, // habilitado no modo manual (% de Fcmax), limitado aos valores de perturbacao_Fmax e perturbacao_Fmin
      perturbacao_Fmax: -20, // valor máximo da perturbação (% de Fcmax)
      perturbacao_Fmin: -40, // valor mínimo da perturbação (% de Fcmax)
      perturbacao_Periodo: 60, // periodo da perturbação (unidades SI)
      perturbacao_t_on: 50, // percentual do periodo da onda de perturbação em nível máximo (para onda quadrada)
      perturbacao_inicialmente_inibida: 0, 
  
      // parâmetros do indicador de posição
      posicao_indicada_min: -10, // piso de escala de x indicada (unidades SI)
      posicao_indicada_max: 10, // teto de escala de x indicada (unidades SI)
  
      // parâmetros do controlador
      // os dois parâmetros a seguir precisam ser coerentes com os parâmetros do indicador de posição
      setpoint_Vmin: -7, // valor mínimo que o setpoint pode assumir (unidades SI)
      setpoint_Vmax: 7, // valor máximo que o setpoint pode assumir (unidades SI)
      tipo_controlador: 3, //0-Controlador PID, 1-Controlador PD + I se e<eLim, 2-Controlador PD + I se D<DLim, 3- Controlador Biestável
      estado_inicial_controlador: 1, //0-DESL., 1-controle AUTO, 2-controle MANUAL
      Kp: 5, // ganho da componente proporcional (adimensional) - Obs. Kp=0 desativa o PID sem inibir a pré-carga OP0
      Ki: 0,  // ganho da componente integral (adimensional) - Ki precisa ser nulo para habilitar a pré-carga OP0
      Kd: 0, // ganho da componente derivativa (adimensional)
      OP0: 0, //pré-carga em % de OP (de -100 a 100) (adimensional)
      modo_acao_controlador: 0, // 0-Ação Reversa, 1- Ação Direta
      Fc_manual_inicial: -100, // valor inicial % de OP (de -100 a 100) do modo MAN
      setpoint_Tipo: 0, // 0-MANUAL, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório
      setpoint_Periodo: 100, // periodo do setpoint se for selecionada uma onda (unidades SI)
      setpoint_t_on: 50, // percentual do periodo da onda do setpoint em nível máximo (onda quadrada)
      setpoint_manual_inicial: 4, // valor inicial do setpoint quando é selecionado o setpoint manual (unidades SI)
      elimina_surto_derivativo: 0, // 0-função desabilitada, 1-função habilitada
      ativa_filtro_passa_baixa: 0, // 0-filtro desabilitado, 1-filtro habilitado
      frequencia_corte: 0.1, // frequencia de corte do filtro passa baixa. (em Hz)
  
      //parâmetros do controlador Biestável
      biestavel_OPmax: 100, // saída nivel alto do controlador, (% de Fcmax) 
      biestavel_OPmin: -100, // saída nivel alto do controlador, (% de Fcmax)
      biestavel_banda_morta: 4, //banda morta do controlador Biestável (unidades SI)
  
      // parâmetros de tela e modo de exibição da régua
      exibe_banda_proporcional: 1, // 0-NÃO exibe a barra (cor verde) de banda proporcional , 1-exibe a barra de banda proporcional
      exibe_faixa_indicao: 1, // 0-NÃO exibe faixa de indicação (cor laranja), 1-exibe faixa de indicação
      exibe_linha_setpoint: 1, // 0-NÃO exibe linha tracejada (cor azul) de setpoint, 1-exibe linha tracejada de setpoint
      exibe_linha_posicao_real: 1, // 0-NÃO exibe linha tracejada (cor cinza) de posição real, 1-exibe linha tracejada de posição real
       exibe_saida_atuador: 1, // 0-exibe saída PID, 1-exibe saída Atuador x sinal de controle 
    
     // Ajustar a frame rate conforme o computador. 
      // Inicialmente ajustar em 40 fps, ler o FPS médio e ajustar um valor definitivo ligeiramente inferior 
      frameRate: 40, //taxa de frames por segundo
  },
  
  
  
  
  
  
  
  
  {
      label_ptBR: "12A. Sistema de Controle Desligado", //nome do cenário
      label_enUS: "12A. Control System Off", //nome do cenário em inglês US
      // expressar valores decimais com ponto . em vez de vírgula ,
  
      // parâmetros do motor linear
      Fcmax: 30000, // valor absoluto da máxima força aplicável (tração/compressão) pelo motor linear (unidades SI)
  
      // parâmetros do processo a ser controlado
      m: 5000, //massa do carrinho em unidades SI
      K_mola: 1000, // constante da mola em unidades SI (pode ser negativa para simular pêndulo invertido)
      C_amortecedor: 2000, // coeficiente de amortecimento SI (pode ser negativa)
      posicao_inicial: -12, // valor inicial da posição x do carrinho em relação à origem (unidades SI)
      velocidade_inicial: 50, // velocidade inicial do carrinho (SI)
      perturbacao_Tipo: 2, // 0-nenhuma, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório, 7-manual
      perturbacao_manual_inicial: -60, // habilitado no modo manual (% de Fcmax), limitado aos valores de perturbacao_Fmax e perturbacao_Fmin
      perturbacao_Fmax: 20, // valor máximo da perturbação (% de Fcmax)
      perturbacao_Fmin: -30, // valor mínimo da perturbação (% de Fcmax)
      perturbacao_Periodo: 200, // periodo da perturbação (unidades SI)
      perturbacao_t_on: 0, // percentual do periodo da onda de perturbação em nível máximo (para onda quadrada)
      perturbacao_inicialmente_inibida: 0, 
  
      // parâmetros do indicador de posição
      posicao_indicada_min: -16, // piso de escala de x indicada (unidades SI)
      posicao_indicada_max: 16, // teto de escala de x indicada (unidades SI)
  
      // parâmetros do controlador
      // os dois parâmetros a seguir precisam ser coerentes com os parâmetros do indicador de posição
      setpoint_Vmin: 4, // valor mínimo que o setpoint pode assumir (unidades SI)
      setpoint_Vmax: 12, // valor máximo que o setpoint pode assumir (unidades SI)
      tipo_controlador: 3, //0-Controlador PID, 1-Controlador PD + I se e<eLim, 2-Controlador PD + I se D<DLim, 3- Controlador Biestável
      estado_inicial_controlador: 0, //0-DESL., 1-controle AUTO, 2-controle MANUAL
      Kp: 8, // ganho da componente proporcional (adimensional) - Obs. Kp=0 desativa o PID sem inibir a pré-carga OP0
      Ki: 0.5,  // ganho da componente integral (adimensional) - Ki precisa ser nulo para habilitar a pré-carga OP0
      Kd: 8, // ganho da componente derivativa (adimensional)
      OP0: 0, //pré-carga em % de OP (de -100 a 100) (adimensional)
      eLim: 3, //limiar para integração no modo PD+I se erro<eLim
      DLim: 10, //limiar para integração no modo PD+I se D<DLim
      modo_acao_controlador: 0, // 0-Ação Reversa, 1- Ação Direta
      Fc_manual_inicial: -100, // valor inicial % de OP (de -100 a 100) do modo MAN
      setpoint_Tipo: 2, // 0-MANUAL, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório
      setpoint_Periodo: 60, // periodo do setpoint se for selecionada uma onda (unidades SI)
      setpoint_t_on: 50, // percentual do periodo da onda do setpoint em nível máximo (onda quadrada)
      setpoint_manual_inicial: -8, // valor inicial do setpoint quando é selecionado o setpoint manual (unidades SI)
      elimina_surto_derivativo: 0, // 0-função desabilitada, 1-função habilitada
      ativa_filtro_passa_baixa: 0, // 0-filtro desabilitado, 1-filtro habilitado
      frequencia_corte: 10, // frequencia de corte do filtro passa baixa. (em Hz)
  
      //parâmetros do controlador Biestável
      biestavel_OPmax: 100, // saída nivel alto do controlador, (% de Fcmax) 
      biestavel_OPmin: -100, // saída nivel alto do controlador, (% de Fcmax)
      biestavel_banda_morta: 4, //banda morta do controlador Biestável (unidades SI)
  
      // parâmetros de tela e modo de exibição da régua
      exibe_banda_proporcional: 1, // 0-NÃO exibe a barra (cor verde) de banda proporcional , 1-exibe a barra de banda proporcional
      exibe_faixa_indicao: 1, // 0-NÃO exibe faixa de indicação (cor laranja), 1-exibe faixa de indicação
      exibe_linha_setpoint: 1, // 0-NÃO exibe linha tracejada (cor azul) de setpoint, 1-exibe linha tracejada de setpoint
      exibe_linha_posicao_real: 1, // 0-NÃO exibe linha tracejada (cor cinza) de posição real, 1-exibe linha tracejada de posição real
      // Ajustar a frame rate conforme o computador. 
      // Inicialmente ajustar em 40 fps, ler o FPS médio e ajustar um valor definitivo ligeiramente inferior 
      frameRate: 40, //taxa de frames por segundo
  },
  
  
  
  
  
  
  
  
  
  {
      label_ptBR: "12B. Controle Biestável", //nome do cenário
      label_enUS: "12B. Bistable Control", //nome do cenário em inglês US
      // expressar valores decimais com ponto . em vez de vírgula ,
  
      // parâmetros do motor linear
      Fcmax: 30000, // valor absoluto da máxima força aplicável (tração/compressão) pelo motor linear (unidades SI)
  
      // parâmetros do processo a ser controlado
      m: 5000, //massa do carrinho em unidades SI
      K_mola: 1000, // constante da mola em unidades SI (pode ser negativa para simular pêndulo invertido)
      C_amortecedor: 2000, // coeficiente de amortecimento SI (pode ser negativa)
      posicao_inicial: -12, // valor inicial da posição x do carrinho em relação à origem (unidades SI)
      velocidade_inicial: 50, // velocidade inicial do carrinho (SI)
      perturbacao_Tipo: 2, // 0-nenhuma, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório, 7-manual
      perturbacao_manual_inicial: -60, // habilitado no modo manual (% de Fcmax), limitado aos valores de perturbacao_Fmax e perturbacao_Fmin
      perturbacao_Fmax: 20, // valor máximo da perturbação (% de Fcmax)
      perturbacao_Fmin: -30, // valor mínimo da perturbação (% de Fcmax)
      perturbacao_Periodo: 200, // periodo da perturbação (unidades SI)
      perturbacao_t_on: 0, // percentual do periodo da onda de perturbação em nível máximo (para onda quadrada)
      perturbacao_inicialmente_inibida: 0, 
  
      // parâmetros do indicador de posição
      posicao_indicada_min: -16, // piso de escala de x indicada (unidades SI)
      posicao_indicada_max: 16, // teto de escala de x indicada (unidades SI)
  
      // parâmetros do controlador
      // os dois parâmetros a seguir precisam ser coerentes com os parâmetros do indicador de posição
      setpoint_Vmin: 4, // valor mínimo que o setpoint pode assumir (unidades SI)
      setpoint_Vmax: 12, // valor máximo que o setpoint pode assumir (unidades SI)
      tipo_controlador: 3, //0-Controlador PID, 1-Controlador PD + I se e<eLim, 2-Controlador PD + I se D<DLim, 3- Controlador Biestável
      estado_inicial_controlador: 1, //0-DESL., 1-controle AUTO, 2-controle MANUAL
      Kp: 8, // ganho da componente proporcional (adimensional) - Obs. Kp=0 desativa o PID sem inibir a pré-carga OP0
      Ki: 0.5,  // ganho da componente integral (adimensional) - Ki precisa ser nulo para habilitar a pré-carga OP0
      Kd: 8, // ganho da componente derivativa (adimensional)
      OP0: 0, //pré-carga em % de OP (de -100 a 100) (adimensional)
      eLim: 3, //limiar para integração no modo PD+I se erro<eLim
      DLim: 10, //limiar para integração no modo PD+I se D<DLim
      modo_acao_controlador: 0, // 0-Ação Reversa, 1- Ação Direta
      Fc_manual_inicial: -100, // valor inicial % de OP (de -100 a 100) do modo MAN
      setpoint_Tipo: 2, // 0-MANUAL, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório
      setpoint_Periodo: 60, // periodo do setpoint se for selecionada uma onda (unidades SI)
      setpoint_t_on: 50, // percentual do periodo da onda do setpoint em nível máximo (onda quadrada)
      setpoint_manual_inicial: -8, // valor inicial do setpoint quando é selecionado o setpoint manual (unidades SI)
      elimina_surto_derivativo: 0, // 0-função desabilitada, 1-função habilitada
      ativa_filtro_passa_baixa: 0, // 0-filtro desabilitado, 1-filtro habilitado
      frequencia_corte: 10, // frequencia de corte do filtro passa baixa. (em Hz)
  
      //parâmetros do controlador Biestável
      biestavel_OPmax: 100, // saída nivel alto do controlador, (% de Fcmax) 
      biestavel_OPmin: -100, // saída nivel alto do controlador, (% de Fcmax)
      biestavel_banda_morta: 4, //banda morta do controlador Biestável (unidades SI)
  
      // parâmetros de tela e modo de exibição da régua
      exibe_banda_proporcional: 1, // 0-NÃO exibe a barra (cor verde) de banda proporcional , 1-exibe a barra de banda proporcional
      exibe_faixa_indicao: 1, // 0-NÃO exibe faixa de indicação (cor laranja), 1-exibe faixa de indicação
      exibe_linha_setpoint: 1, // 0-NÃO exibe linha tracejada (cor azul) de setpoint, 1-exibe linha tracejada de setpoint
      exibe_linha_posicao_real: 1, // 0-NÃO exibe linha tracejada (cor cinza) de posição real, 1-exibe linha tracejada de posição real
      // Ajustar a frame rate conforme o computador. 
      // Inicialmente ajustar em 40 fps, ler o FPS médio e ajustar um valor definitivo ligeiramente inferior 
      frameRate: 40, //taxa de frames por segundo
  },
  
  
  
  
  
  {
      label_ptBR: "12C. Controle Proporcional", //nome do cenário
      label_enUS: "12C. Proportional Control", //nome do cenário em inglês US
      // expressar valores decimais com ponto . em vez de vírgula ,
  
      // parâmetros do motor linear
      Fcmax: 30000, // valor absoluto da máxima força aplicável (tração/compressão) pelo motor linear (unidades SI)
  
      // parâmetros do processo a ser controlado
      m: 5000, //massa do carrinho em unidades SI
      K_mola: 1000, // constante da mola em unidades SI (pode ser negativa para simular pêndulo invertido)
      C_amortecedor: 2000, // coeficiente de amortecimento SI (pode ser negativa)
      posicao_inicial: -12, // valor inicial da posição x do carrinho em relação à origem (unidades SI)
      velocidade_inicial: 50, // velocidade inicial do carrinho (SI)
      perturbacao_Tipo: 2, // 0-nenhuma, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório, 7-manual
      perturbacao_manual_inicial: -60, // habilitado no modo manual (% de Fcmax), limitado aos valores de perturbacao_Fmax e perturbacao_Fmin
      perturbacao_Fmax: 20, // valor máximo da perturbação (% de Fcmax)
      perturbacao_Fmin: -30, // valor mínimo da perturbação (% de Fcmax)
      perturbacao_Periodo: 200, // periodo da perturbação (unidades SI)
      perturbacao_t_on: 0, // percentual do periodo da onda de perturbação em nível máximo (para onda quadrada)
      perturbacao_inicialmente_inibida: 0, 
  
      // parâmetros do indicador de posição
      posicao_indicada_min: -16, // piso de escala de x indicada (unidades SI)
      posicao_indicada_max: 16, // teto de escala de x indicada (unidades SI)
  
      // parâmetros do controlador
      // os dois parâmetros a seguir precisam ser coerentes com os parâmetros do indicador de posição
      setpoint_Vmin: 4, // valor mínimo que o setpoint pode assumir (unidades SI)
      setpoint_Vmax: 12, // valor máximo que o setpoint pode assumir (unidades SI)
      tipo_controlador: 0, //0-Controlador PID, 1-Controlador PD + I se e<eLim, 2-Controlador PD + I se D<DLim, 3- Controlador Biestável
      estado_inicial_controlador: 1, //0-DESL., 1-controle AUTO, 2-controle MANUAL
      Kp: 8, // ganho da componente proporcional (adimensional) - Obs. Kp=0 desativa o PID sem inibir a pré-carga OP0
      Ki: 0,  // ganho da componente integral (adimensional) - Ki precisa ser nulo para habilitar a pré-carga OP0
      Kd: 0, // ganho da componente derivativa (adimensional)
      OP0: 0, //pré-carga em % de OP (de -100 a 100) (adimensional)
      eLim: 3, //limiar para integração no modo PD+I se erro<eLim
      DLim: 10, //limiar para integração no modo PD+I se D<DLim
      modo_acao_controlador: 0, // 0-Ação Reversa, 1- Ação Direta
      Fc_manual_inicial: -100, // valor inicial % de OP (de -100 a 100) do modo MAN
      setpoint_Tipo: 2, // 0-MANUAL, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório
      setpoint_Periodo: 60, // periodo do setpoint se for selecionada uma onda (unidades SI)
      setpoint_t_on: 50, // percentual do periodo da onda do setpoint em nível máximo (onda quadrada)
      setpoint_manual_inicial: -8, // valor inicial do setpoint quando é selecionado o setpoint manual (unidades SI)
      elimina_surto_derivativo: 0, // 0-função desabilitada, 1-função habilitada
      ativa_filtro_passa_baixa: 0, // 0-filtro desabilitado, 1-filtro habilitado
      frequencia_corte: 10, // frequencia de corte do filtro passa baixa. (em Hz)
  
      //parâmetros do controlador Biestável
      biestavel_OPmax: 100, // saída nivel alto do controlador, (% de Fcmax) 
      biestavel_OPmin: -100, // saída nivel alto do controlador, (% de Fcmax)
      biestavel_banda_morta: 4, //banda morta do controlador Biestável (unidades SI)
  
      // parâmetros de tela e modo de exibição da régua
      exibe_banda_proporcional: 1, // 0-NÃO exibe a barra (cor verde) de banda proporcional , 1-exibe a barra de banda proporcional
      exibe_faixa_indicao: 1, // 0-NÃO exibe faixa de indicação (cor laranja), 1-exibe faixa de indicação
      exibe_linha_setpoint: 1, // 0-NÃO exibe linha tracejada (cor azul) de setpoint, 1-exibe linha tracejada de setpoint
      exibe_linha_posicao_real: 1, // 0-NÃO exibe linha tracejada (cor cinza) de posição real, 1-exibe linha tracejada de posição real
      // Ajustar a frame rate conforme o computador. 
      // Inicialmente ajustar em 40 fps, ler o FPS médio e ajustar um valor definitivo ligeiramente inferior 
      frameRate: 40, //taxa de frames por segundo
  },
  
  
  
  
  
  
  {
      label_ptBR: "12D. P + D (sem filtro PB)", //nome do cenário
      label_enUS: "12D. P + D (no LP filter)", //nome do cenário em inglês US
      // expressar valores decimais com ponto . em vez de vírgula ,
  
      // parâmetros do motor linear
      Fcmax: 30000, // valor absoluto da máxima força aplicável (tração/compressão) pelo motor linear (unidades SI)
  
      // parâmetros do processo a ser controlado
      m: 5000, //massa do carrinho em unidades SI
      K_mola: 1000, // constante da mola em unidades SI (pode ser negativa para simular pêndulo invertido)
      C_amortecedor: 2000, // coeficiente de amortecimento SI (pode ser negativa)
      posicao_inicial: -12, // valor inicial da posição x do carrinho em relação à origem (unidades SI)
      velocidade_inicial: 50, // velocidade inicial do carrinho (SI)
      perturbacao_Tipo: 2, // 0-nenhuma, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório, 7-manual
      perturbacao_manual_inicial: -60, // habilitado no modo manual (% de Fcmax), limitado aos valores de perturbacao_Fmax e perturbacao_Fmin
      perturbacao_Fmax: 20, // valor máximo da perturbação (% de Fcmax)
      perturbacao_Fmin: -30, // valor mínimo da perturbação (% de Fcmax)
      perturbacao_Periodo: 200, // periodo da perturbação (unidades SI)
      perturbacao_t_on: 0, // percentual do periodo da onda de perturbação em nível máximo (para onda quadrada)
      perturbacao_inicialmente_inibida: 0, 
  
      // parâmetros do indicador de posição
      posicao_indicada_min: -16, // piso de escala de x indicada (unidades SI)
      posicao_indicada_max: 16, // teto de escala de x indicada (unidades SI)
  
      // parâmetros do controlador
      // os dois parâmetros a seguir precisam ser coerentes com os parâmetros do indicador de posição
      setpoint_Vmin: 4, // valor mínimo que o setpoint pode assumir (unidades SI)
      setpoint_Vmax: 12, // valor máximo que o setpoint pode assumir (unidades SI)
      tipo_controlador: 0, //0-Controlador PID, 1-Controlador PD + I se e<eLim, 2-Controlador PD + I se D<DLim, 3- Controlador Biestável
      estado_inicial_controlador: 1, //0-DESL., 1-controle AUTO, 2-controle MANUAL
      Kp: 8, // ganho da componente proporcional (adimensional) - Obs. Kp=0 desativa o PID sem inibir a pré-carga OP0
      Ki: 0,  // ganho da componente integral (adimensional) - Ki precisa ser nulo para habilitar a pré-carga OP0
      Kd: 8, // ganho da componente derivativa (adimensional)
      OP0: 0, //pré-carga em % de OP (de -100 a 100) (adimensional)
      eLim: 3, //limiar para integração no modo PD+I se erro<eLim
      DLim: 10, //limiar para integração no modo PD+I se D<DLim
      modo_acao_controlador: 0, // 0-Ação Reversa, 1- Ação Direta
      Fc_manual_inicial: -100, // valor inicial % de OP (de -100 a 100) do modo MAN
      setpoint_Tipo: 2, // 0-MANUAL, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório
      setpoint_Periodo: 60, // periodo do setpoint se for selecionada uma onda (unidades SI)
      setpoint_t_on: 50, // percentual do periodo da onda do setpoint em nível máximo (onda quadrada)
      setpoint_manual_inicial: -8, // valor inicial do setpoint quando é selecionado o setpoint manual (unidades SI)
      elimina_surto_derivativo: 0, // 0-função desabilitada, 1-função habilitada
      ativa_filtro_passa_baixa: 0, // 0-filtro desabilitado, 1-filtro habilitado
      frequencia_corte: 10, // frequencia de corte do filtro passa baixa. (em Hz)
  
      //parâmetros do controlador Biestável
      biestavel_OPmax: 100, // saída nivel alto do controlador, (% de Fcmax) 
      biestavel_OPmin: -100, // saída nivel alto do controlador, (% de Fcmax)
      biestavel_banda_morta: 4, //banda morta do controlador Biestável (unidades SI)
  
      // parâmetros de tela e modo de exibição da régua
      exibe_banda_proporcional: 1, // 0-NÃO exibe a barra (cor verde) de banda proporcional , 1-exibe a barra de banda proporcional
      exibe_faixa_indicao: 1, // 0-NÃO exibe faixa de indicação (cor laranja), 1-exibe faixa de indicação
      exibe_linha_setpoint: 1, // 0-NÃO exibe linha tracejada (cor azul) de setpoint, 1-exibe linha tracejada de setpoint
      exibe_linha_posicao_real: 1, // 0-NÃO exibe linha tracejada (cor cinza) de posição real, 1-exibe linha tracejada de posição real
      // Ajustar a frame rate conforme o computador. 
      // Inicialmente ajustar em 40 fps, ler o FPS médio e ajustar um valor definitivo ligeiramente inferior 
      frameRate: 40, //taxa de frames por segundo
  },
  
  
  
  
  
  
  {
      label_ptBR: "12E. P + D (com filtro PB)", //nome do cenário
      label_enUS: "12E. P + D (with LP filter)", //nome do cenário em inglês US
      // expressar valores decimais com ponto . em vez de vírgula ,
  
      // parâmetros do motor linear
      Fcmax: 30000, // valor absoluto da máxima força aplicável (tração/compressão) pelo motor linear (unidades SI)
  
      // parâmetros do processo a ser controlado
      m: 5000, //massa do carrinho em unidades SI
      K_mola: 1000, // constante da mola em unidades SI (pode ser negativa para simular pêndulo invertido)
      C_amortecedor: 2000, // coeficiente de amortecimento SI (pode ser negativa)
      posicao_inicial: -12, // valor inicial da posição x do carrinho em relação à origem (unidades SI)
      velocidade_inicial: 50, // velocidade inicial do carrinho (SI)
      perturbacao_Tipo: 2, // 0-nenhuma, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório, 7-manual
      perturbacao_manual_inicial: -60, // habilitado no modo manual (% de Fcmax), limitado aos valores de perturbacao_Fmax e perturbacao_Fmin
      perturbacao_Fmax: 20, // valor máximo da perturbação (% de Fcmax)
      perturbacao_Fmin: -30, // valor mínimo da perturbação (% de Fcmax)
      perturbacao_Periodo: 200, // periodo da perturbação (unidades SI)
      perturbacao_t_on: 0, // percentual do periodo da onda de perturbação em nível máximo (para onda quadrada)
      perturbacao_inicialmente_inibida: 0, 
  
      // parâmetros do indicador de posição
      posicao_indicada_min: -16, // piso de escala de x indicada (unidades SI)
      posicao_indicada_max: 16, // teto de escala de x indicada (unidades SI)
  
      // parâmetros do controlador
      // os dois parâmetros a seguir precisam ser coerentes com os parâmetros do indicador de posição
      setpoint_Vmin: 4, // valor mínimo que o setpoint pode assumir (unidades SI)
      setpoint_Vmax: 12, // valor máximo que o setpoint pode assumir (unidades SI)
      tipo_controlador: 0, //0-Controlador PID, 1-Controlador PD + I se e<eLim, 2-Controlador PD + I se D<DLim, 3- Controlador Biestável
      estado_inicial_controlador: 1, //0-DESL., 1-controle AUTO, 2-controle MANUAL
      Kp: 8, // ganho da componente proporcional (adimensional) - Obs. Kp=0 desativa o PID sem inibir a pré-carga OP0
      Ki: 0,  // ganho da componente integral (adimensional) - Ki precisa ser nulo para habilitar a pré-carga OP0
      Kd: 8, // ganho da componente derivativa (adimensional)
      OP0: 0, //pré-carga em % de OP (de -100 a 100) (adimensional)
      eLim: 3, //limiar para integração no modo PD+I se erro<eLim
      DLim: 10, //limiar para integração no modo PD+I se D<DLim
      modo_acao_controlador: 0, // 0-Ação Reversa, 1- Ação Direta
      Fc_manual_inicial: -100, // valor inicial % de OP (de -100 a 100) do modo MAN
      setpoint_Tipo: 2, // 0-MANUAL, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório
      setpoint_Periodo: 60, // periodo do setpoint se for selecionada uma onda (unidades SI)
      setpoint_t_on: 50, // percentual do periodo da onda do setpoint em nível máximo (onda quadrada)
      setpoint_manual_inicial: -8, // valor inicial do setpoint quando é selecionado o setpoint manual (unidades SI)
      elimina_surto_derivativo: 1, // 0-função desabilitada, 1-função habilitada
      ativa_filtro_passa_baixa: 1, // 0-filtro desabilitado, 1-filtro habilitado
      frequencia_corte: 10, // frequencia de corte do filtro passa baixa. (em Hz)
  
      //parâmetros do controlador Biestável
      biestavel_OPmax: 100, // saída nivel alto do controlador, (% de Fcmax) 
      biestavel_OPmin: -100, // saída nivel alto do controlador, (% de Fcmax)
      biestavel_banda_morta: 4, //banda morta do controlador Biestável (unidades SI)
  
      // parâmetros de tela e modo de exibição da régua
      exibe_banda_proporcional: 1, // 0-NÃO exibe a barra (cor verde) de banda proporcional , 1-exibe a barra de banda proporcional
      exibe_faixa_indicao: 1, // 0-NÃO exibe faixa de indicação (cor laranja), 1-exibe faixa de indicação
      exibe_linha_setpoint: 1, // 0-NÃO exibe linha tracejada (cor azul) de setpoint, 1-exibe linha tracejada de setpoint
      exibe_linha_posicao_real: 1, // 0-NÃO exibe linha tracejada (cor cinza) de posição real, 1-exibe linha tracejada de posição real
      // Ajustar a frame rate conforme o computador. 
      // Inicialmente ajustar em 40 fps, ler o FPS médio e ajustar um valor definitivo ligeiramente inferior 
      frameRate: 40, //taxa de frames por segundo
  },
  
  
  
  
  
  
  {
      label_ptBR: "12F. Controle PID", //nome do cenário
      label_enUS: "12F. PID Control", //nome do cenário em inglês US
      // expressar valores decimais com ponto . em vez de vírgula ,
  
      // parâmetros do motor linear
      Fcmax: 30000, // valor absoluto da máxima força aplicável (tração/compressão) pelo motor linear (unidades SI)
  
      // parâmetros do processo a ser controlado
      m: 5000, //massa do carrinho em unidades SI
      K_mola: 1000, // constante da mola em unidades SI (pode ser negativa para simular pêndulo invertido)
      C_amortecedor: 2000, // coeficiente de amortecimento SI (pode ser negativa)
      posicao_inicial: -12, // valor inicial da posição x do carrinho em relação à origem (unidades SI)
      velocidade_inicial: 50, // velocidade inicial do carrinho (SI)
      perturbacao_Tipo: 2, // 0-nenhuma, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório, 7-manual
      perturbacao_manual_inicial: -60, // habilitado no modo manual (% de Fcmax), limitado aos valores de perturbacao_Fmax e perturbacao_Fmin
      perturbacao_Fmax: 20, // valor máximo da perturbação (% de Fcmax)
      perturbacao_Fmin: -30, // valor mínimo da perturbação (% de Fcmax)
      perturbacao_Periodo: 200, // periodo da perturbação (unidades SI)
      perturbacao_t_on: 0, // percentual do periodo da onda de perturbação em nível máximo (para onda quadrada)
      perturbacao_inicialmente_inibida: 0, 
  
      // parâmetros do indicador de posição
      posicao_indicada_min: -16, // piso de escala de x indicada (unidades SI)
      posicao_indicada_max: 16, // teto de escala de x indicada (unidades SI)
  
      // parâmetros do controlador
      // os dois parâmetros a seguir precisam ser coerentes com os parâmetros do indicador de posição
      setpoint_Vmin: 4, // valor mínimo que o setpoint pode assumir (unidades SI)
      setpoint_Vmax: 12, // valor máximo que o setpoint pode assumir (unidades SI)
      tipo_controlador: 0, //0-Controlador PID, 1-Controlador PD + I se e<eLim, 2-Controlador PD + I se D<DLim, 3- Controlador Biestável
      estado_inicial_controlador: 1, //0-DESL., 1-controle AUTO, 2-controle MANUAL
      Kp: 8, // ganho da componente proporcional (adimensional) - Obs. Kp=0 desativa o PID sem inibir a pré-carga OP0
      Ki: 2,  // ganho da componente integral (adimensional) - Ki precisa ser nulo para habilitar a pré-carga OP0
      Kd: 8, // ganho da componente derivativa (adimensional)
      OP0: 0, //pré-carga em % de OP (de -100 a 100) (adimensional)
      eLim: 3, //limiar para integração no modo PD+I se erro<eLim
      DLim: 10, //limiar para integração no modo PD+I se D<DLim
      modo_acao_controlador: 0, // 0-Ação Reversa, 1- Ação Direta
      Fc_manual_inicial: -100, // valor inicial % de OP (de -100 a 100) do modo MAN
      setpoint_Tipo: 2, // 0-MANUAL, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório
      setpoint_Periodo: 60, // periodo do setpoint se for selecionada uma onda (unidades SI)
      setpoint_t_on: 50, // percentual do periodo da onda do setpoint em nível máximo (onda quadrada)
      setpoint_manual_inicial: -8, // valor inicial do setpoint quando é selecionado o setpoint manual (unidades SI)
      elimina_surto_derivativo: 1, // 0-função desabilitada, 1-função habilitada
      ativa_filtro_passa_baixa: 1, // 0-filtro desabilitado, 1-filtro habilitado
      frequencia_corte: 10, // frequencia de corte do filtro passa baixa. (em Hz)
  
      //parâmetros do controlador Biestável
      biestavel_OPmax: 100, // saída nivel alto do controlador, (% de Fcmax) 
      biestavel_OPmin: -100, // saída nivel alto do controlador, (% de Fcmax)
      biestavel_banda_morta: 4, //banda morta do controlador Biestável (unidades SI)
  
      // parâmetros de tela e modo de exibição da régua
      exibe_banda_proporcional: 1, // 0-NÃO exibe a barra (cor verde) de banda proporcional , 1-exibe a barra de banda proporcional
      exibe_faixa_indicao: 1, // 0-NÃO exibe faixa de indicação (cor laranja), 1-exibe faixa de indicação
      exibe_linha_setpoint: 1, // 0-NÃO exibe linha tracejada (cor azul) de setpoint, 1-exibe linha tracejada de setpoint
      exibe_linha_posicao_real: 1, // 0-NÃO exibe linha tracejada (cor cinza) de posição real, 1-exibe linha tracejada de posição real
      // Ajustar a frame rate conforme o computador. 
      // Inicialmente ajustar em 40 fps, ler o FPS médio e ajustar um valor definitivo ligeiramente inferior 
      frameRate: 40, //taxa de frames por segundo
  },
  
  
  
  
  
  
  {
      label_ptBR: "12G. Controle PI", //nome do cenário
      label_enUS: "12G. PI Control", //nome do cenário em inglês US
      // expressar valores decimais com ponto . em vez de vírgula ,
  
      // parâmetros do motor linear
      Fcmax: 30000, // valor absoluto da máxima força aplicável (tração/compressão) pelo motor linear (unidades SI)
  
      // parâmetros do processo a ser controlado
      m: 5000, //massa do carrinho em unidades SI
      K_mola: 1000, // constante da mola em unidades SI (pode ser negativa para simular pêndulo invertido)
      C_amortecedor: 2000, // coeficiente de amortecimento SI (pode ser negativa)
      posicao_inicial: -12, // valor inicial da posição x do carrinho em relação à origem (unidades SI)
      velocidade_inicial: 50, // velocidade inicial do carrinho (SI)
      perturbacao_Tipo: 2, // 0-nenhuma, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório, 7-manual
      perturbacao_manual_inicial: -60, // habilitado no modo manual (% de Fcmax), limitado aos valores de perturbacao_Fmax e perturbacao_Fmin
      perturbacao_Fmax: 20, // valor máximo da perturbação (% de Fcmax)
      perturbacao_Fmin: -30, // valor mínimo da perturbação (% de Fcmax)
      perturbacao_Periodo: 200, // periodo da perturbação (unidades SI)
      perturbacao_t_on: 0, // percentual do periodo da onda de perturbação em nível máximo (para onda quadrada)
      perturbacao_inicialmente_inibida: 0, 
  
      // parâmetros do indicador de posição
      posicao_indicada_min: -16, // piso de escala de x indicada (unidades SI)
      posicao_indicada_max: 16, // teto de escala de x indicada (unidades SI)
  
      // parâmetros do controlador
      // os dois parâmetros a seguir precisam ser coerentes com os parâmetros do indicador de posição
      setpoint_Vmin: 4, // valor mínimo que o setpoint pode assumir (unidades SI)
      setpoint_Vmax: 12, // valor máximo que o setpoint pode assumir (unidades SI)
      tipo_controlador: 0, //0-Controlador PID, 1-Controlador PD + I se e<eLim, 2-Controlador PD + I se D<DLim, 3- Controlador Biestável
      estado_inicial_controlador: 1, //0-DESL., 1-controle AUTO, 2-controle MANUAL
      Kp: 8, // ganho da componente proporcional (adimensional) - Obs. Kp=0 desativa o PID sem inibir a pré-carga OP0
      Ki: 2,  // ganho da componente integral (adimensional) - Ki precisa ser nulo para habilitar a pré-carga OP0
      Kd: 0, // ganho da componente derivativa (adimensional)
      OP0: 0, //pré-carga em % de OP (de -100 a 100) (adimensional)
      eLim: 3, //limiar para integração no modo PD+I se erro<eLim
      DLim: 10, //limiar para integração no modo PD+I se D<DLim
      modo_acao_controlador: 0, // 0-Ação Reversa, 1- Ação Direta
      Fc_manual_inicial: -100, // valor inicial % de OP (de -100 a 100) do modo MAN
      setpoint_Tipo: 2, // 0-MANUAL, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório
      setpoint_Periodo: 60, // periodo do setpoint se for selecionada uma onda (unidades SI)
      setpoint_t_on: 50, // percentual do periodo da onda do setpoint em nível máximo (onda quadrada)
      setpoint_manual_inicial: -8, // valor inicial do setpoint quando é selecionado o setpoint manual (unidades SI)
      elimina_surto_derivativo: 0, // 0-função desabilitada, 1-função habilitada
      ativa_filtro_passa_baixa: 0, // 0-filtro desabilitado, 1-filtro habilitado
      frequencia_corte: 10, // frequencia de corte do filtro passa baixa. (em Hz)
  
      //parâmetros do controlador Biestável
      biestavel_OPmax: 100, // saída nivel alto do controlador, (% de Fcmax) 
      biestavel_OPmin: -100, // saída nivel alto do controlador, (% de Fcmax)
      biestavel_banda_morta: 4, //banda morta do controlador Biestável (unidades SI)
  
      // parâmetros de tela e modo de exibição da régua
      exibe_banda_proporcional: 1, // 0-NÃO exibe a barra (cor verde) de banda proporcional , 1-exibe a barra de banda proporcional
      exibe_faixa_indicao: 1, // 0-NÃO exibe faixa de indicação (cor laranja), 1-exibe faixa de indicação
      exibe_linha_setpoint: 1, // 0-NÃO exibe linha tracejada (cor azul) de setpoint, 1-exibe linha tracejada de setpoint
      exibe_linha_posicao_real: 1, // 0-NÃO exibe linha tracejada (cor cinza) de posição real, 1-exibe linha tracejada de posição real
      // Ajustar a frame rate conforme o computador. 
      // Inicialmente ajustar em 40 fps, ler o FPS médio e ajustar um valor definitivo ligeiramente inferior 
      frameRate: 40, //taxa de frames por segundo
  },
  
  
  
  
  {
      label_ptBR: "12H. PD +I se \|SP-PV\| < 2m", //nome do cenário
      label_enUS: "12H. PD +I if \|SP-PV\| < 2m", //nome do cenário em inglês US
      // expressar valores decimais com ponto . em vez de vírgula ,
  
      // parâmetros do motor linear
      Fcmax: 30000, // valor absoluto da máxima força aplicável (tração/compressão) pelo motor linear (unidades SI)
  
      // parâmetros do processo a ser controlado
      m: 5000, //massa do carrinho em unidades SI
      K_mola: 1000, // constante da mola em unidades SI (pode ser negativa para simular pêndulo invertido)
      C_amortecedor: 2000, // coeficiente de amortecimento SI (pode ser negativa)
      posicao_inicial: -12, // valor inicial da posição x do carrinho em relação à origem (unidades SI)
      velocidade_inicial: 50, // velocidade inicial do carrinho (SI)
      perturbacao_Tipo: 2, // 0-nenhuma, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório, 7-manual
      perturbacao_manual_inicial: -60, // habilitado no modo manual (% de Fcmax), limitado aos valores de perturbacao_Fmax e perturbacao_Fmin
      perturbacao_Fmax: 20, // valor máximo da perturbação (% de Fcmax)
      perturbacao_Fmin: -30, // valor mínimo da perturbação (% de Fcmax)
      perturbacao_Periodo: 200, // periodo da perturbação (unidades SI)
      perturbacao_t_on: 0, // percentual do periodo da onda de perturbação em nível máximo (para onda quadrada)
      perturbacao_inicialmente_inibida: 0, 
  
      // parâmetros do indicador de posição
      posicao_indicada_min: -16, // piso de escala de x indicada (unidades SI)
      posicao_indicada_max: 16, // teto de escala de x indicada (unidades SI)
  
      // parâmetros do controlador
      // os dois parâmetros a seguir precisam ser coerentes com os parâmetros do indicador de posição
      setpoint_Vmin: 4, // valor mínimo que o setpoint pode assumir (unidades SI)
      setpoint_Vmax: 12, // valor máximo que o setpoint pode assumir (unidades SI)
      tipo_controlador: 1, //0-Controlador PID, 1-Controlador PD + I se e<eLim, 2-Controlador PD + I se D<DLim, 3- Controlador Biestável
      estado_inicial_controlador: 1, //0-DESL., 1-controle AUTO, 2-controle MANUAL
      Kp: 8, // ganho da componente proporcional (adimensional) - Obs. Kp=0 desativa o PID sem inibir a pré-carga OP0
      Ki: 2,  // ganho da componente integral (adimensional) - Ki precisa ser nulo para habilitar a pré-carga OP0
      Kd: 8, // ganho da componente derivativa (adimensional)
      OP0: 0, //pré-carga em % de OP (de -100 a 100) (adimensional)
      eLim: 2, //limiar para integração no modo PD+I se erro<eLim
      DLim: 10, //limiar para integração no modo PD+I se D<DLim
      modo_acao_controlador: 0, // 0-Ação Reversa, 1- Ação Direta
      Fc_manual_inicial: -100, // valor inicial % de OP (de -100 a 100) do modo MAN
      setpoint_Tipo: 2, // 0-MANUAL, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório
      setpoint_Periodo: 60, // periodo do setpoint se for selecionada uma onda (unidades SI)
      setpoint_t_on: 50, // percentual do periodo da onda do setpoint em nível máximo (onda quadrada)
      setpoint_manual_inicial: -8, // valor inicial do setpoint quando é selecionado o setpoint manual (unidades SI)
      elimina_surto_derivativo: 1, // 0-função desabilitada, 1-função habilitada
      ativa_filtro_passa_baixa: 1, // 0-filtro desabilitado, 1-filtro habilitado
      frequencia_corte: 10, // frequencia de corte do filtro passa baixa. (em Hz)
  
      //parâmetros do controlador Biestável
      biestavel_OPmax: 100, // saída nivel alto do controlador, (% de Fcmax) 
      biestavel_OPmin: -100, // saída nivel alto do controlador, (% de Fcmax)
      biestavel_banda_morta: 4, //banda morta do controlador Biestável (unidades SI)
  
      // parâmetros de tela e modo de exibição da régua
      exibe_banda_proporcional: 1, // 0-NÃO exibe a barra (cor verde) de banda proporcional , 1-exibe a barra de banda proporcional
      exibe_faixa_indicao: 1, // 0-NÃO exibe faixa de indicação (cor laranja), 1-exibe faixa de indicação
      exibe_linha_setpoint: 1, // 0-NÃO exibe linha tracejada (cor azul) de setpoint, 1-exibe linha tracejada de setpoint
      exibe_linha_posicao_real: 1, // 0-NÃO exibe linha tracejada (cor cinza) de posição real, 1-exibe linha tracejada de posição real
      // Ajustar a frame rate conforme o computador. 
      // Inicialmente ajustar em 40 fps, ler o FPS médio e ajustar um valor definitivo ligeiramente inferior 
      frameRate: 40, //taxa de frames por segundo
  },
  
  
  
  
  
  {
      label_ptBR: "12I. PD +I se \|D\| < 20%", //nome do cenário
      label_enUS: "12I. PD +I if \|D\| < 20%", //nome do cenário em inglês US
      // expressar valores decimais com ponto . em vez de vírgula ,
  
      // parâmetros do motor linear
      Fcmax: 30000, // valor absoluto da máxima força aplicável (tração/compressão) pelo motor linear (unidades SI)
  
      // parâmetros do processo a ser controlado
      m: 5000, //massa do carrinho em unidades SI
      K_mola: 1000, // constante da mola em unidades SI (pode ser negativa para simular pêndulo invertido)
      C_amortecedor: 2000, // coeficiente de amortecimento SI (pode ser negativa)
      posicao_inicial: -12, // valor inicial da posição x do carrinho em relação à origem (unidades SI)
      velocidade_inicial: 50, // velocidade inicial do carrinho (SI)
      perturbacao_Tipo: 2, // 0-nenhuma, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório, 7-manual
      perturbacao_manual_inicial: -60, // habilitado no modo manual (% de Fcmax), limitado aos valores de perturbacao_Fmax e perturbacao_Fmin
      perturbacao_Fmax: 20, // valor máximo da perturbação (% de Fcmax)
      perturbacao_Fmin: -30, // valor mínimo da perturbação (% de Fcmax)
      perturbacao_Periodo: 200, // periodo da perturbação (unidades SI)
      perturbacao_t_on: 0, // percentual do periodo da onda de perturbação em nível máximo (para onda quadrada)
      perturbacao_inicialmente_inibida: 0, 
  
      // parâmetros do indicador de posição
      posicao_indicada_min: -16, // piso de escala de x indicada (unidades SI)
      posicao_indicada_max: 16, // teto de escala de x indicada (unidades SI)
  
      // parâmetros do controlador
      // os dois parâmetros a seguir precisam ser coerentes com os parâmetros do indicador de posição
      setpoint_Vmin: 4, // valor mínimo que o setpoint pode assumir (unidades SI)
      setpoint_Vmax: 12, // valor máximo que o setpoint pode assumir (unidades SI)
      tipo_controlador: 2, //0-Controlador PID, 1-Controlador PD + I se e<eLim, 2-Controlador PD + I se D<DLim, 3- Controlador Biestável
      estado_inicial_controlador: 1, //0-DESL., 1-controle AUTO, 2-controle MANUAL
      Kp: 8, // ganho da componente proporcional (adimensional) - Obs. Kp=0 desativa o PID sem inibir a pré-carga OP0
      Ki: 2,  // ganho da componente integral (adimensional) - Ki precisa ser nulo para habilitar a pré-carga OP0
      Kd: 8, // ganho da componente derivativa (adimensional)
      OP0: 0, //pré-carga em % de OP (de -100 a 100) (adimensional)
      eLim: 1.99, //limiar para integração no modo PD+I se erro<eLim
      DLim: 20, //limiar para integração no modo PD+I se D<DLim
      modo_acao_controlador: 0, // 0-Ação Reversa, 1- Ação Direta
      Fc_manual_inicial: -100, // valor inicial % de OP (de -100 a 100) do modo MAN
      setpoint_Tipo: 2, // 0-MANUAL, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório
      setpoint_Periodo: 60, // periodo do setpoint se for selecionada uma onda (unidades SI)
      setpoint_t_on: 50, // percentual do periodo da onda do setpoint em nível máximo (onda quadrada)
      setpoint_manual_inicial: -8, // valor inicial do setpoint quando é selecionado o setpoint manual (unidades SI)
      elimina_surto_derivativo: 1, // 0-função desabilitada, 1-função habilitada
      ativa_filtro_passa_baixa: 1, // 0-filtro desabilitado, 1-filtro habilitado
      frequencia_corte: 10, // frequencia de corte do filtro passa baixa. (em Hz)
  
      //parâmetros do controlador Biestável
      biestavel_OPmax: 100, // saída nivel alto do controlador, (% de Fcmax) 
      biestavel_OPmin: -100, // saída nivel alto do controlador, (% de Fcmax)
      biestavel_banda_morta: 4, //banda morta do controlador Biestável (unidades SI)
  
      // parâmetros de tela e modo de exibição da régua
      exibe_banda_proporcional: 1, // 0-NÃO exibe a barra (cor verde) de banda proporcional , 1-exibe a barra de banda proporcional
      exibe_faixa_indicao: 1, // 0-NÃO exibe faixa de indicação (cor laranja), 1-exibe faixa de indicação
      exibe_linha_setpoint: 1, // 0-NÃO exibe linha tracejada (cor azul) de setpoint, 1-exibe linha tracejada de setpoint
      exibe_linha_posicao_real: 1, // 0-NÃO exibe linha tracejada (cor cinza) de posição real, 1-exibe linha tracejada de posição real
      // Ajustar a frame rate conforme o computador. 
      // Inicialmente ajustar em 40 fps, ler o FPS médio e ajustar um valor definitivo ligeiramente inferior 
      frameRate: 40, //taxa de frames por segundo
  },
  
  
  
  
  
  
  
  
  
  {
      label_ptBR: "12J. PID c/ tempo morto = 0,5s", //nome do cenário
      label_enUS: "12J. PID w/ dead time = 0.5s", //nome do cenário em inglês US
      // expressar valores decimais com ponto . em vez de vírgula ,
  
      // parâmetros do motor linear
      Fcmax: 30000, // valor absoluto da máxima força aplicável (tração/compressão) pelo motor linear (unidades SI)
      atraso_transporte_atuador: 500, //valor em milissegundos do atraso de transporte do atuador. O valor é
                                  // aproximado pois foi utilizada uma aproximação de primeira ordem para a
                                  // função de transferência do atraso de transporte.
  /*
      ganho_atuador: 2, // ganho/inclinação central da curva do atuador (aplicável somente para atuador NÃO ideal)
      histerese_atuador: 0, // "folga" do atuador em %
  */
  
      // parâmetros do processo a ser controlado
      m: 5000, //massa do carrinho em unidades SI
      K_mola: 1000, // constante da mola em unidades SI (pode ser negativa para simular pêndulo invertido)
      C_amortecedor: 2000, // coeficiente de amortecimento SI (pode ser negativa)
      posicao_inicial: -12, // valor inicial da posição x do carrinho em relação à origem (unidades SI)
      velocidade_inicial: 50, // velocidade inicial do carrinho (SI)
      perturbacao_Tipo: 2, // 0-nenhuma, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório, 7-manual
      perturbacao_manual_inicial: -60, // habilitado no modo manual (% de Fcmax), limitado aos valores de perturbacao_Fmax e perturbacao_Fmin
      perturbacao_Fmax: 20, // valor máximo da perturbação (% de Fcmax)
      perturbacao_Fmin: -30, // valor mínimo da perturbação (% de Fcmax)
      perturbacao_Periodo: 200, // periodo da perturbação (unidades SI)
      perturbacao_t_on: 0, // percentual do periodo da onda de perturbação em nível máximo (para onda quadrada)
      perturbacao_inicialmente_inibida: 0, 
  
      // parâmetros do indicador de posição
      posicao_indicada_min: -16, // piso de escala de x indicada (unidades SI)
      posicao_indicada_max: 16, // teto de escala de x indicada (unidades SI)
  
      // parâmetros do controlador
      // os dois parâmetros a seguir precisam ser coerentes com os parâmetros do indicador de posição
      setpoint_Vmin: 4, // valor mínimo que o setpoint pode assumir (unidades SI)
      setpoint_Vmax: 12, // valor máximo que o setpoint pode assumir (unidades SI)
      tipo_controlador: 0, //0-Controlador PID, 1-Controlador PD + I se e<eLim, 2-Controlador PD + I se D<DLim, 3- Controlador Biestável
      estado_inicial_controlador: 1, //0-DESL., 1-controle AUTO, 2-controle MANUAL
      Kp: 8, // ganho da componente proporcional (adimensional) - Obs. Kp=0 desativa o PID sem inibir a pré-carga OP0
      Ki: 2,  // ganho da componente integral (adimensional) - Ki precisa ser nulo para habilitar a pré-carga OP0
      Kd: 8, // ganho da componente derivativa (adimensional)
      OP0: 0, //pré-carga em % de OP (de -100 a 100) (adimensional)
      eLim: 3, //limiar para integração no modo PD+I se erro<eLim
      DLim: 10, //limiar para integração no modo PD+I se D<DLim
      modo_acao_controlador: 0, // 0-Ação Reversa, 1- Ação Direta
      Fc_manual_inicial: -100, // valor inicial % de OP (de -100 a 100) do modo MAN
      setpoint_Tipo: 2, // 0-MANUAL, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório
      setpoint_Periodo: 60, // periodo do setpoint se for selecionada uma onda (unidades SI)
      setpoint_t_on: 50, // percentual do periodo da onda do setpoint em nível máximo (onda quadrada)
      setpoint_manual_inicial: -8, // valor inicial do setpoint quando é selecionado o setpoint manual (unidades SI)
      elimina_surto_derivativo: 1, // 0-função desabilitada, 1-função habilitada
      ativa_filtro_passa_baixa: 1, // 0-filtro desabilitado, 1-filtro habilitado
      frequencia_corte: 10, // frequencia de corte do filtro passa baixa. (em Hz)
  
      //parâmetros do controlador Biestável
      biestavel_OPmax: 100, // saída nivel alto do controlador, (% de Fcmax) 
      biestavel_OPmin: -100, // saída nivel alto do controlador, (% de Fcmax)
      biestavel_banda_morta: 4, //banda morta do controlador Biestável (unidades SI)
  
      // parâmetros de tela e modo de exibição da régua
      exibe_banda_proporcional: 1, // 0-NÃO exibe a barra (cor verde) de banda proporcional , 1-exibe a barra de banda proporcional
      exibe_faixa_indicao: 1, // 0-NÃO exibe faixa de indicação (cor laranja), 1-exibe faixa de indicação
      exibe_linha_setpoint: 1, // 0-NÃO exibe linha tracejada (cor azul) de setpoint, 1-exibe linha tracejada de setpoint
      exibe_linha_posicao_real: 1, // 0-NÃO exibe linha tracejada (cor cinza) de posição real, 1-exibe linha tracejada de posição real
      // Ajustar a frame rate conforme o computador. 
      // Inicialmente ajustar em 40 fps, ler o FPS médio e ajustar um valor definitivo ligeiramente inferior 
      frameRate: 40, //taxa de frames por segundo
  },
  
  
  
  
  
  
  
  
  {
      label_ptBR: "12K. PID c/ 10% histerese motor linear", //nome do cenário
      label_enUS: "12K. PID w/ 10% backlashed linear motor", //nome do cenário em inglês US
      // expressar valores decimais com ponto . em vez de vírgula ,
  
      // parâmetros do motor linear
      Fcmax: 30000, // valor absoluto da máxima força aplicável (tração/compressão) pelo motor linear (unidades SI)
      atraso_transporte_atuador: 0, //valor em milissegundos do atraso de transporte do atuador. O valor é
                                  // aproximado pois foi utilizada uma aproximação de primeira ordem para a
                                  // função de transferência do atraso de transporte.
      tipo_atuador: 1, // 0- Motor Linear Ideal, 1- Motor Linear NÃO Ideal (sigmoid)
      ganho_atuador: 1, // ganho/inclinação central da curva do atuador (aplicável somente para atuador NÃO ideal)
      histerese_atuador: 10, // "folga" do atuador em %
      // modo de exibição do painel saída PID/Atuador
      exibe_saida_atuador: 1, // 0-exibe saída PID, 1-exibe saída Atuador x sinal de controle 
  
  
      // parâmetros do processo a ser controlado
      m: 5000, //massa do carrinho em unidades SI
      K_mola: 1000, // constante da mola em unidades SI (pode ser negativa para simular pêndulo invertido)
      C_amortecedor: 2000, // coeficiente de amortecimento SI (pode ser negativa)
      posicao_inicial: -12, // valor inicial da posição x do carrinho em relação à origem (unidades SI)
      velocidade_inicial: 50, // velocidade inicial do carrinho (SI)
      perturbacao_Tipo: 2, // 0-nenhuma, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório, 7-manual
      perturbacao_manual_inicial: -60, // habilitado no modo manual (% de Fcmax), limitado aos valores de perturbacao_Fmax e perturbacao_Fmin
      perturbacao_Fmax: 20, // valor máximo da perturbação (% de Fcmax)
      perturbacao_Fmin: -30, // valor mínimo da perturbação (% de Fcmax)
      perturbacao_Periodo: 200, // periodo da perturbação (unidades SI)
      perturbacao_t_on: 0, // percentual do periodo da onda de perturbação em nível máximo (para onda quadrada)
      perturbacao_inicialmente_inibida: 0, 
  
      // parâmetros do indicador de posição
      posicao_indicada_min: -16, // piso de escala de x indicada (unidades SI)
      posicao_indicada_max: 16, // teto de escala de x indicada (unidades SI)
  
      // parâmetros do controlador
      // os dois parâmetros a seguir precisam ser coerentes com os parâmetros do indicador de posição
      setpoint_Vmin: 4, // valor mínimo que o setpoint pode assumir (unidades SI)
      setpoint_Vmax: 12, // valor máximo que o setpoint pode assumir (unidades SI)
      tipo_controlador: 0, //0-Controlador PID, 1-Controlador PD + I se e<eLim, 2-Controlador PD + I se D<DLim, 3- Controlador Biestável
      estado_inicial_controlador: 1, //0-DESL., 1-controle AUTO, 2-controle MANUAL
      Kp: 8, // ganho da componente proporcional (adimensional) - Obs. Kp=0 desativa o PID sem inibir a pré-carga OP0
      Ki: 2,  // ganho da componente integral (adimensional) - Ki precisa ser nulo para habilitar a pré-carga OP0
      Kd: 8, // ganho da componente derivativa (adimensional)
      OP0: 0, //pré-carga em % de OP (de -100 a 100) (adimensional)
      eLim: 3, //limiar para integração no modo PD+I se erro<eLim
      DLim: 10, //limiar para integração no modo PD+I se D<DLim
      modo_acao_controlador: 0, // 0-Ação Reversa, 1- Ação Direta
      Fc_manual_inicial: -100, // valor inicial % de OP (de -100 a 100) do modo MAN
      setpoint_Tipo: 2, // 0-MANUAL, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório
      setpoint_Periodo: 60, // periodo do setpoint se for selecionada uma onda (unidades SI)
      setpoint_t_on: 50, // percentual do periodo da onda do setpoint em nível máximo (onda quadrada)
      setpoint_manual_inicial: -8, // valor inicial do setpoint quando é selecionado o setpoint manual (unidades SI)
      elimina_surto_derivativo: 1, // 0-função desabilitada, 1-função habilitada
      ativa_filtro_passa_baixa: 1, // 0-filtro desabilitado, 1-filtro habilitado
      frequencia_corte: 10, // frequencia de corte do filtro passa baixa. (em Hz)
  
      //parâmetros do controlador Biestável
      biestavel_OPmax: 100, // saída nivel alto do controlador, (% de Fcmax) 
      biestavel_OPmin: -100, // saída nivel alto do controlador, (% de Fcmax)
      biestavel_banda_morta: 4, //banda morta do controlador Biestável (unidades SI)
  
      // parâmetros de tela e modo de exibição da régua
      exibe_banda_proporcional: 1, // 0-NÃO exibe a barra (cor verde) de banda proporcional , 1-exibe a barra de banda proporcional
      exibe_faixa_indicao: 1, // 0-NÃO exibe faixa de indicação (cor laranja), 1-exibe faixa de indicação
      exibe_linha_setpoint: 1, // 0-NÃO exibe linha tracejada (cor azul) de setpoint, 1-exibe linha tracejada de setpoint
      exibe_linha_posicao_real: 1, // 0-NÃO exibe linha tracejada (cor cinza) de posição real, 1-exibe linha tracejada de posição real
      // Ajustar a frame rate conforme o computador. 
      // Inicialmente ajustar em 40 fps, ler o FPS médio e ajustar um valor definitivo ligeiramente inferior 
      frameRate: 40, //taxa de frames por segundo
  },
  
  
  
  
  
  
  
  
  
  
  
  
  
  {
      label_ptBR: "13. Comparação Anti-Windup", //nome do cenário
      label_enUS: "13. Anti-Windup Comparison", //nome do cenário em inglês US
      // expressar valores decimais com ponto . em vez de vírgula ,
  
      // parâmetros do motor linear
      Fcmax: 5e4, // valor absoluto da máxima força aplicável (tração/compressão) pelo motor linear (unidades SI)
  
      // parâmetros do processo a ser controlado
      m: 5000, //massa do carrinho em unidades SI
      K_mola: 2000, // constante da mola em unidades SI (pode ser negativa para simular pêndulo invertido)
      C_amortecedor: 1e4, // coeficiente de amortecimento SI (pode ser negativa)
      posicao_inicial: 0, // valor inicial da posição x do carrinho em relação à origem (unidades SI)
      velocidade_inicial: 0, // velocidade inicial do carrinho (SI)
      perturbacao_Tipo: 7, // 0-nenhuma, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório, 7-manual
      perturbacao_manual_inicial: -25, // habilitado no modo manual (% de Fcmax), limitado aos valores de perturbacao_Fmax e perturbacao_Fmin
      perturbacao_Fmax: 0, // valor máximo da perturbação (% de Fcmax)
      perturbacao_Fmin: -25, // valor mínimo da perturbação (% de Fcmax)
      perturbacao_Periodo: 15, // periodo da perturbação (unidades SI)
      perturbacao_t_on: 93, // percentual do periodo da onda de perturbação em nível máximo (para onda quadrada)
      perturbacao_inicialmente_inibida: 1, 
  
      // parâmetros do indicador de posição
      posicao_indicada_min: -16, // piso de escala de x indicada (unidades SI)
      posicao_indicada_max: 16, // teto de escala de x indicada (unidades SI)
  
      // parâmetros do controlador
      // os dois parâmetros a seguir precisam ser coerentes com os parâmetros do indicador de posição
      setpoint_Vmin: -10, // valor mínimo que o setpoint pode assumir (unidades SI)
      setpoint_Vmax: 10, // valor máximo que o setpoint pode assumir (unidades SI)
      estado_inicial_controlador: 0, //0-DESL., 1-controle AUTO, 2-controle MANUAL
      tipo_controlador: 0, //0-Controlador PID, 1-Controlador PD + I se e<eLim, 2-Controlador PD + I se D<DLim, 3- Controlador Biestável
      Kp: 1, // ganho da componente proporcional (adimensional) - Obs. Kp=0 desativa o PID sem inibir a pré-carga OP0
      Ki: 0.5,  // era 0.25 ganho da componente integral (adimensional) - Ki precisa ser nulo para habilitar a pré-carga OP0
      Kd: 1, // ganho da componente derivativa (adimensional)
      OP0: 0, //pré-carga em % de OP (de -100 a 100) (adimensional)
      Imax: 100, //valor máximo em % da componente integral
      eLim: 4, //limiar para integração no modo PD+I se erro<eLim
      DLim: 6, //limiar para integração no modo PD+I se D<DLim
      modo_acao_controlador: 0, // 0-Ação Reversa, 1- Ação Direta
      Fc_manual_inicial: -100, // valor inicial % de OP (de -100 a 100) do modo MAN
      setpoint_Tipo: 0, // 0-MANUAL, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório
      setpoint_Periodo: 100, // periodo do setpoint se for selecionada uma onda (unidades SI)
      setpoint_t_on: 50, // percentual do periodo da onda do setpoint em nível máximo (onda quadrada)
      setpoint_manual_inicial: 10, // valor inicial do setpoint quando é selecionado o setpoint manual (unidades SI)
      elimina_surto_derivativo: 1, // 0-função desabilitada, 1-função habilitada
      ativa_filtro_passa_baixa: 1, // 0-filtro desabilitado, 1-filtro habilitado
      frequencia_corte: 0.1, // frequencia de corte do filtro passa baixa. (em Hz)
      
      //parâmetros do controlador Biestável
      biestavel_OPmax: 100, // saída nivel alto do controlador, (% de Fcmax) 
      biestavel_OPmin: -100, // saída nivel alto do controlador, (% de Fcmax)
      biestavel_banda_morta: 2, //banda morta do controlador Biestável (unidades SI)
  
      // parâmetros de tela e modo de exibição da régua
      exibe_banda_proporcional: 1, // 0-NÃO exibe a barra (cor verde) de banda proporcional , 1-exibe a barra de banda proporcional
      exibe_faixa_indicao: 1, // 0-NÃO exibe faixa de indicação (cor laranja), 1-exibe faixa de indicação
      exibe_linha_setpoint: 1, // 0-NÃO exibe linha tracejada (cor azul) de setpoint, 1-exibe linha tracejada de setpoint
      exibe_linha_posicao_real: 1, // 0-NÃO exibe linha tracejada (cor cinza) de posição real, 1-exibe linha tracejada de posição real
      // Ajustar a frame rate conforme o computador. 
      // Inicialmente ajustar em 40 fps, ler o FPS médio e ajustar um valor definitivo ligeiramente inferior 
      frameRate: 40, //taxa de frames por segundo
  },
  
  
  
  
  
  
  
  
  
  {
      label_ptBR: "14. Motor Linear c/ Histerese", //nome do cenário
      label_enUS: "14. Backlashed Linear Motor", //nome do cenário em inglês US
      // expressar valores decimais com ponto . em vez de vírgula ,
  
      // parâmetros do motor linear
      tipo_atuador: 1, // 0- Motor Linear Ideal, 1- Motor Linear NÃO Ideal (sigmoid)
      Fcmax: 5000, // valor absoluto da máxima força aplicável (trAção/compress�o) pelo motor linear (unidades SI)
      ganho_atuador: 1, // ganho/inclinação central da curva do atuador (aplicável somente para atuador NÃO ideal)
      histerese_atuador: 30, // "folga" do atuador em %
  
  
      // parâmetros do processo a ser controlado
      m: 5000, //massa do carrinho em unidades SI
      K_mola: 0, // constante da mola em unidades SI (pode ser negativa para simular pêndulo invertido)
      C_amortecedor: 4280, // coeficiente de amortecimento SI (pode ser negativa)
      posicao_inicial: 0, // valor inicial da posição x do carrinho em relação à origem (unidades SI)
      velocidade_inicial: 0, // velocidade inicial do carrinho (SI)
      perturbacao_Tipo: 1, // 0-nenhuma, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório, 7-manual
      perturbacao_manual_inicial: -20, // habilitado no modo manual (% de Fcmax), limitado aos valores de perturbacao_Fmax e perturbacao_Fmin
      perturbacao_Fmax: 50, // valor máximo da perturbação (% de Fcmax)
      perturbacao_Fmin: -50, // valor mínimo da perturbação (% de Fcmax)
      perturbacao_Periodo: 15, // periodo da perturbação (unidades SI)
      perturbacao_t_on: 93, // percentual do periodo da onda de perturbação em nível máximo (para onda quadrada)
      perturbacao_inicialmente_inibida: 0, 
  
      // parâmetros do indicador de posição
      posicao_indicada_min: -10, // piso de escala de x indicada (unidades SI)
      posicao_indicada_max: 10, // teto de escala de x indicada (unidades SI)
  
      // parâmetros do controlador
      // os dois parâmetros a seguir precisam ser coerentes com os parâmetros do indicador de posição
      setpoint_Vmin: -10, // valor mínimo que o setpoint pode assumir (unidades SI)
      setpoint_Vmax: 10, // valor máximo que o setpoint pode assumir (unidades SI)
      estado_inicial_controlador: 0, //0-DESL., 1-controle AUTO, 2-controle MANUAL
      tipo_controlador: 2, //0-Controlador PID, 1-Controlador PD + I se e<eLim, 2-Controlador PD + I se D<DLim, 3- Controlador Biestável
      Kp: 5, // ganho da componente proporcional (adimensional) - Obs. Kp=0 desativa o PID sem inibir a pré-carga OP0
      Ki: 0,  // ganho da componente integral (adimensional) - Ki precisa ser nulo para habilitar a pré-carga OP0
      Kd: 0, // ganho da componente derivativa (adimensional)
      OP0: 0, //pré-carga em % de OP (de -100 a 100) (adimensional)
      Imax: 100, //valor máximo em % da componente integral
      eLim: 3, //limiar para integração no modo PD+I se erro<eLim
      DLim: 1, //limiar para integração no modo PD+I se D<DLim
      modo_acao_controlador: 0, // 0-Ação Reversa, 1- Ação Direta
      Fc_manual_inicial: -100, // valor inicial % de OP (de -100 a 100) do modo MAN
      setpoint_Tipo: 0, // 0-MANUAL, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório
      setpoint_Periodo: 100, // periodo do setpoint se for selecionada uma onda (unidades SI)
      setpoint_t_on: 50, // percentual do periodo da onda do setpoint em nível máximo (onda quadrada)
      setpoint_manual_inicial: 0, // valor inicial do setpoint quando é selecionado o setpoint manual (unidades SI)
      elimina_surto_derivativo: 0, // 0-função desabilitada, 1-função habilitada
      ativa_filtro_passa_baixa: 0, // 0-filtro desabilitado, 1-filtro habilitado
      frequencia_corte: 0.1, // frequencia de corte do filtro passa baixa. (em Hz)
      
      //parâmetros do controlador Biestável
      biestavel_OPmax: 100, // saída nivel alto do controlador, (% de Fcmax) 
      biestavel_OPmin: -100, // saída nivel alto do controlador, (% de Fcmax)
      biestavel_banda_morta: 2, //banda morta do controlador Biestável (unidades SI)
  
      // modo de exibição do painel saída PID/Atuador
      exibe_saida_atuador: 1, // 0-exibe saída PID, 1-exibe saída Atuador x sinal de controle 
  
  
      // parâmetros de tela e modo de exibição da régua
      exibe_banda_proporcional: 1,// 0-NÃO exibe a barra (cor verde) de banda proporcional , 1-exibe a barra de banda proporcional
      exibe_faixa_indicao: 1,// 0-NÃO exibe faixa de indicação (cor laranja), 1-exibe faixa de indicação
      exibe_linha_setpoint: 1,// 0-NÃO exibe linha tracejada (cor azul) de setpoint, 1-exibe linha tracejada de setpoint
      exibe_linha_posicao_real: 1,// 0-NÃO exibe linha tracejada (cor cinza) de posição real, 1-exibe linha tracejada de posição real
      // Ajustar a frame rate conforme o computador. 
      // Inicialmente ajustar em 40 fps, ler o FPS médio e ajustar um valor definitivo ligeiramente inferior 
      frameRate: 40, //taxa de frames por segundo
  },
  
  
  
  
  

  {
      label_ptBR: "15. Em MAN mude PV p/ 6m e então p/ AUTO", //nome do cenário
      label_enUS: "15. In MAN change PV to 6m and then to AUTO", //nome do cenário em inglês US
      // expressar valores decimais com ponto . em vez de vírgula ,
  
      // parâmetros do motor linear
      Fcmax: 50000, // valor absoluto da máxima força aplicável (tração/compressão) pelo motor linear (unidades SI)
  
      // parâmetros do processo a ser controlado
      m: 5000, //massa do carrinho em unidades SI
      K_mola: 1000, // constante da mola em unidades SI (pode ser negativa para simular pêndulo invertido)
      C_amortecedor: 1000, // coeficiente de amortecimento SI (pode ser negativa)
      posicao_inicial: 14, // valor inicial da posição x do carrinho em relação à origem (unidades SI)
      velocidade_inicial: 0, // velocidade inicial do carrinho (SI)
      perturbacao_Tipo: 2, // 0-nenhuma, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório, 7-manual
      perturbacao_manual_inicial: -60, // habilitado no modo manual (% de Fcmax), limitado aos valores de perturbacao_Fmax e perturbacao_Fmin
      perturbacao_Fmax: 0, // valor máximo da perturbação (% de Fcmax)
      perturbacao_Fmin: -100, // valor mínimo da perturbação (% de Fcmax)
      perturbacao_Periodo: 30, // periodo da perturbação (unidades SI)
      perturbacao_t_on: 93, // percentual do periodo da onda de perturbação em nível máximo (para onda quadrada)
      perturbacao_inicialmente_inibida: 1, 
  
      // parâmetros do indicador de posição
      posicao_indicada_min: -16, // piso de escala de x indicada (unidades SI)
      posicao_indicada_max: 16, // teto de escala de x indicada (unidades SI)
  
      // parâmetros do controlador
      // os dois parâmetros a seguir precisam ser coerentes com os parâmetros do indicador de posição
      setpoint_Vmin: 6, // valor mínimo que o setpoint pode assumir (unidades SI)
      setpoint_Vmax: 14, // valor máximo que o setpoint pode assumir (unidades SI)
      estado_inicial_controlador: 1, //0-DESL., 1-controle AUTO, 2-controle MANUAL
      Kp: 2, // ganho da componente proporcional (adimensional) - Obs. Kp=0 desativa o PID sem inibir a pré-carga OP0
      Ki: 0.5,  // ganho da componente integral (adimensional) - Ki precisa ser nulo para habilitar a pré-carga OP0
      Kd: 0.5, // ganho da componente derivativa (adimensional)
      OP0: 0, //pré-carga em % de OP (de -100 a 100) (adimensional)
      modo_acao_controlador: 0, // 0-Ação Reversa, 1- Ação Direta
      Fc_manual_inicial: -100, // valor inicial % de OP (de -100 a 100) do modo MAN
      setpoint_Tipo: 0, // 0-MANUAL, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório
      setpoint_Periodo: 100, // periodo do setpoint se for selecionada uma onda (unidades SI)
      setpoint_t_on: 50, // percentual do periodo da onda do setpoint em nível máximo (onda quadrada)
      setpoint_manual_inicial: 14, // valor inicial do setpoint quando é selecionado o setpoint manual (unidades SI)
      DLim: 5,
      eLim: 1,
      elimina_surto_derivativo: 0, // 0-função desabilitada, 1-função habilitada
      ativa_filtro_passa_baixa: 1, // 0-filtro desabilitado, 1-filtro habilitado
      frequencia_corte: 10, // frequencia de corte do filtro passa baixa. (em Hz)

      // modo de exibição da régua
      exibe_banda_morta: 0, // 0-NÃO exibe a barra (cor verde) de banda morta (aplicável ao controlador Biestável somente), 1-exibe a barra de banda morta
      exibe_envelope_operacao: 1, // 0-NÃO exibe linhas (cor vermelha) dos limites do envelope de operaçao, 1-exibe linhas dos limites do envelope de operaçao
  
      // envelope de operação
      envelope_max: 15, // limite superior para o envelope de operação em [m]
      envelope_min: 5, // limite inferior para o envelope de operação em [m]

  
      // parâmetros de tela e modo de exibição da régua
      ocultar_sistema: 0, // 0: processo visível, 1: processo invisível
      exibe_banda_proporcional: 0, // 0-NÃO exibe a barra (cor verde) de banda proporcional , 1-exibe a barra de banda proporcional
      exibe_faixa_indicao: 0, // 0-NÃO exibe faixa de indicação (cor laranja), 1-exibe faixa de indicação
      exibe_linha_setpoint: 1, // 0-NÃO exibe linha tracejada (cor azul) de setpoint, 1-exibe linha tracejada de setpoint
      exibe_linha_posicao_real: 1, // 0-NÃO exibe linha tracejada (cor cinza) de posição real, 1-exibe linha tracejada de posição real
      // Ajustar a frame rate conforme o computador. 
      // Inicialmente ajustar em 40 fps, ler o FPS médio e ajustar um valor definitivo ligeiramente inferior 
      frameRate: 40, //taxa de frames por segundo
  },
  
  
  
  
  
  
  
    {
      label_ptBR: "16. Questão P319 NRC", //nome do cenário
      label_enUS: "16. Question P319 NRC", //nome do cenário em inglês US
      // expressar valores decimais com ponto . em vez de vírgula ,
  
      // parâmetros do motor linear
      tipo_atuador: 0, // 0- Motor Linear Ideal, 1- Motor Linear NÃO Ideal (sigmoid)
      Fcmax: 6e4, // valor absoluto da máxima força aplicável (trAção/compress�o) pelo motor linear (unidades SI)
      ganho_atuador: 1, // ganho/inclinação central da curva do atuador (aplicável somente para atuador NÃO ideal)
      histerese_atuador: 0, // "folga" do atuador em %
      modo_acao_motor: 0, // 0-Ação Reversa, 1- Ação Direta 

      // parâmetros do processo a ser controlado
      m: 5000, //massa do carrinho em unidades SI
      K_mola: 1000, // constante da mola em unidades SI (pode ser negativa para simular pêndulo invertido)
      C_amortecedor: 42800, // coeficiente de amortecimento SI (pode ser negativa)
      posicao_inicial: 0, // valor inicial da posição x do carrinho em relação à origem (unidades SI)
      velocidade_inicial: 0, // velocidade inicial do carrinho (SI)
      perturbacao_Tipo: 7, // 0-nenhuma, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório, 7-manual
      perturbacao_manual_inicial: 50, // habilitado no modo manual (% de Fcmax), limitado aos valores de perturbacao_Fmax e perturbacao_Fmin
      perturbacao_Fmax: 60, // valor máximo da perturbação (% de Fcmax)
      perturbacao_Fmin: 40, // valor mínimo da perturbação (% de Fcmax)
      perturbacao_Periodo: 11, // periodo da perturbação (unidades SI)
      perturbacao_t_on: 50, // percentual do periodo da onda de perturbação em nível máximo (para onda quadrada)
      perturbacao_inicialmente_inibida: 1, 
  
      // parâmetros do indicador de posição
      posicao_indicada_min: -12, // piso de escala de x indicada (unidades SI)
      posicao_indicada_max: 12, // teto de escala de x indicada (unidades SI)
  
      // parâmetros do controlador
      // os dois parâmetros a seguir precisam ser coerentes com os parâmetros do indicador de posição
      setpoint_Vmin: -6, // valor mínimo que o setpoint pode assumir (unidades SI)
      setpoint_Vmax: 6, // valor máximo que o setpoint pode assumir (unidades SI)
      estado_inicial_controlador: 1, //0-DESL., 1-controle AUTO, 2-controle MANUAL
      Kp: 2, // ganho da componente proporcional (adimensional) - Obs. Kp=0 desativa o PID sem inibir a pré-carga OP0
      Ki: 0.5,  // ganho da componente integral (adimensional) - Ki precisa ser nulo para habilitar a pré-carga OP0
      Kd: 0, // ganho da componente derivativa (adimensional)
      OP0: 0, //pré-carga em % de OP (de -100 a 100) (adimensional)
      Imax: 100, //valor máximo em % da componente integral
      modo_acao_controlador: 1, // 0-Ação Reversa, 1- Ação Direta
      Fc_manual_inicial: -100, // valor inicial % de OP (de -100 a 100) do modo MAN
      setpoint_Tipo: 0, // 0-MANUAL, 1-onda senoidal, 2-onda quadrada, 3-onda triangular, 4-dente de serra, 5-trem de impulsos, 6-ruido aleatório
      setpoint_Periodo: 200, // periodo do setpoint se for selecionada uma onda (unidades SI)
      setpoint_t_on: 50, // percentual do periodo da onda do setpoint em nível máximo (onda quadrada)
      setpoint_manual_inicial: 0, // valor inicial do setpoint quando é selecionado o setpoint manual (unidades SI)
      elimina_surto_derivativo: 0, // 0-função desabilitada, 1-função habilitada
      ativa_filtro_passa_baixa: 1, // 0-filtro desabilitado, 1-filtro habilitado
      frequencia_corte: 10, // frequencia de corte do filtro passa baixa. (em Hz)
  
      // parâmetros de tela e modo de exibição da régua
      exibe_banda_proporcional: 1, // 0-NÃO exibe a barra (cor verde) de banda proporcional , 1-exibe a barra de banda proporcional
      exibe_faixa_indicao: 1, // 0-NÃO exibe faixa de indicação (cor laranja), 1-exibe faixa de indicação
      exibe_linha_setpoint: 1, // 0-NÃO exibe linha tracejada (cor azul) de setpoint, 1-exibe linha tracejada de setpoint
      exibe_linha_posicao_real: 1, // 0-NÃO exibe linha tracejada (cor cinza) de posição real, 1-exibe linha tracejada de posição real
      // Ajustar a frame rate conforme o computador. 
      // Inicialmente ajustar em 40 fps, ler o FPS médio e ajustar um valor definitivo ligeiramente inferior 
      frameRate: 40, //taxa de frames por segundo
  },
  

  
  
  
  
  
  
  ];
  