function setVariableList(varName, id){
    let inp = document.querySelector(`#input-${varName}`);
    inp.addEventListener('change',()=>{
        atualizaParametros(id);
    });
    let txt = document.querySelector(`label[for = input-${varName}]`);       
    return {inp, txt, id}
}

function updateVariableListValue(value,id){
    variablesList[id].inp.value = value;
}
function updateVariableListText(txt,id){
    variablesList[id].txt.innerHTML = txt;
}

function updatePanelTitle(id, txt){
    let elt =  document.querySelector(`#${id}-panel-title`);
    elt.innerHTML = txt;
}

function updateInputValue(value,inp){
    inp.inp.value = value;
}
function updateInputText(txt,inp){
    inp.txt.innerHTML = txt;
}

function showVariableList(id){
    variablesList[id].inp.parentNode.style.display = "flex";
}

function showInput(elt){
    elt.inp.parentNode.style.display = "flex";
}

function hideVariableList(id){
    variablesList[id].inp.parentNode.style.display = "none";
}

function hideInput(elt){
    elt.inp.parentNode.style.display = "none";
}