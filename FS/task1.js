const fs = require('fs');

try {
  fs.writeFileSync('example.txt', 'Hello, World!\n');
  fs.appendFileSync('example.txt', 'This is Node.js FS module.\n');

  const data = fs.readFileSync('example.txt', 'utf8');
  console.log('File contents:');
  console.log(data);
} catch (err) {
  console.error('Error:', err);
}
