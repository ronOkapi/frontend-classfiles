console.log("Hello Meow");

let name = "Ron";

let clickCount = 1;

const textP = document.getElementById("text");

textP.innerHTML += `<p>hello meow ${name}</p>`;

document.getElementById("btn").addEventListener("click", () =>{
    if(clickCount === 1){
        textP.innerHTML += `<p>You clicked :0 ${clickCount} time</p>`;
    } else {
        textP.innerHTML += `<p>You clicked :0 ${clickCount} times</p>`;
    }
    
    clickCount++;
});