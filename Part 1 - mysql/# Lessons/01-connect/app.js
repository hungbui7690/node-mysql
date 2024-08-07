/*
  Setup 
  ~~ npm init -y
  ~~ npm install mysql


*************************

  Create Sample DB
  - cmd: 
    -> cd "C:\Program Files\MySQL\MySQL Server 8.0\bin"
	  -> .\mysql -u root -p

  - Create new DB 
      CREATE DATABASE todoapp;

************************

  Creating configuration file .env
  ~~ npm install dotenv

    DB_HOST=localhost
    DB_PORT=3306
    DB_USER=root
    DB_PASSWORD=
    DB_NAME=todoapp


************************

  Connecting to MySQL Server from Node.js

  1. create <connect.js>


*****************************

  1. Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
    - In MySQL 8.0, the default authentication plugin is caching_sha2_password, unlike MySQL 5.7, which uses the mysql_native_password plugin, supported by most clients.
    - Therefore, if you encounter compatibility issues, you must explicitly enable mysql_native_password for a given user using the following command:
  
      -> ALTER USER '<user>'@'localhost' IDENTIFIED WITH mysql_native_password BY '<password>';
      -> flush privileges;


*/
