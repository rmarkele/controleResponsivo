let logoTxt0 = document.querySelector("#logoTxt0");
let logoTxt1 = document.querySelector("#logoTxt1");
let divAjuda = document.getElementsByClassName("ajuda");
let help = document.querySelector("#help-button");
let closeHelp = document.querySelector("#close-help-button");
window.addEventListener("load",()=>{   
    help.addEventListener("click",() => {
        if (divAjuda[0].style.display === "block") {
            divAjuda[0].style.display = "none";
        } else {
            divAjuda[0].style.display = "block";
            idiomaAjuda();
        }
    });
    
    closeHelp.addEventListener("click",() => {
    divAjuda[0].style.display = "none";
    });
})

function idiomaAjuda() {
    let iFrame = document.querySelector("#ajudaDiv #main-iframe");
    switch (strings[languageIndex].idioma) {
        case "PT-BR":
        iFrame.src = "src/help/html/PT-BR.html";
        break;
        case "EN-US":
        iFrame.src = "src/help/html/EN-US.html";
        break;
        
    }
}

