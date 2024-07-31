const fs = require('fs');
const path = require('path');

function listFilesAndDirectories(dir) {
  fs.readdir(dir, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    files.forEach(file => {
      const fullPath = path.join(dir, file.name);

      if (file.isDirectory()) {
        console.log('Directory:', fullPath);
        listFilesAndDirectories(fullPath);
      } else {
        console.log('File:', fullPath);
      }
    });
  });
}

const directoryPath = './watchDir';
listFilesAndDirectories(directoryPath);
