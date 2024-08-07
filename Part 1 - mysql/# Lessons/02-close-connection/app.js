/*
  Closing database connection
  - To close a database connection gracefully, you call the end() method on the connection object.
  - The end() method ensures that all remaining queries will be executed before the database connection is closed.


**************************

  - To force the connection to close immediately, you can use the destroy() method. The destroy() method guarantees that no more callbacks or events will be triggered for the connection.

      connection.destroy();


*/
