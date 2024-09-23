import { Router } from 'express';
import { createGenre, deleteGenre, getGenreById, getGenres, updateGenre } from '../controllers/genreController';

const router = Router();

router.get('/genres', getGenres);
router.get('/genres/:id', getGenreById);
router.post('/genres', createGenre);
router.put('/genres/:id', updateGenre);
router.delete('/genres/:id', deleteGenre);

export default router;
