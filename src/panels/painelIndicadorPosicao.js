function geraPainelIndicadorPosicao(){

  createPanel({
    panelGroup: 1,
    panelId: 'indicator',
    listOfVar: [
      [
        {inputId: 16, inputName: 'xSatMax'}, 
      ],
      [
        {inputId: 17, inputName: 'xSatMin'},
      ],
      [
        {inputId: 28, inputName: 'deltaInd'},
      ],
    ]
  })
  
}