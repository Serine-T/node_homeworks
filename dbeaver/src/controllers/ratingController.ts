import { Request, Response } from 'express';
import * as ratingService from '../services/ratingService';
import { IRating } from '../models/rating';


export const getRatings = async (_: Request, res: Response): Promise<void> => {
  try {
    const ratings = await ratingService.getAllRatings();
    res.status(200).json(ratings);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
};

export const getRatingById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const rating = await ratingService.getRatingById(Number(id));
    if (!rating) {
      res.status(404).json({ message: 'Rating not found' });
    } else {
      res.status(200).json(rating);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
};

export const createRating = async (req: Request, res: Response): Promise<void> => {
  const { movieId, rating } = req.body as IRating;
  try {
    const newRating = await ratingService.createRating({ movieId, rating });
    res.status(201).json(newRating);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
};

export const updateRating = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { movieId, rating } = req.body as IRating;
  try {
    const updatedRating = await ratingService.updateRating(Number(id), { movieId, rating });
    if (!updatedRating) {
      res.status(404).json({ message: 'Rating not found' });
    } else {
      res.status(200).json(updatedRating);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
};

export const deleteRating = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const isDeleted = await ratingService.deleteRating(Number(id));
    if (!isDeleted) {
      res.status(404).json({ message: 'Rating not found' });
    } else {
      res.status(200).json({ message: 'Rating deleted successfully' });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
};
