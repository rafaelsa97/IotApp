const Sequelize = require('sequelize');
const db        = require('../Controller/DatabaseConnection');

/**
 * * Electric Discharge database object
 * * Table: raios
 */
const ElectricDischarge = db.define('raios', {
    // attributes
    id: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    raios_data: {
        type: Sequelize.DATE
    },
    latitude: {
        type: Sequelize.DOUBLE
    },
    longitude: {
        type: Sequelize.DOUBLE
    },
    corrente_pico: {
        type: Sequelize.DECIMAL
    },
    semieixo_maior: {
        type: Sequelize.FLOAT
    },
    semieixo_menor: {
        type: Sequelize.FLOAT
    },
    azimute: {
        type: Sequelize.DECIMAL
    }
});

db.sync(); // Sync the model to the real database table
module.exports = ElectricDischarge;