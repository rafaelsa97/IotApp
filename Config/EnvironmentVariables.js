const dotenv = require('dotenv');
// config() will read your .env file, parse the contents, assign it to process.env.
dotenv.config();

exports.default = {
    port: process.env.PORT,
    database: {
        databaseName: process.env.DATABASE_NAME,
        databaseHost: process.env.DATABASE_HOST,
        user        : process.env.DATABASE_USER,
        password    : process.env.DATABASE_PASSWORD
    }
};