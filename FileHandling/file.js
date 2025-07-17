const fs= require("fs");
const os = require("os");
console.log(os.cpus().length);
// // creating a new File in same directory 
// fs.writeFileSync('./test.txt', "hey there");
// // async
// fs.writeFile("./test.txt", "Hello this is Async",(err)=>{});

// const result=fs.readFileSync("./contacts.txt","utf-8");
// console.log(result);

// fs.readFile("./contacts.txt", "utf8", (err, result) => {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log(result);
//     }
// });
// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
// // its append the data no overide




// fs.appendFileSync("./test.txt", `${Date.now()} hey again!\n`);
// fs.appendFileSync("./test.txt", `${Date.now()} hey again!\n`);


// copy one fole to another file 
// fs.cpSync("./test.txt","./copy.txt");

// deltere
// fs.unlinkSync("./copy.txt");

// stat
// console.log(fs.statSync("./test.txt"));

// fs.mkdirSync("my-docs");  // t o  make new folder sync
// fs.mkdirSync("my-docs/a/b", { recursive: true });



//  non blocking  request 
// console.log(1);
// fs.readFile("contacts.txt", "utf-8", (err, result)=>{
//     console.log(result);
// })               // this is not bolocking code it will call vack again this function 
// console.log(2);
// console.log(3);

//   blocking  request
console.log(1);
const result = fs.readFileSync("contacts.txt", "utf-8"); //  This IS blocking
console.log(result);
console.log(2);
console.log(3);



// Default poo; size= 4 
// max? -8 core cpu - 8 
