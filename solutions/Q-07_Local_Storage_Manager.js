/* 7. The Local Storage Manager
You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage. */

const title = prompt("Enter note title:");
const content = prompt("Enter note content:");
const note = {
    title: title,
    content: content
};
function saveNoteToLocalStorage(note) {
    localStorage.setItem("note", JSON.stringify(note));
}
(saveNoteToLocalStorage(note))
const savedNote = localStorage.getItem("note");
console.log(JSON.parse(savedNote));
console.log("Note added successfully.")