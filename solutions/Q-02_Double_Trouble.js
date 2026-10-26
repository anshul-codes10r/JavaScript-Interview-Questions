/* 2. The Double Trouble
You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them. */

const numbers = [2, 4, 4, 4, 6, 8, 8, 10];
function double(numbers) {
    const original = [...numbers];
    for (let i = 0; i < numbers.length; i++) {
        if (i === 0 || original[i] !== original[i - 1]) {
            numbers[i] = numbers[i] * 2
        }
    }
    return numbers;
}
console.log(double(numbers))