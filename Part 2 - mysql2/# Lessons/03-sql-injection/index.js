/*
  SQL Injection
  - This looks good, but we shouldn't just be dumping the id into the query string like this. 
  - It's very likely that this number will come from somewhere untrusted. 
  - Through a url perhaps where someone could try and manipulate the value to perform a SQL injection attack. 
  - To prevent this, we should use "prepared statements". 
  - This means putting a "question mark" where the potentially unsafe value should be and passing the value to the query function in an array.


****************************

  1. db.js


****************************

  `SELECT * FROM notes WHERE id = ?`, [id]
    > The order of the values in params array just has to match the order of the question marks as they appear in the query.
    > We get back a result object, but this isn't the item added, it's the metadata about the insert. Keep this in mind if you ever try to use the result object.


****************************

  Prepared Statements -> ?
  -> SELECT * FROM notes WHERE id = ?



*/
