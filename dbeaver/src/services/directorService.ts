import pool from '../config/db';
import { IDirector } from '../models/director';

export const getAllDirectors = async (): Promise<IDirector[]> => {
  const result = await pool.query('SELECT * FROM directors');
  return result.rows;
};  

export const getDirectorById = async (id: number): Promise<IDirector | null> => {
  const result = await pool.query('SELECT * FROM directors WHERE directorID = $1', [id]);
  if (result.rows.length === 0) {
    return null;
  }
  return result.rows[0];
};

export const createDirector = async (director: IDirector): Promise<IDirector> => {
  const { name, nationality, dob } = director;
  const result = await pool.query(
    'INSERT INTO directors (name, nationality, dob) VALUES ($1, $2, $3) RETURNING *',
    [ name, nationality, dob ]
  );
  return result.rows[0];
};

export const updateDirector = async (id: number, director: IDirector): Promise<IDirector | null> => {
  const { name, nationality, dob } = director;
  const result = await pool.query(
    'UPDATE directors SET name = $1, nationality = $2, dob = $3 WHERE directorID = $4 RETURNING *',
    [name, nationality, dob, id]
  );
  if (result.rows.length === 0) {
    return null;
  }
  return result.rows[0];
};

export const deleteDirector = async (id: number): Promise<boolean> => {
  const result = await pool.query('DELETE FROM directors WHERE directorID = $1 RETURNING *', [id]);
  return result.rows.length > 0;
};
