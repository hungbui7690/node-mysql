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

  let sql = `DELETE FROM todos WHERE id = ?`

  let data = [1]

  connection.query(sql, data, (error, results, fields) => {
    if (error) return console.error(error.message)
    console.log('Rows affected:', results.affectedRows)
  })

  // close the database connection
  connection.end()
})
