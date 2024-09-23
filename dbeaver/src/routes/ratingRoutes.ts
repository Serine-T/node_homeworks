import { Router } from 'express';
import { createRating, deleteRating, getRatingById, getRatings, updateRating, } from '../controllers/ratingController';

const router = Router();

router.get('/ratings', getRatings);
router.get('/ratings/:id', getRatingById);
router.post('/ratings', createRating);
router.put('/ratings/:id', updateRating);
router.delete('/ratings/:id', deleteRating);

export default router;
