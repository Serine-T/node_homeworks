import express, { Application } from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/productRoutes';

const app: Application = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
