const light1 = document.getElementById("light-1");
const light2 = document.getElementById("light-2");
const light3 = document.getElementById("light-3");

const colors = ["red", "yellow", "green"];

showLight();

function showLight() {
    lightShow = setInterval(() => {
        resetColors()
        let randomNum = Math.floor(Math.random()*3);
        console.log(randomNum);
        document.getElementById(`light-${randomNum+1}`).style.backgroundColor = colors[randomNum];
    }, 1000);

}

function resetColors() {  
    document.querySelectorAll(".trafic-lights").forEach((elem, i) => {
        elem.style.backgroundColor = "gray";
    });

}


/* Normal traffic light cycle
light1.style.backgroundColor = light1.dataset.color;
setTimeout(toGreen, 1000);

function toGreen(){
    light1.style.backgroundColor = light1.dataset.color;
    light2.style.backgroundColor = light2.dataset.color;

    setTimeout(() => {
        light1.style.backgroundColor = "gray";
        light2.style.backgroundColor = "gray";

        light3.style.backgroundColor = light3.dataset.color;
    }, 2000);

    setTimeout(toRed, 5000);
}

function toRed() {
    light3.style.backgroundColor = "gray";
    light2.style.backgroundColor = light2.dataset.color;

    setTimeout(() => {
        light1.style.backgroundColor = light1.dataset.color;
        light2.style.backgroundColor = "gray";
        light3.style.backgroundColor = "gray";
    }, 2000);

    setTimeout(toGreen, 5000);
}
*/


/*const colors = ["red", "yellow", "green"];

document.querySelectorAll(".trafic-lights").forEach((elem, i) => {
    elem.addEventListener("click", () => {
        resetColors(); 
        elem.style.backgroundColor = colors[i];
    })
});
*/
