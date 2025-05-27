
// screen.orientation.addEventListener("change", (event) => {
//     // let minWdth;
//     // if(width&&width<500){
//     //     minWdth = 1100;
//     // } else{
//     //     minWdth = 300;
//     // }

//     // getDimensions();
//     // let h = window.innerWidth;
//     // let w = window.innerHeight;
//     // h = max(h, minWdth);
//     // resizeCanvas(w,h);
//     location.reload();
//     // document.documentElement.style.setProperty('--min-canvas-height', `${minWdth}px`);
// });

// Função para verificar a orientação e mostrar aviso
  function checkOrientation() {
    const warningElement = document.getElementById("orientation-warning");
    const isLandscape = window.matchMedia("(orientation: landscape)").matches;
    
    if (isLandscape) {
      warningElement.classList.add('active');
    } else {
        warningElement.classList.remove('active');
        // Reload if the page was initially loaded in landscape
        if (window.sessionStorage.getItem("initialLoadInLandscape") === "true") {
            window.sessionStorage.removeItem("initialLoadInLandscape");
            window.location.reload(); // Fixes layout issues
        }
    }

    return isLandscape;
  }

  // Verificar ao carregar a página
  window.addEventListener("DOMContentLoaded", () => {
    const isInitialLoadLandscape = window.matchMedia("(orientation: landscape)").matches;
    if (isInitialLoadLandscape) {
        window.sessionStorage.setItem("initialLoadInLandscape", "true");
    }
    checkOrientation();
});

  // Verificar sempre que a orientação mudar
  window.addEventListener("resize", ()=>{
    let isLandscape = checkOrientation();
    if (isLandscape) {
        noLoop();
    } else {
        loop();
    }
  }); // resize captura mudanças de orientação
