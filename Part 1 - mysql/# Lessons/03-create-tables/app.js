/*
  Creating Tables
  - To create a table from Node.js, you use these steps:
    + Connect to the MySQL database server.
    + Call the query() method on the connection object to execute a CREATE TABLE statement.
    + Close the database connection.

  - The query() method accepts an SQL statement and a callback. The callback function takes three arguments:
    + error: stores the detailed error if an error occurred during the execution of the statement.
    + results: holds the results of the query.
    + fields: holds results field information if any.


**************************

  1. create-table.js


**************************

  Verifying the table creation
  - First, open the Command Prompt on Windows or Terminal on Unix-like systems and connect to the MySQL Server:

      cd "C:\Program Files\MySQL\MySQL Server 8.0\bin"
      .\mysql -u root -p todoapp

  - Second, list all tables in the todoapp database:

      show tables;



*/
