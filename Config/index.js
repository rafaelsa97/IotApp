const dotenv = require('dotenv');
// config() will read your .env file, parse the contents, assign it to process.env.
dotenv.config();

exports.default = {
    port     : process.env.PORT,
    bootstrap: process.env.BOOTSTRAP_PATH,
    css      : process.env.CSS_PATH
};