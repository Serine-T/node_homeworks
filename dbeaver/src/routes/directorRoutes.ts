import { Router } from 'express';
import { createDirector, deleteDirector, getDirectorById, getDirectors, updateDirector } from '../controllers/directorController';

const router = Router();

router.get('/directors', getDirectors);
router.get('/directors/:id', getDirectorById);
router.post('/directors', createDirector);
router.put('/directors/:id', updateDirector);
router.delete('/directors/:id', deleteDirector);

export default router;
