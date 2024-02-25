
let processSize;

//Seleção do idioma inicial
let languageIndex = 0; //0: PT-BR, 1: EN-US
let strg = {};

//createButton
let resetButton, pauseButton;


//createSelect
let selTipoAtuador, selAtuadorPID, selTipoControle, tipoPert, tipoSetpoint;

//createDiv


let posicao_inicial0 = 0,
  velocidade_inicial0 = 0,
  setpoint_manual_inicial0 = 0,
  saida_controle_manual_inicial0 = 0,
  perturbacao_manual_inicial0 = 0,
  modoAcao = 1,
  modoAcaoMotor=1,
  eliminaSurto = 0;

// setup gráfico controlador/atuador
let mostraBarGraph = true,
  mostraBiestavel = false,
  mostraSigmoid = false,
  mostraSetpointPrev = false;
  mostraPerturbPrev = false;

// setup Régua
let mostraIndPos = 1,
  mostraBP = 1,
  mostraBM = 1,
  mostraLinhaSP = 1,
  mostraPosReal = 1,
  mostraEnvelope = 0;


let envelope = [];

// setup frameRate
let frameRate0 = 40;
let frameRateData = [];
let estado_inicial_controlador;

//canvas
const canvasWidth = 1630;
const canvasHeigth = 745;

const xScale = canvasWidth / 1200;
const yScale = (canvasHeigth - 38) / 900;

//variáveis de simulação
let x = [0, 0]; //posição da massa
let xInd = 0; //posição indicada
let setPoint; //slider
let perturbSlider;
// let erro = [0, 0, 0]; //erro entre a posição e o setpoint
let erro = 0; //erro entre a posição e o setpoint
//let a = 0;
//let v = 0;

// let PID=[0, 0]; //saída do controlador PID
let PID = 0; //saída do controlador PID
let atrasoPID =0; //saída PID após passar pelo bloco de atraso de transporte
let sinalControleAnterior = 0; //saída de controle anterior
let Perturb = [0, 0, 0]; //Força de Perturbação
let Ts = 0.025; // periodo de amostragem
let forcaAtuador = [0, 0, 0];

//parâmetros do controlador
let K_P0,
  K_I0,
  K_D0,
  PIDSat0,
  Imax,
  eLim,
  DLim,
  Fc0 = 0;
let ativaFiltro, freqCorte;
let K_P, K_I, K_D, PIDSat, Ti, Td;
let TiInp, TdInp;;
let xSatMax = 16; // máxima posição indicada
let xSatMin = -16; // mínima posição indicada

let saidaP = 0,
  saidaI = 0,
  saidaD = 0;

  
let controlador = 0;
//let I = 0; // valor inicial parte integrativa
let manualForce = 0;
//let manualForce_km1 = 0;

// Biestável
let biestavel;

//parametros para o desenho
let L0, H0, Lcar, Hcar, Hpid, xCar, Nmol, txtSize, strokeW;

//gradezas físicas
let m0 = 1; //massa da mola
let K0 = 10; // constante da mola
let C0 = 9; //constante de amortecimento;
let m, K, C;

// declara objetos do desenho
let mol1; //mola
let am1; // amortecedor
let m1; // massa

let noControl = 0;
let hideSystem = false;

let deltaInd = 0;

// Objetos IHM
let painelParSis;
let painelParAtuador;
let variablesList = [];
let sel;
let aplicaPerturb;
let aplicaSetpoint;
let onOff;
let drpDwn;
let forces;

// Variaveis para plotar
let plotSkip = 1;
let xPlot = [];
let setPointPlot = [];
let setPointAltoPlot = [];
let setPointBaixoPlot = [];
let yTick = [];
let PIDTick = [];
let erroTick = [];
let PIDLim = [];
let PIDPlot = [];
let biestavelPlot = [[0, 0]];
let forcaAtuadorPlot = [0];
let atuadorPlot = [];
let manualPlot = [];
let erroPlot = [];

let PerturbPreviewPlot = [];
let PerturbPlot = [];
let PerturbyTick = [];
let PerturbyTickPlot = [];
let PerturbxTick = [];

let SetpointPreviewPlot = [];
let SetpointyTick = [];
let SetpointxTick = [];

//Setpoint
let setPointCount = 0;
let setPointMode = 0;

let setPointFmax = 12;
let setPointFmin = -12;
let setPointPeriodo = 10;
let setPointton = 50;
let setpoint_Fmax0, setpoint_Fmin0, setpoint_Periodo0, setpoint_t_on0, selSet0;

//Perturbação
let count = 0;
let perturbMode = "nenhuma";
let perturbIniOff = 0;

let perturbFmax = 10;
let perturbFmin = -10;
let perturbPeriodo = 10;
let perturbton = 50;
let perturbacao_Fmax0,
  perturbacao_Fmin0,
  perturbacao_Periodo0,
  perturbacao_t_on0,
  sel0;

// Diagrama de corpo livre
let multF=1;
let Fpert, Fpid, Fmol, Famo;
let PIDrms = [];
let Fmolrms = [];
let Famorms = [];
const corPID = [0, 155, 0];
const corMol = [128, 64, 64];
const corPert = [200, 150, 39];
const corAmo = [160, 0, 64];
const corErro = [253, 0, 20];
const corAtuador = [253, 0, 20];
const corPos = "#FF6400";
const corPosReal = [10, 100, 100];
const corSP = [0, 0, 255];
const corMan = [119, 136, 153];
let canv;
let SigFig,
  kSig = 1,
  histSig = 10,
  atuador = 0;

//Tipo de fonte
const selFont = "Helvetica";


let indOf = {};

let txtTi, txtTd, txtSPH, txtSPL;

let stability = false;
let stabilityCounter = 0;



const offSetPanelx =  600;
const offSetPanely = 300;

const widthPlot = 430;
const heigthPlot = 170 * yScale;

const offSetPlotx =  50;
const offSetPloty =  heigthPlot + 300 * yScale;

const widthPerturbPlot = 280;
const heigthPerturbPlot = 150 * yScale;

let canvasBounds;

let graph1Pos, graph2Pos, graph3Pos;
let dynamometerPos,  controllerOutputsPos,  actuatorOutputsPos, setPointGraphPos, perturbGraphPos;

let posYScale, heightScale;

let showleftDiv = true;
let showCenterDiv = true;
let showRightDiv = true;

let isPlaying = true;

let fpsExpected;
let fpsMean;