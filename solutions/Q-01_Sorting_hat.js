/* 1. The Magical Sorting Hat
Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff (length less than 8), Ravenclaw (length less than 12), or Slytherin (length greater than or equal to 12)) based on the length of their names. */

const studentNames = ["Sanemi shinazugawa",
                    "Tengen", 
                    "Muichiro", 
                    "Tanjiro kamado", 
                    "Nezuko kamado", 
                    "Zenitsu", 
                    "Inosuke", 
                    "Kyojuro Rengoku", 
                    "Mitsuri", 
                    "Akaza", 
                    "Giyu tomioka", 
                    "Shinobu", 
                    "Obanai", 
                    "Gyomei", 
                    "Kagaya", 
                    "Muzan"];

function sortingHat(studentNames) {
    for (const studentName of studentNames) {
        let house = "";
        if (studentName.length < 6) {
            house = "Gryffindor";
        }
        else if (studentName.length < 8) {
            house = "Hufflepuff";
        }
        else if (studentName.length < 12) {
            house = "Ravenclaw";
        }
        else {
            house = "Slytherin";
        }
        console.log(`${studentName} : ${house}`)
    }
}
sortingHat(studentNames);