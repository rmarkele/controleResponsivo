function geraSistema(){
    let xref = processSize[0];
    let yref = processSize[1];
    let w = canvasBounds.right - canvasBounds.left;
    let h = canvasBounds.bottom - canvasBounds.top;
    damper = new amortecedor(
        xref + 10, // posX,
        2 * ((0.85 / 4) * yref), // posY
        1.2 * H0, // altura
        1.2 * L0, // largura0
        L0, // largura
        `C = ` //text
    ); //cria amortecedor

    spring = new mola(
        xref + 10,
        3 * ((0.95 / 4) * yref),
        Nmol,
        0.6 * H0,
        L0,
        L0,
        `K = `
    ); // cria mola (posX, posY, N, altura, largura0, largura, Kmola, text)

    xCar = 0.5 * (w + (spring.posX + spring.L0)) - Lcar / 2;

    car = new carro(
        xCar,
        yref,
        Hcar,
        Lcar, 
        0, 
        `m = `
    ); // cria massa/carrinho (posX, posY, altura, largura, deltaX,text)
}


