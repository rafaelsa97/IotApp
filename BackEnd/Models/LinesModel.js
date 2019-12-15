const Sequelize = require('sequelize');
const db        = require('../Controller/DatabaseConnection');

/**
 * * Lines database object
 * * Table: linhas
 */
const Lines = db.define('linhas', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    id_ons: {
        type: Sequelize.TEXT
    },
    sg_concessao: {
        type: Sequelize.TEXT
    },
    ds_linha_transmissao: {
        type: Sequelize.TEXT
    },
    comprimento: {
        type: Sequelize.INTEGER
    },
    vl_classe_tensao: {
        type: Sequelize.INTEGER
    },
    vl_tensao_nominal: {
        type: Sequelize.INTEGER
    },
    vl_corrente_longa_duracao: {
        type: Sequelize.INTEGER
    },
    vl_corrente_curta_duracao: {
        type: Sequelize.INTEGER
    },
    vl_potencia: {
        type: Sequelize.INTEGER
    },
    dt_operacao: {
        type: Sequelize.BIGINT
    },
    in_prioridade: {
        type: Sequelize.INTEGER
    }
});

db.sync(); // Sync the model to the real database table
module.exports = Lines;