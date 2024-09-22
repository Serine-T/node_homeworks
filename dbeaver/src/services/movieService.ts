import pool from '../config/db';
import { IMovie } from '../models/movieModel';

export const getAllMoviesService = async (): Promise<IMovie[]> => {
  const result = await pool.query('SELECT * FROM Movies');
  return result.rows;
};

export const getMovieByIdService = async (id: number): Promise<IMovie | null> => {
  const result = await pool.query('SELECT * FROM Movies WHERE MovieID = $1', [id]);
  if (result.rows.length === 0) {
    return null;
  }
  return result.rows[0];
};

export const createMovieService = async (movie: IMovie): Promise<IMovie> => {
  const { title, releaseYear, directorID } = movie;
  const result = await pool.query(
    'INSERT INTO Movies (Title, ReleaseYear, DirectorID) VALUES ($1, $2, $3) RETURNING *',
    [title, releaseYear, directorID]
  );
  return result.rows[0];
};

export const updateMovieService = async (id: number, movie: IMovie): Promise<IMovie | null> => {
  const { title, releaseYear, directorID } = movie;
  const result = await pool.query(
    'UPDATE Movies SET Title = $1, ReleaseYear = $2, DirectorID = $3 WHERE MovieID = $4 RETURNING *',
    [title, releaseYear, directorID, id]
  );
  if (result.rows.length === 0) {
    return null;
  }
  return result.rows[0];
};

export const deleteMovieService = async (id: number): Promise<boolean> => {
  const result = await pool.query('DELETE FROM Movies WHERE MovieID = $1 RETURNING *', [id]);
  return result.rows.length > 0;
};
