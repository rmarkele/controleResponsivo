// Initializing variables
let timer = true;
let seconds = 0;
let previousSeconds = 0;
let timerInterval;

// Get the timer div element
const timerElement = document.getElementById('timer');

// Get the holder div element
const holderElement = document.getElementById('holder');

function formatTime(seconds) {

    const remainingSeconds = (Math.round(seconds % 1000 * 10)/10).toFixed(1);
    const formattedTime = `${String(remainingSeconds).padStart(5, ' ')}`;

    return formattedTime;
}

// Function to update the timer div
function updateTimer() {
    timerElement.textContent = formatTime(seconds);
}

// Function to start the timer
function startTimer() {
    timer = true;
}

// Function to stop the timer
function stopTimer() {
    timer = false;
}

// Function to reset the timer
function resetTimer() {
    seconds = 0;
}

function setHolder(t) {
    previousSeconds = t;
}

function resetHolder(){
    previousSeconds = 0;
}

function updateHolder() {
    if(typeof(previousSeconds)=="number" && previousSeconds>0){
        holderElement.textContent = formatTime(previousSeconds);
    }else if(typeof(previousSeconds)=="number" && previousSeconds==0){
        holderElement.textContent = '---';
    }else{
        holderElement.textContent = previousSeconds;
    }
}

function resetTimerDisplay() {
    stopTimer();
    resetTimer();
    updateTimer();
    startTimer();
}

function resetHolderDisplay() {
    resetHolder();
    updateHolder();
}




