const Sequelize = require('sequelize');
const db        = require('../Controller/databaseConnection');

/**
 * * Towers database object
 * * Table: torres
 */
const Towers = db.define('torres', {
    // attributes
    ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    DATA_CRIACAO: {
        type: Sequelize.DATE
    },
    DATA_ATUALIZACAO: {
        type: Sequelize.DATE
    },
    LATITUDE: {
        type: Sequelize.DOUBLE
    },
    LONGITUDE: {
        type: Sequelize.DOUBLE
    },
    ID_CLIENTE: {
        type: Sequelize.INTEGER
    },
    ID_ICONE: {
        type: Sequelize.INTEGER
    },
    NM_TORRE: {
        type: Sequelize.STRING
    },
    VL_ALTURA: {
        type: Sequelize.INTEGER
    },
    ID_REGIONAL: {
        type: Sequelize.INTEGER
    },
    ID_CONCESSAO: {
        type: Sequelize.INTEGER
    },
    ID_TIPO_ATIVO: {
        type: Sequelize.INTEGER
    }
});

db.sync(); // Sync the model to the real database table
module.exports = Towers;