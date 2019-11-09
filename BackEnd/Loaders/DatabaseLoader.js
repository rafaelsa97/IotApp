const envVariables = require('../../Config/EnvironmentVariables.js');
const dataBase     = require('sequelize');

module.exports = function connectDatabases(){
    const mysql = new dataBase(envVariables.default.database.databaseName,envVariables.default.database.user,envVariables.default.database.password,{
        host   : "localhost",
        dialect: "mysql"
    });

    mysql.authenticate().then(() =>{
        console.log("Banco de dados conectado com sucesso!");
    }).catch((err) =>{
        console.log("Falha ao conectar ao banco de dados: " + err);
    })

    return mysql;
}