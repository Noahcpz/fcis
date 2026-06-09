import { Pool } from 'pg'
import 'dotenv/config'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

const replaceQuestionMarks = (input) => {
  let index = 0
  return input.replace(/\?/g, () => `$${++index}`)
}

export function query(sql, params) {
  return pool.query(replaceQuestionMarks(sql), params).then(res => res.rows)
}

query('SELECT NOW()', [])
  .then(rows => console.log('✅ Connexion réussie :', rows))
  .catch(err => console.error('❌ Erreur :', err.message))