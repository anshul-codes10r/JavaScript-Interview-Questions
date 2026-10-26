/* 8. Async Array Mapping
Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds. */

const numbers = [1, 2, 3, 4];
async function arrayMapping(numbers) {
    let multi = numbers.map((n) => {
        const delay = (ms) => new Promise((resolve) => {
            setTimeout(() => {
                resolve(n * 2)
            }, ms);
        })
        return delay(500);
    })
    return multi;
}
arrayMapping(numbers).then(async (promises) => {
    console.log(await Promise.all(promises));
});