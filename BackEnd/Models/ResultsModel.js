const Sequelize = require('sequelize');
const db        = require('../Controller/DatabaseConnection');

/**
 * * Results database object
 * * Table: resultados
 */
const Results = db.define('resultados', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    date: {
        type: Sequelize.TEXT
    },
    towerindex: {
        type: Sequelize.INTEGER
    },
    distance: {
        type: Sequelize.NUMBER
    },
    latitude: {
        type: Sequelize.DOUBLE
    },
    longitude: {
        type: Sequelize.DOUBLE
    }
});

db.sync(); // Sync the model to the real database table
module.exports = Results;