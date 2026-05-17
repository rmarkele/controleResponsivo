
function geraPainelControlador() {

  createPanel({
    panelGroup: 2,
    panelId: 'controller',
    listOfVar: [
      [
        { inputId: 3, inputName: 'Kp', disabled: false },
        { inputId: 15, inputName: 'OP0' }
      ],
      [
        { inputId: 4, inputName: 'Ki', disabled: isaMode === 1 },
        { inputId: 104, inputName: 'Ti', disabled: isaMode === 0 }
      ],
      [
        { inputId: 5, inputName: 'Kd', disabled: isaMode === 1 },
        { inputId: 105, inputName: 'Td', disabled: isaMode === 0 }
      ],
      [
        { inputId: 24, inputName: 'Imax' },
        { inputId: 25, inputName: 'eLim' },
        { inputId: 26, inputName: 'DLim' },
      ],
      [
        { inputId: 20, inputName: 'BiestavelMax' },
        { inputId: 21, inputName: 'BiestavelMin' },
      ],
      [
        { inputId: 120, inputName: 'SPA', disabled: true },
        { inputId: 121, inputName: 'SPB', disabled: true },
      ],
      [
        { inputId: 22, inputName: 'BandaMorta' }
      ],
    ]
  })

  const controllerPanel = document.querySelector("#controller-panel .panel-body");
  const controllerEquantion = document.createElement("div");
  controllerEquantion.classList.add("controller-equation");
  controllerPanel.prepend(controllerEquantion);



  TiInp = variablesList[104];
  TdInp = variablesList[105];

  acaoDireta = createCheckbox(" " + strg.varPainelControlador[20], false);
  acaoDireta.parent("controllerCheckBoxes");
  acaoDireta.class("BigCheck");
  // acaoDireta.addClass("BigCheck");
  // acaoDireta.position(xPosNocontrol + 270, yPosNocontrol);
  acaoDireta.changed(() => {
    modoAcao = !modoAcao;
  });

  if (modoAcao) {
    acaoDireta.checked(true);
  }

  let freqCorteDiv = document.createElement('div');
  freqCorteDiv.innerHTML =
    `<div class="input-wrapper">
        <label for="input-freqCorte">freq corte</label>
        <input type="text" id="input-freqCorte">
      </div>`;
  freqCorteDiv.classList.add("input-flex-row");


  isaModeCheckBox = createCheckbox("" + strg.varPainelControlador[21], false);
  isaModeCheckBox.parent("controllerCheckBoxes");
  isaModeCheckBox.class("BigCheck");
  // isaModeCheckBox.addClass("BigCheck");
  // isaModeCheckBox.position(xPosNocontrol + 270, yPosNocontrol);
  isaModeCheckBox.changed(() => {
    isaMode = !isaMode;
    if (isaMode) {
      disableVariableList(4);
      disableVariableList(5);
      enableVariableList(104);
      enableVariableList(105);
      controllerEquantion.innerHTML = `
     OP(t) = Kp [e(t) + 1/Ti &middot; <span>&int; </span>e(t)dt + Td &middot; ė(t)] + OPo
  `;


    } else {
      enableVariableList(4);
      enableVariableList(5);
      disableVariableList(104);
      disableVariableList(105);
      controllerEquantion.innerHTML = `
    OP(t) = Kp &middot;e(t) + Ki &middot; <span>&int; </span>e(t)dt + Kd &middot; ė(t) + OPo
  `;

    }

    variablesList[104].inp.style.marginBottom = '-7px';
    variablesList[104].inp.style.marginTop = '-7px';

    if (Ti == "\u221E" && !isaMode) {
      variablesList[104].inp.style.fontSize = '24px';
    } else{
      variablesList[104].inp.style.fontSize = '14px';
    }

  });

  if (isaMode) {
    isaModeCheckBox.checked(true);
    controllerEquantion.innerHTML = `
   OP(t) = Kp [e(t) + 1/Ti &middot; <span>&int; </span>e(t)dt + Td &middot; ė(t)] + OPo
  `;
  } else {
    controllerEquantion.innerHTML = `
    OP(t) = Kp &middot;e(t) + Ki &middot; <span>&int; </span>e(t)dt + Kd &middot; ė(t) + OPo
  `;
  }

  document.querySelector("#controllerCheckBoxes").appendChild(freqCorteDiv);






  variablesList[23] = setVariableList("freqCorte", 23);

  txtSPH = variablesList[120];
  txtSPL = variablesList[121];

  let parent = document.querySelector('#controllerCheckBoxes')
  child = document.querySelector("#controllerCheckBoxes .input-flex-row")

  // insere checkBox para elimina surto derivativo
  eliminaSurtoCheckBox = createCheckbox(
    strg.varPainelControlador[7],
    eliminaSurto === 1
  );
  parent.insertBefore(eliminaSurtoCheckBox.elt, child);
  eliminaSurtoCheckBox.class("BigCheck");



  parent = document.querySelector('#controllerCheckBoxes .input-flex-row ')
  child = document.querySelector("#controllerCheckBoxes .input-flex-row .input-wrapper")
  // insere checkBox para filtro passa baixa
  filtroPBCheckBox = createCheckbox(strg.varPainelControlador[8], false);

  parent.insertBefore(filtroPBCheckBox.elt, child);
  filtroPBCheckBox.class("BigCheck");

  filtroPBCheckBox.changed(filtroPBCheckBoxChanged);
  filtroPBCheckBoxChanged();



  tipoControlador = createSelect();
  tipoControlador.parent("controller-panel-title");
  for (let i = 0; i < strg.titlePainelControlador.length; i++) {
    tipoControlador.option(strg.titlePainelControlador[i]);
  }
  tipoControlador.selected(strg.titlePainelControlador[controlador]);
  tipoControlador.changed(controladorChanged);
  controladorChanged();


  noControlCheckBox = createCheckbox(
    " " + strg.varPainelControlador[17],
    false
  );





}


function atualizaTiTd() {
  if (K_I != 0 && K_P != 0) {
    Ti = formatToExponential(K_P / K_I, 0, 2)
    variablesList[104].inp.style.fontSize = '14px';
  } else if (K_I == 0) {
    Ti = "\u221E";
    // Ti = "∞";
    variablesList[104].inp.style.fontSize = '24px';
  } else {
    Ti = "-";
    variablesList[104].inp.style.fontSize = '14px';
  }

  if (K_P != 0 && K_D != 0) {
    Td = formatToExponential(K_D / K_P, 0, 2);
  } else if (K_D == 0) {
    Td = "0";
  } else {
    Td = "-";
  }
}

function atualizaKiKd() {
  if (Ti != 0 && Ti != "-" && Ti != "\u221E" && K_P != 0) {
    K_I = (K_P / Ti).toFixed(4);
  } else if (Ti == "\u221E") {
    K_I = (0).toFixed(4);
  } else if (Ti == 0) {
    Ti = formatToExponential(0.00000000001, 0, 2);
    K_I = formatToExponential(K_P / Ti, 0, 2);
  }

  if (K_P != 0 && Td != "-") {
    K_D = (K_P * Td).toFixed(4);
  } else {
    K_D = "-";
  }
}

function controladorChanged() {
  let item = tipoControlador.value();
  switch (item) {
    case strg.titlePainelControlador[0]:
      //Variáveis PID
      controlador = 0;
      showVariableList(3);
      showVariableList(4);
      showVariableList(5);
      showVariableList(15);
      showVariableList(23);
      showVariableList(24);

      showInput(TiInp);
      showInput(TdInp);

      filtroPBCheckBox.elt.style.display = 'flex';
      eliminaSurtoCheckBox.elt.style.display = 'flex';
      isaModeCheckBox.elt.style.display = 'flex';

      //Variáveis Biestável
      hideVariableList(20);
      hideVariableList(21);
      hideVariableList(22);
      hideVariableList(25);
      hideVariableList(26);
      hideInput(txtSPH);
      hideInput(txtSPL);

      BPCheck.show();
      BMCheck.hide();
      break;
    case strg.titlePainelControlador[1]:
      //Variáveis PID
      controlador = 1;
      showVariableList(3);
      showVariableList(4);
      showVariableList(5);
      showVariableList(15);
      showVariableList(23);
      showVariableList(24);
      showVariableList(25);

      showInput(TiInp);
      showInput(TdInp);

      filtroPBCheckBox.elt.style.display = 'flex';
      eliminaSurtoCheckBox.elt.style.display = 'flex';
      isaModeCheckBox.elt.style.display = 'flex';

      //Variáveis Biestável
      hideVariableList(20);
      hideVariableList(21);
      hideVariableList(22);
      hideVariableList(26);
      hideInput(txtSPH);
      hideInput(txtSPL);

      BPCheck.show();
      BMCheck.hide();
      break;
    case strg.titlePainelControlador[2]:
      //Variáveis PID
      controlador = 2;
      showVariableList(3);
      showVariableList(4);
      showVariableList(5);
      showVariableList(15);
      showVariableList(23);
      showVariableList(24);
      showVariableList(26);

      showInput(TiInp);
      showInput(TdInp);

      filtroPBCheckBox.elt.style.display = 'flex';
      eliminaSurtoCheckBox.elt.style.display = 'flex';
      isaModeCheckBox.elt.style.display = 'flex';

      //Variáveis Biestável
      hideVariableList(20);
      hideVariableList(21);
      hideVariableList(22);
      hideVariableList(25);
      hideInput(txtSPH);
      hideInput(txtSPL);

      BPCheck.show();
      BMCheck.hide();
      break;
    case strg.titlePainelControlador[3]:
      //Variáveis PID
      controlador = 3;
      hideVariableList(3);
      hideVariableList(4);
      hideVariableList(5);
      hideVariableList(15);
      hideVariableList(23);
      hideVariableList(24);
      hideVariableList(25);
      hideVariableList(26);

      hideInput(TiInp);
      hideInput(TdInp);

      filtroPBCheckBox.elt.style.display = 'none';
      eliminaSurtoCheckBox.elt.style.display = 'none';
      isaModeCheckBox.elt.style.display = 'none';

      //Variáveis Biestável
      showVariableList(20);
      showVariableList(21);
      showVariableList(22);
      showInput(txtSPH);
      showInput(txtSPL);

      BPCheck.hide();
      BMCheck.show();

      break;
    default:
      break;
  }
}

function filtroPBCheckBoxChanged() {
  if (filtroPBCheckBox.checked()) {
    variablesList[23].inp.disabled = false;
    variablesList[23].txt.classList.remove('disabled');
  } else {
    // hideVariableList(23);
    variablesList[23].inp.disabled = true;
    variablesList[23].txt.classList.add('disabled');
  }
}

function checkboxMargin(checkbox, margin) {
  const checkBoxLabel = checkbox.elt.getElementsByTagName("label")[0];
  checkBoxLabel.style.marginLeft = margin;
}
