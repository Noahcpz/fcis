import { query } from './db.js'

export async function getAllPrestationsDetail() {
  return query('SELECT * FROM prestations_detail ORDER BY id', [])
}

export async function getPrestationDetailById(id) {
  const rows = await query('SELECT * FROM prestations_detail WHERE id = ?', [id])
  return rows[0]
}

export async function getPrestationsDetailByPrestationId(prestation_id) {
  return query('SELECT * FROM prestations_detail WHERE prestation_id = ?', [prestation_id])
}