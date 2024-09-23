import pool from '../config/db';
import { IRating } from '../models/rating';

export const getAllRatings = async (): Promise<IRating[]> => {
  const result = await pool.query('SELECT * FROM ratings');
  return result.rows;
};  

export const getRatingById = async (id: number): Promise<IRating | null> => {
  const result = await pool.query('SELECT * FROM ratings WHERE ratingID = $1', [id]);
  if (result.rows.length === 0) {
    return null;
  }
  return result.rows[0];
};

export const createRating = async (ratings: IRating): Promise<IRating> => {
  const { movieId, rating } = ratings;
  const result = await pool.query(
    'INSERT INTO ratings (movieId, rating) VALUES ($1, $2) RETURNING *',
    [movieId, rating]
  );
  return result.rows[0];
}; 

export const updateRating = async (id: number, ratingItem: IRating): Promise<IRating | null> => {
  const { movieId, rating } = ratingItem;
  const result = await pool.query(
    'UPDATE ratings SET movieId = $1 WHERE rating = $2 RETURNING *',
    [movieId, rating, id]
  );
  if (result.rows.length === 0) {
    return null;
  }
  return result.rows[0];
};

export const deleteRating = async (id: number): Promise<boolean> => {
  const result = await pool.query('DELETE FROM ratings WHERE ratingID = $1 RETURNING *', [id]);
  return result.rows.length > 0;
};
