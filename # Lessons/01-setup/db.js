import mysql from 'mysql2/promise' // (1) Get the client

// (2) Create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2e7etrEp',
  database: 'notes_app',
})

// (3) run simple query
try {
  const [results, fields] = await connection.query('SELECT * FROM NOTES')

  console.log(results) // results contains rows returned by server
  console.log(fields) // fields contains extra meta data about results, if available
} catch (err) {
  console.log(err)
}
