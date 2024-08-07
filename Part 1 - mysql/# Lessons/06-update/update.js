let mysql = require('mysql')
require('dotenv').config()

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

connection.connect((err) => {
  if (err) return console.error(err.message)

  // 1.
  let sql = `UPDATE todos
              SET completed = ?
              WHERE id = ?`

  // 2.
  let data = [false, 1]

  // 3.
  connection.query(sql, data, (error, results, fields) => {
    if (error) return console.error(error.message)
    console.log('Rows affected:', results.affectedRows)
  })

  connection.end()
})
