/*
  Pool
  - Connection pools help reduce the time spent connecting to the MySQL server by reusing a previous connection
    > leaving them open instead of closing when you are done with them.

  - This improves the latency of queries as you avoid all of the overhead that comes with establishing a new connection.



  (1) db.js



  - create .env
    > secure sensitive info when upload to git
    > when upload to prod, we just need to change the string in .env



  - 2 ways: 
    @@ import without /promise
      import mysql from 'mysql2'
      const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '2e7etrEp',
        database: 'notes_app',
      }).promise()

    @@ import with /promise
      import mysql from 'mysql2/promise'
      const pool = mysql.createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
      })

*/
