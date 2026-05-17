//Seletor de cenários
let selPar = document.querySelector("#cenarios-select");

cenarioLabel(strings[languageIndex].idioma);

for (let i = 0; i < cenarios.length; i++) {
    let option = document.createElement("option");
    option.text = strg.labelCenario[i];
    option.value = i;
    selPar.add(option);
//   selPar.option(strg.labelCenario[i],i);
}

selPar.value = 0;
selPar.addEventListener('change',() => {
  reset();
});

function cenarioLabel(idioma) {
switch (idioma) {
    case "PT-BR":
    strg.labelCenario = [];
    for (let i = 0; i < cenarios.length; i++) {
        strg.labelCenario[i] = checkForUndefinedString(
        cenarios[i].label_ptBR,
        "Cenário " + i + " (definir label)"
        );
    }
    break;
    case "EN-US":
    strg.labelCenario = [];
    for (let i = 0; i < cenarios.length; i++) {
        strg.labelCenario[i] = checkForUndefinedString(
        cenarios[i].label_enUS,
        "Preset " + i + " (define label)"
        );
    }
    break;
    default:
    cenarioLabel("PT-BR");
    break;
}
}

