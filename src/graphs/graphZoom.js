let zoomInBtn = document.querySelector("#plot-zoom .plot-zoom-in");
let zoomOutBtn = document.querySelector("#plot-zoom .plot-zoom-out");

zoomInBtn.addEventListener('click',(e)=>{
    zoomOutBtn.disabled=false;
    plotSkip -= 0.2;
    if(plotSkip <= 0.2){
        plotSkip = 0.2;
        zoomInBtn.disabled = true;
    }
});

zoomOutBtn.addEventListener('click',(e)=>{
    zoomInBtn.disabled=false;
    plotSkip += 0.2;
    if(plotSkip >= 2){
        plotSkip = 2;
        zoomOutBtn.disabled = true;
    }
});