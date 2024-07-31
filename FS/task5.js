const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'watchDir');

fs.watch(dirPath, (eventType, filename) => {
  if (filename) {
    console.log(`File ${filename} has been ${eventType}`);
  } else {
    console.log('Filename not provided');
  }
});

console.log(`Watching for file changes in ${dirPath}`);
