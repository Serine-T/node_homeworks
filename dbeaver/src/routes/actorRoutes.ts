import { Router } from 'express';
import { createActor, deleteActor, getActorById, getActors, updateActor } from '../controllers/actorController';

const router = Router();

router.get('/actors', getActors);
router.get('/actors/:id', getActorById);
router.post('/actors', createActor);
router.put('/actors/:id', updateActor);
router.delete('/actors/:id', deleteActor);

export default router;
