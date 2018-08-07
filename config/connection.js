var mysql = require("mysql");
var connection;

if (process.env.burgersDB){
  connection = mysql.createConnection(process.env.burgersDB);
}else{
  connection = mysql.createConnection({
  	port: 8889,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
  })
}

connection.connect();
module.exports = connection;
