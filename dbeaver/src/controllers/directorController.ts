import { Request, Response } from 'express';
import * as directorService from '../services/directorService';
import { IDirector } from '../models/director';


export const getDirectors = async (_: Request, res: Response): Promise<void> => {
  try {
    const directors = await directorService.getAllDirectors();
    res.status(200).json(directors);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
};

export const getDirectorById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const director = await directorService.getDirectorById(Number(id));
    if (!director) {
      res.status(404).json({ message: 'Director not found' });
    } else {
      res.status(200).json(director);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
};

export const createDirector = async (req: Request, res: Response): Promise<void> => {
  const { name, nationality, dob } = req.body as IDirector;
  try {
    const newDirector = await directorService.createDirector({ name, nationality, dob});
    res.status(201).json(newDirector);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
};

export const updateDirector = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const {name, nationality, dob } = req.body as IDirector;
  try {
    const updatedDirector = await directorService.updateDirector(Number(id), {name, nationality, dob });
    if (!updatedDirector) {
      res.status(404).json({ message: 'Director not found' });
    } else {
      res.status(200).json(updatedDirector);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
};

export const deleteDirector = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const isDeleted = await directorService.deleteDirector(Number(id));
    if (!isDeleted) {
      res.status(404).json({ message: 'Director not found' });
    } else {
      res.status(200).json({ message: 'Director deleted successfully' });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
};
