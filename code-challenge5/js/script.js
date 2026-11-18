const timerOut = document.getElementById("timer-out");
const stopBtn = document.getElementById("stop-btn");
const startBtn = document.getElementById("start-btn");
const secondsInput = document.getElementById("timer-input");
let seconds = 0;
let timer = null;

//Updates seconds value according to input
secondsInput.addEventListener("change", () => {
    // updates as long as the timer isnt running
    if(!timer){
        seconds = Number(secondsInput.value);
    } 
});
//Starts timer
startBtn.addEventListener("click", () => { 
    startTimer();
});
//Pauses timer
stopBtn.addEventListener("click", () => {
    stopTimer();
});
//Function for running timer
function startTimer() {
    timer = setInterval(() => {
        timerOut.innerHTML = seconds;
        if(seconds >= 0){ //adds to timer if seconds are 0 or more
            seconds--;
        } else {
            timerOut.innerHTML = "Times up!"; //Says times up after 0
            seconds = Number(secondsInput.value); //Puts the value from the input to the timer
            stopTimer(); //Resets timer
        }
        
    }, 1000);
}
//function to stop timer
function stopTimer() {
    clearInterval(timer);
    timer = null;   
}

