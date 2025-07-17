const fs= require("fs");

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
fs.cpSync("./test.txt","./copy.txt");

// deltere
fs.unlinkSync("./copy.txt");

// stat
console.log(fs.statSync("./test.txt"));

// fs.mkdirSync("my-docs");  // t o  make new folder sync
fs.mkdirSync("my-docs/a/b", { recursive: true });



// blocking request 
