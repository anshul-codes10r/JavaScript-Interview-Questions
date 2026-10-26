/* 13. The Shopping Cart Totalizer
You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost. */

const products = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 500, quantity: 2 },
    { name: "Keyboard", price: 1000, quantity: 1 }
];
function calculateTotal(products) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        total += product.price * product.quantity;
    }
    return (`Total price is ₹${total}.`);
}
console.log(calculateTotal(products));