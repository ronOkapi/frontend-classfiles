let exMin = document.getElementById("exercise-min");
const outputField = document.getElementById("output");


document.getElementById("btn").addEventListener("click", () => {

    if(exMin.value === '' || isNaN(exMin.value)){
        displayOutput("Please enter a number");
    } else {
        checkTime(Number(exMin.value));
    }

});

const checkTime = (time) => {
    let output = "";
    const maxVal = 1440;
    const minVal = 1;
    

    if(time > minVal && time < maxVal){
        if(time < 30){
            output = "Good job on moving! Maybe consider a short walk to add to that activity if you have the time";
        } else {
            output = "Great job moving alot!";
        }    
    } else if(time >= maxVal){
        output = "Remeber to relax... You cannot exercise 24h or more straight.";
    } else if (time === 0){
        output = "Please consider taking even a short walk every day if able. It will improve your overall state greatly";
    }

    displayOutput(output);
}

const displayOutput = (output) => {
    outputField.innerHTML = output;
}