/* 9. The Asynchronous Shopper
Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay. */

const product = prompt("Enter product name");
async function placeOrder(product) {
    let ms = Math.floor(Math.random() * 7000) + 1000;
    const delay = (ms) => new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Your ${product} order is confirmed!`)
        }, ms);
    })
    return delay(ms);
}
placeOrder(product).then((message) => {
    console.log(message);
});