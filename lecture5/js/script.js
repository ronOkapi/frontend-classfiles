const products = [
    {
        name: "Coffee",
        price: 3,
        stock: 100
    },
    {
        name: "Cake",
        price: 3.5,
        stock: 15
    },
    {
        name: "Ice Cream",
        price: 3,
        stock: 45
    }
];

products.forEach((product, i) =>{
    console.log(product.name);
    console.log(i );
});

const timerOut = document.getElementById("timer-out");
const stopBtn = document.getElementById("stop-btn");
const startBtn = document.getElementById("start-btn");
let seconds = 1;
let timer = null;

startBtn.addEventListener("click", () => {
    startTimer();
});

stopBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    seconds = 1;
});

function startTimer() {
    timer = setInterval(() => {
    timerOut.innerHTML = seconds;
    seconds++
}, 1000);
}
