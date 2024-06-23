import mysql from 'mysql2/promise'
import 'dotenv/config'

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
})

const getAllNotes = async () => {
  const [rows] = await pool.query('select * from notes')
  return rows
}

// (1)
export async function getNote(id) {
  const [rows] = await pool.query(
    `
  SELECT * 
  FROM notes
  WHERE id = ?
  `,
    [id]
  )
  return rows[0]
}

const note = await getNote(2)
console.log(note)
