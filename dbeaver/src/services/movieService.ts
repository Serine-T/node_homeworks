import pool from '../config/db';
import { IMovie } from '../models/movie';

export const getAllMovies = async (): Promise<IMovie[]> => {
  const result = await pool.query('SELECT * FROM movies');
  return result.rows;
};

export const getMovieById = async (id: number): Promise<IMovie | null> => {
  const result = await pool.query('SELECT * FROM movies WHERE movieID = $1', [id]);
  if (result.rows.length === 0) {
    return null;
  }
  return result.rows[0];
};

export const createMovie = async (movie: IMovie): Promise<IMovie> => {
  const { title, releaseYear, directorID } = movie;
  const result = await pool.query(
    'INSERT INTO movies (title, releaseYear, directorID) VALUES ($1, $2, $3) RETURNING *',
    [title, releaseYear, directorID]
  );
  return result.rows[0];
};

export const updateMovie = async (id: number, movie: IMovie): Promise<IMovie | null> => {
  const { title, releaseYear, directorID } = movie;
  const result = await pool.query(
    'UPDATE Movies SET title = $1, releaseYear = $2, directorId = $3 WHERE movieID = $4 RETURNING *',
    [title, releaseYear, directorID, id]
  );
  if (result.rows.length === 0) {
    return null;
  }
  return result.rows[0];
};

export const deleteMovie = async (id: number): Promise<boolean> => {
  const result = await pool.query('DELETE FROM movies WHERE movieID = $1 RETURNING *', [id]);
  return result.rows.length > 0;
};
