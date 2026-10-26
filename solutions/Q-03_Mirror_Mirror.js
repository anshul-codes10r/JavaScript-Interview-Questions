/* 3. The Mirror Mirror
Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself. */

const reverse = prompt("Type Something...");
function mirror(reverse) {
    let result = "";
    for (let i = reverse.length - 1; i >=0; i--) {
        result = result + reverse[i];
    }
    return (`${reverse}${result}`)
}
console.log(mirror(reverse))