const fs = require('fs');
const path = require('path');

try {
  fs.mkdirSync('testDir');

  const filePath = path.join('testDir', 'testFile.txt');
  fs.writeFileSync(filePath, 'test');

  const renamedFilePath = path.join('testDir', 'renamedFile.txt');
  fs.renameSync(filePath, renamedFilePath);

  fs.unlinkSync(renamedFilePath);
  fs.rmdirSync('testDir');
} catch (err) {
  console.error('Error:', err);
}
