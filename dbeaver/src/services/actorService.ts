import pool from '../config/db';
import { IActor } from '../models/actor';

export const getAllActors = async (): Promise<IActor[]> => {
  const result = await pool.query('SELECT * FROM actors');
  return result.rows;
};

export const getActorById = async (id: number): Promise<IActor | null> => {
  const result = await pool.query('SELECT * FROM actors WHERE actorID = $1', [id]);
  if (result.rows.length === 0) {
    return null;
  }
  return result.rows[0];
};

export const createActor= async (actor: IActor): Promise<IActor> => {
  const { name, nationality, dob } = actor;
  const result = await pool.query(
    'INSERT INTO actors (name, nationality, dob) VALUES ($1, $2, $3) RETURNING *',
    [name, nationality, dob]
  );
  return result.rows[0];
};

export const updateActor = async (id: number, actor: IActor): Promise<IActor | null> => {
  const { name, nationality, dob } = actor;
  const result = await pool.query(
    'UPDATE actors SET name = $1, nationality = $2, dob = $3 WHERE actorID = $4 RETURNING *',
    [name, nationality, dob, id]
  );
  
  if (result.rows.length === 0) {
    return null;
  }
  return result.rows[0];
};

export const deleteActor = async (id: number): Promise<boolean> => {
  const result = await pool.query('DELETE FROM actors WHERE actorID = $1 RETURNING *', [id]);
  return result.rows.length > 0;
};
