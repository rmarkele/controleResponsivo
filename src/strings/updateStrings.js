function atualizaStrings() {
  
    tipoControlador.elt.innerHTML = [];
    for (let i = 0; i < strg.titlePainelControlador.length; i++) {
      tipoControlador.option(strg.titlePainelControlador[i]);
    }
    tipoControlador.selected(strg.titlePainelControlador[indOf._tipoControlador]);
  
    tipoAtuador.elt.innerHTML = [];
    for (let i = 0; i < strg.titlePainelMotor.length; i++) {
      tipoAtuador.option(strg.titlePainelMotor[i]);
    }
    tipoAtuador.selected(strg.titlePainelMotor[indOf._tipoAtuador]);
  
    sel.elt.innerHTML = [];
    for (let i = 0; i < strg.tiposPert.length; i++) {
      sel.option(strg.tiposPert[i]);
    }
    sel.selected(strg.tiposPert[indOf._tipoPert]);
  
    selSet.elt.innerHTML = [];
    for (let i = 0; i < strg.tiposSetpoint.length; i++) {
      selSet.option(strg.tiposSetpoint[i]);
    }
    selSet.selected(strg.tiposSetpoint[indOf._tipoSet]);
    cenarioLabel(strings[languageIndex].idioma);
    
  
    for (let i = 0; i < strg.labelCenario.length; i++) {
      selPar.querySelectorAll("option").forEach((option, index)=>{
        option.text =strg.labelCenario[index];
      })
      
    }

    //Menu mobile

    document.querySelectorAll("#mobile-nav ul li").forEach((item, index)=>{
      item.innerHTML = strg.menu_mobile[index];
    })
    document.querySelectorAll("#panels-nav ul li").forEach((item, index)=>{
      item.innerHTML = strg.menu_paineis[index];
    })
  
    //Titulos Painéis
    document.querySelector(`#forces-multiplier h4`).innerHTML = strg.varPainelForcasAtuantes[0]+':';
    let mults=[0, 1, 10, 100];
    mults.forEach((mult,i) =>{
      let opt=document.querySelector(`label[for=x${mult}]`);
      opt.innerHTML=strg.varPainelForcasAtuantes[1][i];
    })
  
    document.querySelector(`label[for=SystemView]`).innerHTML = strg.SystemView;

    forces.title.innerHTML = strg.xlabelSaidaMotor;
    
    
    document.querySelector(`#panel-process-variables h4`).innerHTML = strg.tituloPainelVarCont;
    processVariables[0][0].innerHTML =  strg.varPainelVarCont[0] ;
    processVariables[1][0].innerHTML =  strg.varPainelVarCont[1] ;
    processVariables[2][0].innerHTML =  strg.varPainelVarCont[2] ;
    updatePanelTitle("process", strg.tituloPainelProcesso);
    updatePanelTitle("envelope", strg.titlePainelenvelope);
    updatePanelTitle("indicator", strg.titleIndPos);
  
  
    // processo
      //m
      updateVariableListText(strg.massa,0)
      //Ks
      updateVariableListText(strg.mola,1)
      //Ca
      updateVariableListText(strg.amortecedor,2)
    
    //Controlador
      //Kp
      updateVariableListText(strg.varPainelControlador[0],3);

      //Ki
      updateVariableListText(strg.varPainelControlador[1],4);

      //Kd
      updateVariableListText(strg.varPainelControlador[2],5);

      //OP0
      updateVariableListText(strg.varPainelControlador[3],15)
      
      //Ti
      updateInputText(strg.varPainelControlador[4], TiInp);
      
      //Td
      updateInputText(strg.varPainelControlador[5], TdInp);

       //OPmax
      updateVariableListText(strg.varPainelControlador[12],20);
    
      //OPmin
      updateVariableListText(strg.varPainelControlador[13],21);
      
      //Banda Morta
      updateVariableListText(strg.varPainelControlador[14],22);
      
      //SPH
      updateInputText(strg.varPainelControlador[16], txtSPH);
      
      //SPL
      updateInputText(strg.varPainelControlador[15], txtSPL);

      //Freq Corte
      updateVariableListText(strg.varPainelControlador[9],23);
    
      //Imax
      updateVariableListText(strg.varPainelControlador[6],24);
      //eLim
      updateVariableListText(strg.varPainelControlador[10],25);
      
      //DLim
      updateVariableListText(strg.varPainelControlador[11],26);

    
    //Atuador
      //Fcmax
      updateVariableListText(strg.varPainelMotor[0],6);
    
      
      //kSig
      updateVariableListText(strg.varPainelMotor[1],18);
      
      //hisSig
      updateVariableListText(strg.varPainelMotor[2],19);
      
      //aTransp
      updateVariableListText(strg.varPainelMotor[4],27);
    
    //Pertutbação
      //Fpmax
      updateVariableListText(strg.varPainelPert[0],7);
      //Fpmin
      updateVariableListText(strg.varPainelPert[1],8);
      //Perturbacao período
      updateVariableListText(strg.varPainelPert[2],9);
      //Perturbação t_on
      updateVariableListText(strg.varPainelPert[3],10);
  
    //Setpoint
      //xSPmax
      updateVariableListText(strg.varPainelSetpoint[0],11);
      //xSPmin
      updateVariableListText(strg.varPainelSetpoint[1],12);
      //Setpoint período
      updateVariableListText(strg.varPainelSetpoint[2],13);
      //Setpoint t_on
      updateVariableListText(strg.varPainelSetpoint[3],14);
    
    
    //Indicador de Posição
      //xsatMax
      updateVariableListText(strg.varPainelIndPos[0],16)
      
      //xsatMin
      updateVariableListText(strg.varPainelIndPos[1],17)
      
      //deltaInd
      updateVariableListText(strg.varPainelIndPos[2],28)
  
    
    //Envelope   
      //Envelope max
      updateVariableListText(strg.varPainelEnvelope[0],29)
      
    
      //Envelope min
      updateVariableListText(strg.varPainelEnvelope[1],30)
    
  
    noControlCheckBox.elt.getElementsByTagName("label")[0].innerHTML =
      " " + strg.varPainelControlador[17];
    pidControlCheckBox.elt.getElementsByTagName("label")[0].innerHTML =
      " " + strg.varPainelControlador[18];
    manualControlCheckBox.elt.getElementsByTagName("label")[0].innerHTML =
      " " + strg.varPainelControlador[19];
    acaoDireta.elt.getElementsByTagName("label")[0].innerHTML =
      " " + strg.varPainelControlador[20];
  
    acaoDiretaMotor.elt.getElementsByTagName("label")[0].innerHTML =
      " " + strg.varPainelMotor[3];
  
    eliminaSurtoCheckBox.elt.getElementsByTagName("label")[0].innerHTML =
      " " + strg.varPainelControlador[7];
    filtroPBCheckBox.elt.getElementsByTagName("label")[0].innerHTML =
      " " + strg.varPainelControlador[8];
  
    BPCheck.elt.getElementsByTagName("label")[0].innerHTML =
      " " + strg.configRegua[1];
    BMCheck.elt.getElementsByTagName("label")[0].innerHTML =
      " " + strg.configRegua[2];
    IndPosCheck.elt.getElementsByTagName("label")[0].innerHTML =
      " " + strg.configRegua[3];
    LinhaSPCheck.elt.getElementsByTagName("label")[0].innerHTML =
      " " + strg.configRegua[4];
    LinhaPosReal.elt.getElementsByTagName("label")[0].innerHTML =
      " " + strg.configRegua[5];
    LinhaEnvelope.elt.getElementsByTagName("label")[0].innerHTML =
      " " + strg.configRegua[7];
  
  
    document.querySelector("#light-EV p").innerHTML = strg.configRegua[8];
  
    tipoPert.elt.innerHTML = strg.titlePert;

    atualizaTiTd();
    aplicaPerturb.html(strg.buttonPainelPert[indOf._statusPert]);
  
    tipoSetpoint.elt.innerHTML = strg.titleSetpoint;
    aplicaSetpoint.html(strg.buttonPainelSetpoint[indOf._statusSetpoint]);
  
    
  
    // drpDwn.title = strg.configRegua[0];
    // drpDwn.btn.html(" " + strg.configRegua[0] + String.fromCharCode(0x25bc));
  
    logoTxt0.innerHTML =
      strg.tituloSimulador[0] + "<br>" + strg.tituloSimulador[1];
    logoTxt1.innerHTML =
      strg.comentarioSimulador[0] + "<br>" + strg.comentarioSimulador[1];
  
    help.innerHTML = strg.btnSaibaMais;
    
    // resetButton.html(strg.btnResetar);
    // pauseButton.html(strg.btnPausarIniciar[indOf._statusSim]);
  }


  function getIndexes() {
    // indOf._atuadorPID = strg.tituloPainelOpFc.indexOf(atuadorPID.value());
    indOf._tipoControlador = strg.titlePainelControlador.indexOf(
      tipoControlador.value()
    );
    indOf._tipoAtuador = strg.titlePainelMotor.indexOf(tipoAtuador.value());
    indOf._tipoPert = strg.tiposPert.indexOf(sel.value());
    indOf._tipoSet = strg.tiposSetpoint.indexOf(selSet.value());
  
    indOf._statusPert = strg.buttonPainelPert.indexOf(aplicaPerturb.html());
    indOf._statusSetpoint = strg.buttonPainelSetpoint.indexOf(
      aplicaSetpoint.html()
    );
    
    // indOf._statusSim = strg.btnPausarIniciar.indexOf(pauseButton.html());
    indOf._cenario = strg.labelCenario.indexOf(selPar.value);
  }