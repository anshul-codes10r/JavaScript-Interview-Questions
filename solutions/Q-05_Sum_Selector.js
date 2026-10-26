/* 5. The Sum Selector
You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation. */

const numbers = [10, 20, 30, -5, 40, 50];
function sumSelector(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0) {
            //numbers[i] = numbers[i] + sum;
            sum = sum + numbers[i];
        }
        else if (numbers[i] < 0) {
            break
        }
    /*    else {
            console.log("Something went wrong.")
        } */
    }
    return sum
}
console.log(sumSelector(numbers))