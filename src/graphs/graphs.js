
function plotaGraficos() {
  
  if(showleftDiv){

    xPlot.push(constrain(x[1]+deltaInd, xSatMin, xSatMax));
    erroPlot.push(erro);
  
    setPointPlot.push(setPoint.value());
    setPointAltoPlot.push(biestavel.setpointAlto);
    setPointBaixoPlot.push(biestavel.setpointBaixo);
  
    createAxis(
      graph1Pos[0],
      graph1Pos[1],
      graph1Pos[2],
      graph1Pos[3],
      [],
      yTick,
      strg.titulo1,
      strg.xlabel1E,
      corPos,
      " ",
      yTick,
      strg.xlabel1D,
      corSP
    );
  
    if(controlador < 3 && pidControlCheckBox.checked()){
      plot(
        graph1Pos[0],
        graph1Pos[1],
        graph1Pos[2],
        graph1Pos[3],
        setPointPlot,
        yTick,
        corSP
      );    
    }
    else if(controlador == 3 && pidControlCheckBox.checked()){
      plot(
        graph1Pos[0],
        graph1Pos[1],
        graph1Pos[2],
        graph1Pos[3],
        setPointAltoPlot,
        yTick,
        corSP
      ); 
      
      plot(
        graph1Pos[0],
        graph1Pos[1],
        graph1Pos[2],
        graph1Pos[3],
        setPointBaixoPlot,
        yTick,
        corSP
      ); 
    }

    plot( graph1Pos[0],  graph1Pos[1],  graph1Pos[2],  graph1Pos[3], xPlot, yTick, corPos);
  
    if (pidControlCheckBox.checked()) {
      createAxis(
        graph2Pos[0],
        graph2Pos[1],
        graph2Pos[2],
        graph2Pos[3],
        [],
        PIDTick,
        strg.titulo2,
        strg.xlabel2E,
        corAtuador,
        " ",
        PIDTick,
        strg.xlabel2D,
        corPID
      );
     
      plot(
        graph2Pos[0],
        graph2Pos[1],
        graph2Pos[2],
        graph2Pos[3],
        PIDPlot,
        PIDTick,
        corPID
      );
      
       plot(
        graph2Pos[0],
        graph2Pos[1],
        graph2Pos[2],
        graph2Pos[3],
        atuadorPlot,
        PIDTick,
        corAtuador
      );
      
    } else {
      createAxis(
        graph2Pos[0],
        graph2Pos[1],
        graph2Pos[2],
        graph2Pos[3],
        [],
        PIDTick,
        strg.titulo2,
        strg.xlabel2E,
        corAtuador,
        " ",
        PIDTick,
        strg.xlabel2D,
        corMan
      );
     
      plot(
        graph2Pos[0],
        graph2Pos[1],
        graph2Pos[2],
        graph2Pos[3],
        manualPlot,
        PIDTick,
        corMan
      );
      
       plot(
        graph2Pos[0],
        graph2Pos[1],
        graph2Pos[2],
        graph2Pos[3],
        atuadorPlot,
        PIDTick,
        corAtuador
      );
    }
  
    createAxis(
      graph3Pos[0],
      graph3Pos[1],
      graph3Pos[2],
      graph3Pos[3],
      [],
      PerturbyTickPlot,
      strg.titulo3,
      strg.xlabel3E,
      corPert,
      " "
    );
    plot(
      graph3Pos[0],
      graph3Pos[1],
      graph3Pos[2],
      graph3Pos[3],
      PerturbPlot,
      PerturbyTickPlot,
      corPert
    );
  }
      
    
  if(showRightDiv){

    if(mostraSetpointPrev && strg.tiposSetpoint.indexOf(selSet.value()) != 0){
    createAxis(
      setPointGraphPos[0],
      setPointGraphPos[1],
      setPointGraphPos[2],
      setPointGraphPos[3],
      SetpointxTick,
      SetpointyTick,
      strg.tituloSetpoint,
      strg.ylabelSetpoint,
      0,
      strg.xlabelSetpoint
    );
    plot(
      setPointGraphPos[0],
      setPointGraphPos[1],
      setPointGraphPos[2],
      setPointGraphPos[3],
      SetpointPreviewPlot,
      SetpointyTick,
      corSP
    );
    }
    
    if(strg.tiposPert.indexOf(sel.value()) != 7 && mostraPerturbPrev){
      createAxis(
        perturbGraphPos[0],
        perturbGraphPos[1],
        perturbGraphPos[2],
        perturbGraphPos[3],
        PerturbxTick,
        PerturbyTick,
        strg.tituloPert,
        strg.ylabelPert,
        0,
        strg.xlabelPert
      );
      plot(
        perturbGraphPos[0],
        perturbGraphPos[1],
        perturbGraphPos[2],
        perturbGraphPos[3],
        PerturbPreviewPlot,
        PerturbyTick,
        corPert
      );
    } 
  }
  }