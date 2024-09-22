// const fs = require('fs');

// const inputFilePath = 'input.txt';
// const outputFilePath = 'output.txt';

// try {
//   fs.writeFileSync(inputFilePath, 'test');
//   const data = fs.readFileSync(inputFilePath, 'utf8');
//   fs.writeFileSync(outputFilePath, data);
// } catch (err) {
//   console.error('Error:', err);
// }


const fs = require('fs/promises');

const inputFilePath = 'input.txt';
const outputFilePath = 'output.txt';

(async () => {
  try {
    await fs.writeFile(inputFilePath, 'test-async');
    const data = await fs.readFile(inputFilePath, 'utf8');
    await fs.writeFile(outputFilePath, data);
  } catch (err) {
    console.error('Error:', err);
  }
})();
