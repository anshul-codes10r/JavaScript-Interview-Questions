/* 11. The Array Filterer
You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion. */

const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Phone", category: "Electronics" },
    { name: "Shoes", category: "Fashion" },
    { name: "T-Shirt", category: "Fashion" }
];
function filterProducts(products, category) {
    let match = products.filter((pro) => {
        if (pro.category === category) {
            return true
        }
        else {
            return false
        }
    });
    return match;
}
console.log(filterProducts(products, "Electronics"))