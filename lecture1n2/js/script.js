console.log("Hello Meow");

let name = "Ron";
let clickCount = 1;
const textP = document.getElementById("text");

document.getElementById("btn").addEventListener("click", () =>{
    youClicked();
});

document.getElementById("btn2").addEventListener("click", () =>{
    nextYear();
});

const youClicked = () => {
    //name = prompt("Whats your name?");
    name = document.getElementById("name").value;
    if(clickCount === 1){
        textP.innerHTML += `<p>${name} clicked :0 click counter: ${clickCount}</p>`;
    } else {
        textP.innerHTML += `<p>${name} clicked :0 click counter: ${clickCount}</p>`;
    }
    
    clickCount++;
}

const nextYear = () => {
    let year = Number(document.getElementById("year").value);
    textP.innerHTML += `<p>next year is: ${year+1}</p>`;

}