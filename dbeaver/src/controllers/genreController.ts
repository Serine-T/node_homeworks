import { Request, Response } from 'express';
import * as genreService from '../services/genreService';
import { IGenre } from '../models/genre';


export const getGenres = async (_: Request, res: Response): Promise<void> => {
  try {
    const genres = await genreService.getAllGenres();
    res.status(200).json(genres);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
};

export const getGenreById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const genre = await genreService.getGenreById(Number(id));
    if (!genre) {
      res.status(404).json({ message: 'Genre not found' });
    } else {
      res.status(200).json(genre);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
};

export const createGenre = async (req: Request, res: Response): Promise<void> => {
  const { genreID, genreName } = req.body as IGenre;
  try {
    const newGenre = await genreService.createGenre({ genreID, genreName});
    res.status(201).json(newGenre);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
};

export const updateGenre = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { genreID, genreName } = req.body as IGenre;
  try {
    const updatedGenre = await genreService.updateGenre(Number(id), { genreID, genreName });
    if (!updatedGenre) {
      res.status(404).json({ message: 'Genre not found' });
    } else {
      res.status(200).json(updatedGenre);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
};

export const deleteGenre = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const isDeleted = await genreService.deleteGenre(Number(id));
    if (!isDeleted) {
      res.status(404).json({ message: 'Genre not found' });
    } else {
      res.status(200).json({ message: 'Genre deleted successfully' });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
};
