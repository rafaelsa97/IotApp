// const express = require("express");
// const mysql   = require("mysql");
// const app     = express();

// //Create connection
// const db = mysql.createConnection({
//     host:     'localhost',
//     user:     'root',
//     password: '123456'
//     //database: 'nodemysql'
// });

// // Connect
// db.connect( function(err) {
//     if(err){
//         console.log("Failed to connect to data base: " + err);
//         throw err;
//     }
//     console.log("Mysql connected!");
// });

// // Create Data Base
// app.get("/createdb", (req,res) =>{
//     let sql = 'CREATE DATABASE nodemysql';
//     db.query(sql, function(err,result){
//         if(err){
//             throw err;
//         }
//         else{
//             res.send('database created!');
//             console.log(result);
//         }
//     });
// });

// // Start server
// app.listen(3306,() => {
//     console.log("Server listening to port 3306.");
// });


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'pfctaesa'
});
 
connection.connect((err) =>{
  if(err){
    throw err;
  }
  else{
    console.log("Connected to database!!!");
  }
});
 
connection.query('SELECT * FROM pfc.queimadas', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();