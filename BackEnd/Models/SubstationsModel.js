const Sequelize = require('sequelize');
const db        = require('../Controller/DatabaseConnection');

/**
 * * Substations database object
 * * Table: subestacoes
 */
const Substations = db.define('subestacoes', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    objectid_1: {
        type: Sequelize.BIGINT
    },
    sg_subestacao: {
        type: Sequelize.TEXT
    },
    sg_concessao: {
        type: Sequelize.TEXT
    },
    dt_operacao: {
        type: Sequelize.TEXT
    },
    potencia_mva: {
        type: Sequelize.TEXT
    },
    vl_propriedade: {
        type: Sequelize.INTEGER
    },
    coord_x: {
        type: Sequelize.DOUBLE
    },
    coord_y: {
        type: Sequelize.DOUBLE
    }
});

db.sync(); // Sync the model to the real database table
module.exports = Substations;