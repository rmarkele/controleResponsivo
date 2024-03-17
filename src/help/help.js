const logoContainer = document.querySelector("#logo-container");
const logoTxt0 = document.querySelector("#logoTxt0");
const logoTxt1 = document.querySelector("#logoTxt1");
const divAjuda = document.getElementsByClassName("ajuda");
const help = document.querySelector("#help-button");
// const closeHelp = document.querySelector("#close-help-button");


// window.addEventListener("load",()=>{   
//     closeHelp.addEventListener("click",() => {
//     divAjuda[0].style.display = "none";
//     });
// })

function idiomaAjuda() {
    switch (strings[languageIndex].idioma) {
        case "PT-BR":
        help.href = "src/help/html/PT-BR.html";
        break;
        case "EN-US":
        help.href = "src/help/html/EN-US.html";
        break;
        
    }
}


