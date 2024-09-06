const { Readable, Writable } = require('stream');

const fastReadableStream = new Readable({
  read() {
    for (let i = 0; i < 10; i++) {
      const data = `Chunk ${i}\n`;
      console.log(`Pushing: ${data}`);
      if (!this.push(data)) {
        console.log('Pause');
        return;
      }
    }
    this.push(null);
  }
});

const slowWritableStream = new Writable({
  write(chunk, _, cb) {
    console.log(chunk.toString());
    setTimeout(cb, 1000);
  }
});

slowWritableStream.on('drain', () => {
  console.log('slowWritableStream');
});

fastReadableStream.pipe(slowWritableStream);

slowWritableStream.on('finish', () => {
  console.log('Successed');
});
