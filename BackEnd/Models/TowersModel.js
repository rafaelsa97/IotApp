const Sequelize = require('sequelize');
const db        = require('../Controller/databaseConnection');

/**
 * * Towers database object
 * * Table: torres
 */

const Towers = db.define('torres', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    ds_linha_transmissao: {
        type: Sequelize.STRING
    },
    ds_subtipo_suporte: {
        type: Sequelize.STRING
    },
    coord_x: {
        type: Sequelize.DOUBLE
    },
    coord_y: {
        type: Sequelize.DOUBLE
    },
    sg_local: {
        type: Sequelize.STRING
    },
    nm_equipamento: {
        type: Sequelize.STRING
    }
});

Towers.schema("pfc");

db.sync(); // Sync the model to the real database table
module.exports = Towers;