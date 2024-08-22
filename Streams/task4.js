const { statSync, createReadStream } = require('fs');
const { createServer } = require('http');
const { join } = require('path');

const PORT = 3000;

const server = createServer((req, res) => {
  const filePath = join(__dirname, '10840.pdf');
  console.log({ filePath });

  try {
    const stat = statSync(filePath);
    res.writeHead(200, {
      'Content-Type': 'application/pdf',
      'Content-Length': stat.size,
    });

    const readStream = createReadStream(filePath);
    
    readStream.pipe(res);

    readStream.on('error', (err) => {
      console.error('File stream error:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    });

    readStream.on('end', () => {
      res.end();
    });

  } catch (err) {
    console.error('Catching-error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});


server.listen(PORT, () => {
  console.log('Running');
});
