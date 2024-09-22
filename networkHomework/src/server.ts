import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, this site is served over HTTP!');
});

app.listen(3000, () => {
    console.log('Running on http://localhost:3000');
});
