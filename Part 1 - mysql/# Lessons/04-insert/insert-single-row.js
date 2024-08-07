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

  // insert statement
  let sql = `INSERT INTO todos(title,completed)
             VALUES(?,?)`

  let todo = ['Insert a new row with placeholders', false]

  // execute the insert statement
  connection.query(sql, todo, (err, results, fields) => {
    if (err) return console.error(err.message)

    console.log('Todo Id:' + results.insertId)
  })

  // close the database connection
  connection.end()
})
