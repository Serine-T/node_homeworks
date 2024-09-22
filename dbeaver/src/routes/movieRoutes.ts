import express from 'express';
import { createMovie, deleteMovie, getMovieById, getMovies, updateMovie, } from '../controllers/movieController';

const router = express.Router();

router.get('/movies', getMovies);
router.get('/movies/:id', getMovieById);
router.post('/movies', createMovie);
router.put('/movies/:id', updateMovie);
router.delete('/movies/:id', deleteMovie);

export default router;
