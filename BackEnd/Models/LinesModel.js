const Sequelize = require('sequelize');
const db        = require('../Controller/databaseConnection');

/**
 * * Lines database object
 * * Table: linhas
 */
const Lines = db.define('linhas', {
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
    NM_LINHA: {
        type: Sequelize.STRING
    },
    CD_COR_LINHA: {
        type: Sequelize.STRING
    },
    VL_TENSAO: {
        type: Sequelize.INTEGER
    },
    VL_PRIORIDADE: {
        type: Sequelize.INTEGER
    },
    ID_REGIONAL: {
        type: Sequelize.INTEGER
    },
    ID_CONCESSAO: {
        type: Sequelize.INTEGER
    },
    ID_TIPO_ATIVO: {
        type: Sequelize.DOUBLE
    }
});

db.sync(); // Sync the model to the real database table
module.exports = Lines;