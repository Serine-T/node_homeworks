import pool from '../config/db';
import { IGenre } from '../models/genre';

export const getAllGenres = async (): Promise<IGenre[]> => {
  const result = await pool.query('SELECT * FROM genres');
  return result.rows;
};  

export const getGenreById = async (id: number): Promise<IGenre | null> => {
  const result = await pool.query('SELECT * FROM genres WHERE genreID = $1', [id]);
  if (result.rows.length === 0) {
    return null;
  }
  return result.rows[0];
};

export const createGenre = async (genres: IGenre): Promise<IGenre> => {
  const { genreName } = genres;
  const result = await pool.query(
    'INSERT INTO genres (genreName) VALUES ($1) RETURNING *',
    [genreName]
  );
  return result.rows[0];
};

export const updateGenre = async (id: number, genre: IGenre): Promise<IGenre | null> => {
  const { genreName } = genre;
  const result = await pool.query(
    'UPDATE genres SET genreName = $1 WHERE genreID = $2 RETURNING *',
    [genreName, id]
  );
  if (result.rows.length === 0) {
    return null;
  }
  return result.rows[0];
};

export const deleteGenre = async (id: number): Promise<boolean> => {
  const result = await pool.query('DELETE FROM genres WHERE genreID = $1 RETURNING *', [id]);
  return result.rows.length > 0;
};
