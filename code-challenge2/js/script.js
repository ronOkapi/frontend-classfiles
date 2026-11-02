
document.getElementById("btn").addEventListener("click", () =>{
    calculateRest();
});

const calculateRest = () => {
    let name = document.getElementById("name").value;
    let restLevel = Number(document.getElementById("rest").value);


    if(restLevel === 1){
        document.getElementById("display").innerHTML = `<p>${name} is 20% rested. Get more sleep please!</p>`;
    }else if(restLevel === 2){
        document.getElementById("display").innerHTML = `<p>${name} is 40% rested. Maybe sleeping more would be good?</p>`;
    }else if(restLevel === 3){
        document.getElementById("display").innerHTML = `<p>${name} is 60% rested. Its not the best but okey...</p>`;
    }else if(restLevel === 4){
        document.getElementById("display").innerHTML = `<p>${name} is 80% rested. Pretty good pretty good!</p>`;
    }else if(restLevel === 5){
        document.getElementById("display").innerHTML = `<p>${name} is 100% rested. Wow! You impress me!</p>`;
    } else {
        document.getElementById("display").innerHTML = `<p>What you entered is now a number from 1-5 :(</p>`;
    }
}
