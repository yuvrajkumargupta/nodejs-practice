const fs = require('fs');

const filePath = 'largefile.txt';

if (fs.existsSync(filePath)) {
  const content = fs.readFileSync(filePath, 'utf-8');
  console.log("File content:", content);
} else {
  console.log("❌ File 'largefile.txt' does not exist");
}
