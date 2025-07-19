// Create a file data.txt and write "Hello World" into it using fs.writeFileSync.
const fs = require("fs");

// Write to file
fs.writeFileSync("data.txt", "helo i am yuvraj and this is my first homework");

// Read from file
const data = fs.readFileSync("data.txt", "utf8");
// console.log(data);

// Code to append " - from Yuvraj" to data.txt:
fs.appendFileSync("data.txt", "-form yuvraj ");
// console.log("Text appended successfully!");


// Read file if it exists
// if (fs.existsSync('data.txt')) {
//     const data = fs.readFileSync('data.txt', 'utf8');
//     console.log("Before deleting, file content was:", data);

//     // Delete file
//     fs.unlinkSync('data.txt');
//     console.log("File deleted successfully.");
// } else {
//     console.log("data.txt does not exist.");
// }


// Create a folder logs using fs.mkdirSync
// fs.mkdirSync('logs');
// console.log("folder log created ")
// Inside logs, create a file log.txt and write timestamp using Date.now().
// if(!fs.existsSync('logs')){
//     fs.mkdirSync('logs');
// }
// const timestamp=Date.now();
// fs.writeFileSync('logs/log.txt',`${timestamp}`);
// console.log("Timetamp written to log/logs.tst successfully");
// Read a large file asynchronously using fs.readFile() and log it.


// const content= "This is large file ";
// fs.writeFileSync('largefile.txt',content);
const fs = require('fs');

const filePath = 'largefile.txt';

if (fs.existsSync(filePath)) {
  const content = fs.readFileSync(filePath, 'utf-8');
  console.log("File content:", content);
} else {
  console.log("❌ File 'largefile.txt' does not exist");
}



// Try reading a non-existent file and handle error using try-catch.

// Create a notes.json file and write a JS object as JSON string.

// Read the JSON file and parse it into an object.

// Rename a file using fs.renameSync.

// Create 5 files (file1.txt to file5.txt) inside a loop.

// Read all filenames in a folder using fs.readdirSync.

// Write a function copyFile(source, dest) that copies content from one file to another.
