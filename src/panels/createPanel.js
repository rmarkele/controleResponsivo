function createPanel({ panelGroup, panelId, listOfVar }){

    let inputs = '';
    for(let i = 0; i < listOfVar.length; i++){
        
        inputs += `<div class="input-flex-col">`
        for(let j = 0; j < listOfVar[i].length; j++){
            let {inputName, disabled} = listOfVar[i][j];
            inputs += 
            `<div class="input-wrapper">
                <label for="input-${inputName}" ${disabled?'class="disabled"':''}></label>
                <input type="text" id="input-${inputName}" ${disabled?'disabled':''}
                >
            </div>
            `
        }
        inputs += `</div>`;
        
    }

    
    let panel = document.createElement('div');
    panel.innerHTML = 
        `<div class="panel-title" id="${panelId}-panel-title"> </div>
        <div class="panel-body"> ${inputs} </div>
        <div class="panelCheckBoxes" id="${panelId}CheckBoxes"> </div>`;

    panel.setAttribute("id",panelId+"-panel");
    panel.classList.add("panel")

    document.querySelector(`#panels-group-${panelGroup}`).appendChild(panel);

    for(let i = 0; i < listOfVar.length; i++){
        for(let j = 0; j < listOfVar[i].length; j++){
            let {inputId, inputName} = listOfVar[i][j];
            variablesList[inputId] = setVariableList(inputName,inputId);
        }
    }

    return panel;
   
}