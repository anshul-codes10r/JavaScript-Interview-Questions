/* 10. The Coffee Machine
In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay. */

const coffee = prompt("Enter coffee name");
async function brewCoffee(coffee) {
    let ms = Math.floor(Math.random() * 5000) + 1000;
    let delay = (ms) => new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Your ${coffee} is ready!`)
        }, ms);
    })
    return delay(ms);
}
brewCoffee(coffee).then((message) => {
    console.log(message);
});