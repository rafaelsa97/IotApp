const envVariables = require('../../Config/EnvironmentVariables.js');
const Sequelize = require('sequelize');

const mysql = new Sequelize(envVariables.default.database.databaseName, envVariables.default.database.user, envVariables.default.database.password,
    {
        host: "localhost",
        dialect: "mysql"
    },
    {
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

mysql.authenticate().then(() => {
    console.log("Database connected successfuly!");
}).catch((err) => {
    console.log("Error on database connection.\n" + err);
});

module.exports = mysql;