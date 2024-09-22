import express from 'express';
import dotenv from 'dotenv';
import movieRoutes from './routes/movieRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api', movieRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
