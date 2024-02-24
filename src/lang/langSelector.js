//Seletor de idiomas

// idiomaBR = document.querySelector(".lang-menu .br");
// idiomaUS = document.querySelector(".lang-menu .us");
let listaIdioma = document.querySelector(".lang-menu ul");
let langMenu = document.querySelector(".lang-menu");

styleElem = document.head.appendChild(document.createElement("style"));

let idiomaSelected = document.querySelector(".lang-menu .selected-lang");
let idiomaSelectedSpan = document.querySelector(".lang-menu .selected-lang span");
let idiomaSelectedImg = document.querySelector(".lang-menu .selected-lang img");

idiomaSelected.addEventListener("click", () => {
    listaIdioma.style.display = "block";
});

langMenu.addEventListener("mouseover", () => {
    listaIdioma.style.display = "block";
});
langMenu.addEventListener("mouseout", () => {
    listaIdioma.style.display = "none";
});


document.querySelectorAll(".lang-menu ul li").forEach(langItem=>{
    langItem.addEventListener("click",(e)=>{
        languageIndex =  langItem.dataset.index;
        let lang = langItem.dataset.lang;
        let langText = langItem.querySelector("span").innerHTML;
        idiomaSelectedSpan.innerHTML = langText;
        idiomaSelectedImg.src = langItem.querySelector("img").src;
        listaIdioma.style.display = "none"
        idiomaAjuda();
        getIndexes();
        idiomaSelect();
        atualizaStrings();
        updateComponentes();

    })
}

)


