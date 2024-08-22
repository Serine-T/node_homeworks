const { createReadStream, createWriteStream } = require('fs');
const { Transform } = require('stream');
const { join } = require('path');


const transformStream = new Transform({
  transform(chunk, _, cb) {
    try {
      const jsonObject = JSON.parse(chunk.toString());
      jsonObject.timestamp = new Date().toISOString();
      this.push(JSON.stringify(jsonObject) + '\n');
      cb();
    } catch (err) {
      cb(err);
    }
  }
});

const inputFilePath = join(__dirname, 'input.json');
const readStream = createReadStream(inputFilePath, { encoding: 'utf8' });

const outputFilePath = join(__dirname, 'output.json');
const writeStream = createWriteStream(outputFilePath, { encoding: 'utf8' });

readStream.pipe(transformStream).pipe(writeStream);

transformStream.on('end', () => {
  console.log('SUccessed');
});
