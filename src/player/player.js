let playbtn = document.querySelector('#play-button');
let pausebtn = document.querySelector('#pause-button');
let resetbtn = document.querySelector('#rewind-button');

pausebtn.addEventListener('click', (e)=>{
    playbtn.style.display = 'block'
    pausebtn.style.display = 'none'
    stopTimer();
    noLoop();
});

playbtn.addEventListener('click', (e)=>{
    playbtn.style.display = 'none'
    pausebtn.style.display = 'block'
    startTimer();
    loop();
});

resetbtn.addEventListener('click', e=>softReset());