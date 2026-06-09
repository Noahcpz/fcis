import { query } from './db.js'

export async function getAllPrestations() {
  return query('SELECT * FROM prestations_cards ORDER BY id', [])
}

export async function getPrestationById(id) {
  const rows = await query('SELECT * FROM prestations_cards WHERE id = ?', [id])
  return rows[0]
}