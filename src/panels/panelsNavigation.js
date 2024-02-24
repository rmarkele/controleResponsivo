document.querySelectorAll("#panels-nav ul li").forEach(elt=>{
    elt.addEventListener('click',(e)=>{
        document.querySelectorAll("#panels-nav ul li.active").forEach(activeElt=>{
            activeElt.classList.remove('active');
        })
        document.querySelectorAll(".panels-wrapper.active").forEach(activePanelGroup=>{
            activePanelGroup.classList.remove('active');
        })
        elt.classList.add('active');
        let id = elt.dataset.id;
        document.querySelector(`#panels-group-${id}`).classList.add('active');

        let Fmax, Fmin, Periodo, ton;
        if(id==3){
            
            getDimensions();
           

            mostraSetpointPrev = true;
            mostraPerturbPrev = false;

            Fmax = checkForNaN(variablesList[11].inp.value, 0);
            Fmin = checkForNaN(variablesList[12].inp.value, 0);
    
            Periodo = abs(checkForNaN(variablesList[13].inp.value, 10));
            
            ton = float(variablesList[14].inp.value);
            
            SetpointPreviewPlot = geraSinalOnChange(
                strg.tiposSetpoint.indexOf(selSet.value()),
                Fmax,
                Fmin,
                Periodo,
                ton
            );
    
            
            SetpointxTick = geraXAxisPreview(max(2 * Periodo, 10));

        } else if(id==4){
            getDimensions();

            mostraSetpointPrev = false
            mostraPerturbPrev = true;

            Fmax = checkForNaN(variablesList[7].inp.value, 0);         
            Fmin = checkForNaN(variablesList[8].inp.value, 0);
            
            Periodo = abs(checkForNaN(variablesList[9].inp.value, 10));
            
            ton = float(variablesList[10].inp.value);
    
            PerturbPreviewPlot = geraSinalOnChange(
              strg.tiposPert.indexOf(sel.value()),
              Fmax,
              Fmin,
              Periodo,
              ton
            );
            PerturbyTick = geraYAxisPreview(Fmin, Fmax);
            PerturbxTick = geraXAxisPreview(max(2 * Periodo, 10));
            perturbSlider.range = [Fmin, Fmax];
            perturbSlider.value(constrain(perturbSlider.value(), Fmin, Fmax));
        }
        else{
            mostraSetpointPrev = false;
            mostraPerturbPrev = false;
        }
    })
})

document.querySelectorAll("#mobile-nav ul li").forEach(elt=>{
    elt.addEventListener('click',(e)=>{
        document.querySelectorAll("#mobile-nav ul li.active").forEach(activeElt=>{
            activeElt.classList.remove('active');
        })
        document.querySelectorAll(".main-column.active").forEach(activePanelGroup=>{
            activePanelGroup.classList.remove('active');
        })
        elt.classList.add('active');
        let id = elt.dataset.id;
        document.querySelector(`#${id}`).classList.add('active');

       getDimensions();
  
       if(id=='left'){
        showleftDiv = true;
        showCenterDiv = false;
        showRightDiv = false;
       }
       else if(id=='center'){
        showleftDiv = false;
        showCenterDiv = true;
        showRightDiv = false;
        sigmoid2Fig(kSig, histSig);
       }else if(id=='right'){
        showleftDiv = false;
        showCenterDiv = false;
        showRightDiv = true;
       }
       else{
        showleftDiv = false;
        showCenterDiv = false;
        showRightDiv = true;
       }
    })
})