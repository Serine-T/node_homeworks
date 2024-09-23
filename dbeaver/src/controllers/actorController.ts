import { Request, Response } from 'express';
import * as actorService from '../services/actorService';
import { IActor } from '../models/actor';


export const getActors = async (_: Request, res: Response): Promise<void> => {
  try {
    const actors = await actorService.getAllActors();
    res.status(200).json(actors);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
};

export const getActorById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const actor = await actorService.getActorById(Number(id));
    if (!actor) {
      res.status(404).json({ message: 'Director not found' });
    } else {
      res.status(200).json(actor);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
};

export const createActor = async (req: Request, res: Response): Promise<void> => {
  const { name, nationality, dob } = req.body as IActor;
  try {
    const newActor = await actorService.createActor({ name, nationality, dob});
    res.status(201).json(newActor);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
};

export const updateActor = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const {name, nationality, dob } = req.body as IActor;
  try {
    const updatedActor = await actorService.updateActor(Number(id), {name, nationality, dob });
    if (!updatedActor) {
      res.status(404).json({ message: 'Actor not found' });
    } else {
      res.status(200).json(updateActor);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
};

export const deleteActor = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const isDeleted = await actorService.deleteActor(Number(id));
    if (!isDeleted) {
      res.status(404).json({ message: 'Actor not found' });
    } else {
      res.status(200).json({ message: 'Actor deleted successfully' });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
};
