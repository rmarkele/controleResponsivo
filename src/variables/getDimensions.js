function getDimensions(){
    fpsExpected = document.querySelector('#fps-expected');
    fpsMean = document.querySelector('#fps-mean');

    let vh = window.innerHeight * 0.01;
    // Configura o valor em --vh na raiz do documento
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    canvasBounds = document.querySelector("#canvas-container").getBoundingClientRect();   
    let processBounds = document.querySelector("#process").getBoundingClientRect();
    let headerRect = document.querySelector("header").getBoundingClientRect();
    let headerHeight = headerRect.bottom - headerRect.top;

    let processBorder = parseInt(
        getComputedStyle(document.querySelector("#process"))
        .getPropertyValue("border-top-width")
        .replace("px", "")
    );
    processSize = [
        processBorder,
        processBounds.bottom - headerHeight - processBorder,
        processBounds.right - processBounds.left - 2 * processBorder,
        processBounds.bottom - processBounds.top - 2 * processBorder,
    ];

    dynamometerPos =  getDivPos('dynamometer-container');
    dynamometerPos[1] -= 30;
    dynamometerPos[3] -= 30;

    panelProcessVariables = getDivPos('panel-process-variables');
    panelProcessVariables[1] -= panelProcessVariables[3]

    controllerOutputsPos = getDivPos('controller-outputs');
    controllerOutputsPos[1] -= controllerOutputsPos[3];
    
    actuatorOutputsPos = getDivPos('actuator-outputs');
    actuatorOutputsPos[1] -= actuatorOutputsPos[3]-25;
    actuatorOutputsPos[2] -= 20;
    actuatorOutputsPos[3] -= 40;




    let graph1Bounds = document.querySelector("#graph-PV-SP").getBoundingClientRect();
    let graph2Bounds = document.querySelector("#graph-Fc-OP").getBoundingClientRect();
    let graph3Bounds = document.querySelector("#graph-FP").getBoundingClientRect();

    graph1Pos = [
        graph1Bounds.left - canvasBounds.left + 50,
        graph1Bounds.bottom - canvasBounds.top - 8,
        graph1Bounds.right - graph1Bounds.left - 100,
        graph1Bounds.bottom - graph1Bounds.top - 28,
    ];
    graph2Pos = [
        graph2Bounds.left - canvasBounds.left + 50,
        graph2Bounds.bottom - canvasBounds.top - 12,
        graph2Bounds.right - graph2Bounds.left - 100,
        graph2Bounds.bottom - graph2Bounds.top - 28,
    ];
    graph3Pos = [
        graph3Bounds.left - canvasBounds.left + 50,
        graph3Bounds.bottom - canvasBounds.top - 18,
        graph3Bounds.right - graph3Bounds.left - 100,
        graph3Bounds.bottom - graph3Bounds.top - 28,
    ];
    


    let w = canvasBounds.right - canvasBounds.left;
    let h = canvasBounds.bottom - canvasBounds.top;
    let href = processSize[3];


    

    if (w <= 500) {
        L0 = 0.15 * w;
        H0 = 0.016 * h;
        Lcar = 0.22 * w;
        Hcar = 0.8 * href;
        Hpid = 0.02 * h;
        Nmol = 11;
        txtSize = 10;
        strokeW = 1;
    } else if (w <= 850) {
        L0 = 0.15 * w;
        H0 = 0.016 * h;
        Lcar = 0.15 * w;
        Hcar = 0.8 * href;
        Hpid = 0.02 * h
        Nmol = 41;
        txtSize = 12;
        strokeW = 1;
    } else if(w <=1000) {
        L0 = 0.1 * w;
        H0 = 0.02 * h;
        Lcar = (150 / 1200) * w;
        Hcar = 0.9 * href;
        Hpid = 0.03 * h
        Nmol = 61;
        txtSize = 12;
        strokeW = 1;
    } else {
        L0 = 0.1 * w;
        H0 = 0.02 * h;
        Lcar = (150 / 1200) * w;
        Hcar = 0.9 * href;
        Hpid = 0.03 * h
        Nmol = 61;
        txtSize = 14;
        strokeW = 1;
    }

    

    let perturbGraphBounds = document.querySelector('#perturbGraph')?.getBoundingClientRect();
    if(perturbGraphBounds){
        perturbGraphPos = [
            perturbGraphBounds.left - canvasBounds.left,
            perturbGraphBounds.bottom - canvasBounds.top,
            perturbGraphBounds.right - perturbGraphBounds.left,
            perturbGraphBounds.bottom - perturbGraphBounds.top ,
        ];
        perturbGraphPos[0] += 55;
        perturbGraphPos[1] -= 65;
        perturbGraphPos[2] -= 75;
        perturbGraphPos[3] -= 90;
    }

    let setPointGraphBounds = document.querySelector('#setPointGraph')?.getBoundingClientRect();
    if(setPointGraphBounds){
        setPointGraphPos = [
            setPointGraphBounds.left - canvasBounds.left,
            setPointGraphBounds.bottom - canvasBounds.top,
            setPointGraphBounds.right - setPointGraphBounds.left,
            setPointGraphBounds.bottom - setPointGraphBounds.top ,
        ];
        setPointGraphPos[0] += 55;
        setPointGraphPos[1] -= 65;
        setPointGraphPos[2] -= 75;
        setPointGraphPos[3] -= 90;
    }



}

function getDivPos(id){
    let canvasBounds = document.querySelector("#canvas-container").getBoundingClientRect();   
    let divBounds = document.querySelector(`#${id}`).getBoundingClientRect(); 
    return [
        divBounds.left - canvasBounds.left ,
        divBounds.bottom - canvasBounds.top,
        divBounds.right - divBounds.left,
        divBounds.bottom - divBounds.top,
    ]
}