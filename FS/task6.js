const fs = require('fs');
const filePath = 'nonExistentFile.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error(`File "${filePath}" does not exist.`);
    } else {
      console.error(err);
    }
  } else {
    console.log('File contents:', data);
  }
});
