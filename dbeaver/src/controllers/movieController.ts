import { Request, Response } from 'express';
import * as movieService from '../services/movieService';
import { IMovie } from '../models/movie';

export const getMovies = async (_: Request, res: Response): Promise<void> => {
  try {
    const movies = await movieService.getAllMovies();
    res.status(200).json(movies);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
};

export const getMovieById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const movie = await movieService.getMovieById(Number(id));
    if (!movie) {
      res.status(404).json({ message: 'Movie not found' });
    } else {
      res.status(200).json(movie);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
};

export const createMovie = async (req: Request, res: Response): Promise<void> => {
  const { title, releaseYear, directorID } = req.body as IMovie;
  try {
    const newMovie = await movieService.createMovie({ title, releaseYear, directorID });
    res.status(201).json(newMovie);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
};

export const updateMovie = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { title, releaseYear, directorID } = req.body as IMovie;
  try {
    const updatedMovie = await movieService.updateMovie(Number(id), { title, releaseYear, directorID });
    if (!updatedMovie) {
      res.status(404).json({ message: 'Movie not found' });
    } else {
      res.status(200).json(updatedMovie);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
};

export const deleteMovie = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const isDeleted = await movieService.deleteMovie(Number(id));
    if (!isDeleted) {
      res.status(404).json({ message: 'Movie not found' });
    } else {
      res.status(200).json({ message: 'Movie deleted successfully' });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
};
