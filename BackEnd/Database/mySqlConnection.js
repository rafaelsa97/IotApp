const envVariables = require('../../Config/EnvironmentVariables.js');
const mysql        = require("mysql");
const pool         = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : envVariables.default.database.user,
    password        : envVariables.default.database.password,
    database        : envVariables.default.database.databaseName
});

exports.getConnection = function(callback) {
  pool.getConnection(function(err, conn) {
    if(err) {
      return callback(err);
    }
    callback(err, conn);
  });
};