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

function updateVariableListOrder(value,id){
    variablesList[id].inp.parentNode.style.order = value;
}

function disableVariableList(id){
    variablesList[id].inp.parentNode.style.order = 99;
    variablesList[id].inp.disabled = true;
    variablesList[id].txt.classList.add("disabled");
}

function enableVariableList(id){
    variablesList[id].inp.parentNode.style.order = 1;
    variablesList[id].inp.disabled = false;
    variablesList[id].txt.classList.remove("disabled");
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