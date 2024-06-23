import mysql from 'mysql2/promise'
import 'dotenv/config'

//////////////////////////
// (1) use createPool() instead of createConnection()
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
})

//////////////////////////
// (2) Method 1
// const result = await pool.query('select * from notes') //
// console.log(result) // data + metadata about the fields in the table
// console.log(result[0])

// Method 2: use destructure
// const [data] = await pool.query('select * from notes')
// console.log(data)

// Method 3: put in the function
const getAllNotes = async () => {
  const [rows] = await pool.query('select * from notes')
  return rows
}

const notes = await getAllNotes()
console.log(notes)

//////////////////////////
// (3) Maybe we don't want to get all notes, maybe we only want to get a single photo using its id.
const getNote = async (id) => {
  const [rows] = await pool.query(`
  SELECT * 
  FROM notes
  WHERE id = ${id}
  `)
  return rows
}

const note = await getNote(3)
console.log(note)
