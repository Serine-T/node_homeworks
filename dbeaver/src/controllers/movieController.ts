import { Request, Response } from 'express';
import { createMovieService, deleteMovieService, getAllMoviesService, getMovieByIdService, updateMovieService } from '../services/movieService';
import { IMovie } from '../models/movieModel';

export const getMovies = async (_: Request, res: Response): Promise<void> => {
  try {
    const movies = await getAllMoviesService();
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
    const movie = await getMovieByIdService(Number(id));
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
    const newMovie = await createMovieService({ title, releaseYear, directorID });
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
    const updatedMovie = await updateMovieService(Number(id), { title, releaseYear, directorID });
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
    const isDeleted = await deleteMovieService(Number(id));
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
