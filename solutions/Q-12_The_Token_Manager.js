/* 12. The Token Manager
You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time. */

const token = "Zx10R";
const expiresIn = 60 * 60 * 1000;
function setAuthToken(token) {
    let expiryTime = Date.now() + expiresIn;
    const item = {
        token: token,
        expiry: expiryTime
    }
    localStorage.setItem("authToken", JSON.stringify(item))
}
setAuthToken(token);
const savedToken = localStorage.getItem("authToken");
console.log(JSON.parse(savedToken));