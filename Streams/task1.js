const { createReadStream, createWriteStream } = require('fs');

const readStream = createReadStream('input.txt');
const writeStream = createWriteStream('output.txt');

readStream.on('data', (chunk) => {
  writeStream.write(chunk);
});

readStream.on('end', () => {
  writeStream.end();
});

const writeStreamWithPipe = createWriteStream('outputWithPipe.txt');
readStream.pipe(writeStreamWithPipe);

writeStreamWithPipe.on('end', () => {
  console.log('With pipes.');
});

