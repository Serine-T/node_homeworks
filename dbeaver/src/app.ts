import express from 'express';
import dotenv from 'dotenv';
import movieRoutes from './routes/movieRoutes';
import directorRoutes from './routes/directorRoutes';
import actorRoutes from './routes/actorRoutes';
import genreRoutes from './routes/genreRoutes';
import ratingRoutes from './routes/ratingRoutes';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api', movieRoutes);
app.use('/api', directorRoutes);
app.use('/api', genreRoutes);
app.use('/api', actorRoutes);
app.use('/api', ratingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
