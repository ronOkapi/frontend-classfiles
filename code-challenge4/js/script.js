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

console.log(`${products[0].name} costs ${products[0].price} and there are ${products[0].stock}`);

products[0].price = 2.5;

console.log(`${products[0].name} costs ${products[0].price} and there are ${products[0].stock}`);

for (let i = 0; i < products.length; i++){
    document.getElementById("shop-list").innerHTML += `<li>${products[i].name} costs ${products[i].price}€ and there are ${products[i].stock}</li>`;
}