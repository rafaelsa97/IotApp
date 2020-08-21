const envVariables = require('../../Config/EnvironmentVariables.js');
const Sequelize = require('sequelize');
require('dotenv').config();

const postgres = new Sequelize(envVariables.default.database.databaseName, envVariables.default.database.user, envVariables.default.database.password,
    {
        host: envVariables.default.database.databaseHost,
        dialect: "postgres"
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

postgres.authenticate().then(() => {
    console.log("Database connected successfuly!");
}).catch((err) => {
    console.log("Error on database connection.\n" + err);
});

module.exports = postgres;