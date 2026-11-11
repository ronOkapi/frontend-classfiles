const outputField = document.getElementById("output");

function hello(name) {
    let output = "";

    if(name === "Ron" || name === "Meow"){
        output = `Hello meow ${name}`;
    } else if(name === "Rat"){
        output = `You are a rat!`;
    } else {
        output = `I dont know you ${name}, but nice to meet ya :3`;
    }

    return output;
}

function helloHandler() {
    const name = document.getElementById("name").value;
    const output = hello(name);

    outputField.innerHTML = output;
}
