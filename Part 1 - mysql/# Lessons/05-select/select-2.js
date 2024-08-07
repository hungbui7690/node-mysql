// Preventing SQL injection

let mysql = require('mysql')
require('dotenv').config()

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

let id = process.argv[2] // pass argument to query

connection.connect((err) => {
  if (err) return console.error(err.message)

  // 1. This will create SQL Injection
  // let sql = `SELECT * FROM todos WHERE id=` + id

  // 2. To address the SQL injection, you need to use either the placeholder (?) and bind the value to the parameter:
  // let sql = `SELECT * FROM todos WHERE completed=?`

  // 3. or the escape() method of the mysql or connection object as follows:
  let sql = `SELECT * FROM todos WHERE id = ` + mysql.escape(id)

  connection.query(sql, [true], (error, results, fields) => {
    if (error) return console.error(error.message)
    console.log(results)
  })

  // close the database connection
  connection.end()
})
