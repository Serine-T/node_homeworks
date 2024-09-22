// const fs = require('fs');

// const filePath = 'task1.js';

// fs.stat(filePath, (err, stats) => {
//   if (err) {
//     return err;
//   }

//   console.log('File Metadata:');
//   console.log(`Size: ${stats.size} bytes`);
//   console.log(`Created: ${stats.birthtime}`);
//   console.log(`Modified: ${stats.mtime}`);
// });

const fs = require('fs');

const filePath = 'task1.js';

fs.stat(filePath, (err, stats) => {
  if (err) {
    return err;
  }

  console.log('File Metadata:');
  console.log(`Size: ${stats.size} bytes`);
  console.log(`Created: ${stats.birthtime}`);
  console.log(`Modified: ${stats.mtime}`);

  fs.chmod(filePath, 0o444, (err) => {
    if (err) {
      return err;
    }

    console.log('File permissions changed to read-only.');
  });
});
