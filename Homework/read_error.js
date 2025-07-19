//Read a non-existent file and handle the error using try-catch
const fs= require('fs');
const filename='nonexit.txt';
try{
    const data= fs.readFileSync(filename, 'utf-8');
    console.log("file content \n", data);
} catch (err){
    console.error("Erro file does not exist  or caont be read ");
}