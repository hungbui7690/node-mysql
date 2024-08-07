/*
  MySQL Setup
  - To go to MySQL CLI:
    -> cd "C:\Program Files\MySQL\MySQL Server 8.0\bin"
	  -> .\mysql -u root -p


************************

  - In MySQL CLI:
    -> show databases;

  - Create new DB 
      CREATE DATABASE notes_app;
      USE notes_app;

      CREATE TABLE notes (
        id integer PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL,
        contents TEXT NOT NULL,
        created TIMESTAMP NOT NULL DEFAULT NOW()
      );

      INSERT INTO notes (title, contents)
      VALUES 
      ('My First Note', 'A note about something'),
      ('My Second Note', 'A note about something else');


************************

  Connect to MySQL DB From NodeJS 
  - we will use "MySQL2" library to connect to MySQL DB
  - for migration -> package: node-mysql2-migrations


************************

  @@ npm init -y
  -> add "type": "module" to package.json > otherwise, error

  @@ npm install --save mysql2


  1. create db.js
  -> create pool to connect to db


  - MySQL2 Docs: https://sidorares.github.io/node-mysql2/docs

*/
