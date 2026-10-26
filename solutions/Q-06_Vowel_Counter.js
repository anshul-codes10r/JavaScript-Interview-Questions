/* 6. The Vowel Counter
You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels. */

const text = prompt("Enter something...").toLowerCase();
const vowels = ("aeiou");
function vowelCounter(text) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i])) {
            count++;
        }
    }
    return count;
}
console.log(vowelCounter(text))