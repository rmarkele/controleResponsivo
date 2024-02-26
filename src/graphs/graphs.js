
function plotaGraficos() {
  
  if(showleftDiv){

    xPlot.push(constrain(x[1]+deltaInd, xSatMin, xSatMax));
    erroPlot.push(erro);
  
    setPointPlot.push(setPoint.value());
    setPointAltoPlot.push(biestavel.setpointAlto);
    setPointBaixoPlot.push(biestavel.setpointBaixo);
    
    PIDPlot.push(PID);
    manualPlot.push(manualControl.value());
    atuadorPlot.push(forcaAtuador[2]);

    PerturbPlot.push(Perturb[2]);



    constrainLength(xPlot, graph1Pos[2], plotSkip);
    constrainLength(setPointPlot, graph1Pos[2], plotSkip);
    constrainLength(setPointAltoPlot, graph1Pos[2], plotSkip);
    constrainLength(setPointBaixoPlot, graph1Pos[2], plotSkip);

    constrainLength(PIDPlot, graph2Pos[2], plotSkip);
    constrainLength(manualPlot, graph2Pos[2], plotSkip);
    constrainLength(atuadorPlot, graph2Pos[2], plotSkip);
    
    constrainLength(PerturbPlot, graph3Pos[2], plotSkip);

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
        corSP,
        plotSkip
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
        corSP,
        plotSkip
      ); 
      
      plot(
        graph1Pos[0],
        graph1Pos[1],
        graph1Pos[2],
        graph1Pos[3],
        setPointBaixoPlot,
        yTick,
        corSP,
        plotSkip
      ); 
    }

    plot( 
      graph1Pos[0],
      graph1Pos[1],
      graph1Pos[2],
      graph1Pos[3],
      xPlot, 
      yTick, 
      corPos,
      plotSkip
    );
  
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
        corPID,
        plotSkip
      );
      
       plot(
        graph2Pos[0],
        graph2Pos[1],
        graph2Pos[2],
        graph2Pos[3],
        atuadorPlot,
        PIDTick,
        corAtuador,
        plotSkip
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
        corMan,
        plotSkip
      );
      
       plot(
        graph2Pos[0],
        graph2Pos[1],
        graph2Pos[2],
        graph2Pos[3],
        atuadorPlot,
        PIDTick,
        corAtuador,
        plotSkip
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
      corPert,
      plotSkip
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
      corSP,
      setpointTimeScale
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
        corPert,
        perturbTimeScale
      );
    } 
  }
  }

  function constrainLength(signal, w, timeScale){
    let N = signal.length;
    if (w > 0 && N > w / timeScale) {
      signal.splice(0, Math.round(N-w/ timeScale));
    }
  }