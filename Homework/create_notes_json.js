//📘 FS Homework Task: Create notes.json and write a JS object as a JSON string
const fs= require("fs");
const note ={
    title : "My first Ntes",
    body : "This is my homework on writting json",
    author : " yuvraj gupta "
};
// convert object to json stiring 
const jsonData= JSON.stringify(note, null, 2) ; //  prety- print with 2 space 

// write notes.js
fs.writeFileSync('notes.json', jsonData);
console.log("✅ 'notes.json' created and data written successfully.");