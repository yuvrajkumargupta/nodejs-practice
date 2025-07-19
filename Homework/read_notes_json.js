const fs = require('fs');

// Step 1: Read file content as string
try{
const jsonData = fs.readFileSync('notes.json', 'utf-8');

// Step 2: Parse the JSON string into JS object
const note = JSON.parse(jsonData);
 console.log("✅ Parsed object:", note);
} catch(err){
   console.error("❌ Error reading or parsing JSON:", err.message);
}
