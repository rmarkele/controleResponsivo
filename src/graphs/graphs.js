
function plotaGraficos() {
  
  
  xPlot.push(constrain(x[1]+deltaInd, xSatMin, xSatMax));
  erroPlot.push(erro);
  
  setPointPlot.push(setPoint.value());
  setPointAltoPlot.push(biestavel.setpointAlto);
  setPointBaixoPlot.push(biestavel.setpointBaixo);
  
  PIDPlot.push(PID);
  manualPlot.push(manualControl.value());
  atuadorPlot.push(forcaAtuador[2]);
  
  PerturbPlot.push(Perturb[2] / PIDSat * 100);
  
  

  constrainLength(xPlot, graph1Pos[2], plotSkip);
  constrainLength(setPointPlot, graph1Pos[2], plotSkip);
  constrainLength(setPointAltoPlot, graph1Pos[2], plotSkip);
  constrainLength(setPointBaixoPlot, graph1Pos[2], plotSkip);
  
  constrainLength(PIDPlot, graph2Pos[2], plotSkip);
  constrainLength(manualPlot, graph2Pos[2], plotSkip);
  constrainLength(atuadorPlot, graph2Pos[2], plotSkip);
  
  constrainLength(PerturbPlot, graph3Pos[2], plotSkip);
  if((showCenterDiv && width<850 && showPvGraph)){
    const graph1offset = 5;
    const graph1h = 20;
    createAxis({
      posx: graph1Pos[0],
      posy: graph1Pos[1] - graph1offset,
      w: graph1Pos[2],
      h: graph1Pos[3] + graph1h,
      xtick: [],
      tick1: yTick,
      title: "",
      ylabel1: strg.xlabel1E,
      color1: corPos,
      xlabel: " ",
      tick2: yTick,
      ylabel2: strg.xlabel1D,
      color2: corSP
    });
  
    if(controlador < 3 && pidControlCheckBox.checked()){
      plot({
        posx: graph1Pos[0],
        posy: graph1Pos[1] - graph1offset,
        w: graph1Pos[2],
        h: graph1Pos[3] + graph1h,
        s1: setPointPlot,
        tick1: yTick,
        color: corSP,
        timeScale: plotSkip
      });    
    }
    else if(controlador == 3 && pidControlCheckBox.checked()){
      plot({
        posx: graph1Pos[0],
        posy: graph1Pos[1] - graph1offset,
        w: graph1Pos[2],
        h: graph1Pos[3] + graph1h,
        s1: setPointAltoPlot,
        tick1: yTick,
        color: corSP,
        timeScale: plotSkip
      }); 
      
      plot({
        posx: graph1Pos[0],
        posy: graph1Pos[1] - graph1offset,
        w: graph1Pos[2],
        h: graph1Pos[3] + graph1h,
        s1: setPointBaixoPlot,
        tick1: yTick,
        color: corSP,
        timeScale: plotSkip
      }); 
    }

    plot({
      posx: graph1Pos[0],
      posy: graph1Pos[1] - graph1offset,
      w: graph1Pos[2],
      h: graph1Pos[3] + graph1h,
      s1: xPlot, 
      tick1: yTick, 
      color: corPos,
      timeScale: plotSkip
    });
  }
  if(showleftDiv){
    createAxis({
      posx: graph1Pos[0],
      posy: graph1Pos[1],
      w: graph1Pos[2],
      h: graph1Pos[3],
      xtick: [],
      tick1: yTick,
      title: strg.titulo1,
      ylabel1: strg.xlabel1E,
      color1: corPos,
      xlabel: " ",
      tick2: yTick,
      ylabel2: strg.xlabel1D,
      color2: corSP
    });
  
    if(controlador < 3 && pidControlCheckBox.checked()){
      plot({
        posx: graph1Pos[0],
        posy: graph1Pos[1],
        w: graph1Pos[2],
        h: graph1Pos[3],
        s1: setPointPlot,
        tick1: yTick,
        color: corSP,
        timeScale: plotSkip
      });    
    }
    else if(controlador == 3 && pidControlCheckBox.checked()){
      plot({
        posx: graph1Pos[0],
        posy: graph1Pos[1],
        w: graph1Pos[2],
        h: graph1Pos[3],
        s1: setPointAltoPlot,
        tick1: yTick,
        color: corSP,
        timeScale: plotSkip
      }); 
      
      plot({
        posx: graph1Pos[0],
        posy: graph1Pos[1],
        w: graph1Pos[2],
        h: graph1Pos[3],
        s1: setPointBaixoPlot,
        tick1: yTick,
        color: corSP,
        timeScale: plotSkip
      }); 
    }

    plot({
      posx: graph1Pos[0],
      posy: graph1Pos[1],
      w: graph1Pos[2],
      h: graph1Pos[3],
      s1: xPlot, 
      tick1: yTick, 
      color: corPos,
      timeScale: plotSkip
    });
    if (pidControlCheckBox.checked()) {
      createAxis({
        posx: graph2Pos[0],
        posy: graph2Pos[1],
        w: graph2Pos[2],
        h: graph2Pos[3],
        xtick: [],
        tick1: PIDTick,
        title: strg.titulo2,
        ylabel1: strg.xlabel2E,
        color1: corAtuador,
        xlabel: " ",
        tick2: PIDTick,
        ylabel2: strg.xlabel2D,
        color2: corPID
      });
     
      plot({
        posx: graph2Pos[0],
        posy: graph2Pos[1],
        w: graph2Pos[2],
        h: graph2Pos[3],
        s1: PIDPlot,
        tick1: PIDTick,
        color: corPID,
        timeScale: plotSkip
      });
      
       plot({
        posx: graph2Pos[0],
        posy: graph2Pos[1],
        w: graph2Pos[2],
        h: graph2Pos[3],
        s1: atuadorPlot,
        tick1: PIDTick,
        color: corAtuador,
        timeScale: plotSkip
       });
      
    } else {
      createAxis({
        posx: graph2Pos[0],
        posy: graph2Pos[1],
        w: graph2Pos[2],
        h: graph2Pos[3],
        xtick: [],
        tick1: PIDTick,
        title: strg.titulo2,
        ylabel1: strg.xlabel2E,
        color1: corAtuador,
        xlabel: " ",
        tick2: PIDTick,
        ylabel2: strg.xlabel2D,
        color2: corMan
      });
     
      plot({
        posx: graph2Pos[0],
        posy: graph2Pos[1],
        w: graph2Pos[2],
        h: graph2Pos[3],
        s1: manualPlot,
        tick1: PIDTick,
        color: corMan,
        timeScale: plotSkip
      });
      
       plot({
        posx: graph2Pos[0],
        posy: graph2Pos[1],
        w: graph2Pos[2],
        h: graph2Pos[3],
        s1: atuadorPlot,
        tick1: PIDTick,
        color: corAtuador,
        timeScale: plotSkip
       });
    }
  
    createAxis({
      posx: graph3Pos[0],
      posy: graph3Pos[1],
      w: graph3Pos[2],
      h: graph3Pos[3],
      xtick: [],
      tick1: PerturbyTickPlot,
      title: strg.titulo3,
      ylabel1: strg.xlabel3E,
      color1: corPert,
      xlabel: " "
    });
    plot({
      posx: graph3Pos[0],
      posy: graph3Pos[1],
      w: graph3Pos[2],
      h: graph3Pos[3],
      s1: PerturbPlot,
      tick1: PerturbyTickPlot,
      color: corPert,
      timeScale: plotSkip
    });
  }
      
    
  if(showRightDiv){

    if(mostraSetpointPrev && strg.tiposSetpoint.indexOf(selSet.value()) != 0){
      createAxis({
        posx: setPointGraphPos[0],
        posy: setPointGraphPos[1],
        w: setPointGraphPos[2],
        h: setPointGraphPos[3],
        xtick: SetpointxTick,
        tick1: SetpointyTick,
        title: strg.tituloSetpoint,
        ylabel1: strg.ylabelSetpoint,
        color1: corSP,
        xlabel: strg.xlabelSetpoint
      });
      plot({
        posx: setPointGraphPos[0],
        posy: setPointGraphPos[1],
        w: setPointGraphPos[2],
        h: setPointGraphPos[3],
        s1: SetpointPreviewPlot,
        tick1: SetpointyTick,
        color: corSP,
        timeScale: setpointTimeScale,
        value: setPointMode!=0?[
          map(
            (setPointCount * Ts) % (2 * setPointPeriodo), 
            0, 
            2 * setPointPeriodo,
            0,
            SetpointPreviewPlot.length - 1
          ), 
          setPoint.value()]:[]
      });
    }
    
    if(strg.tiposPert.indexOf(sel.value()) != 7 && mostraPerturbPrev){
      createAxis({
        posx: perturbGraphPos[0],
        posy: perturbGraphPos[1],
        w: perturbGraphPos[2],
        h: perturbGraphPos[3],
        xtick: PerturbxTick,
        tick1: PerturbyTick,
        title: strg.tituloPert,
        ylabel1: strg.ylabelPert,
        color1: corPert,
        xlabel: strg.xlabelPert
      });
      plot({
        posx: perturbGraphPos[0],
        posy: perturbGraphPos[1],
        w: perturbGraphPos[2],
        h: perturbGraphPos[3],
        s1: PerturbPreviewPlot,
        tick1: PerturbyTick,
        color: corPert,
        timeScale: perturbTimeScale,
        value: perturbMode!=0?[
          map(
            (count * Ts) % (2 * perturbPeriodo), 
            0, 
            2 * perturbPeriodo, 
            0,        
            PerturbPreviewPlot.length - 1
          ),Perturb[2] / PIDSat * 100
          ]:[]
      });

    } 
  }
  }

  function constrainLength(signal, w, timeScale){
    let N = signal.length;
    if (w > 0 && N > w / timeScale) {
      signal.splice(0, Math.round(N-w/ timeScale));
    }
  }