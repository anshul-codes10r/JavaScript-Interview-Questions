/* 4. The Password Validator
You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit. */

const password = prompt("Enter strong password.");
function passwordValidator(password) {
    if (password.length >=8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) ) {
        console.log("Password meets all security requirements.")
        return true;
    }
    else {
        console.log("Fulfill this requirements 👇 ")
        console.log("At least 8 characters long.")
        console.log("At least one uppercase and one lowercase letter.")
        console.log("At least one digit (0–9).")
        return false;
    }
}
console.log(passwordValidator(password))