const Sequelize = require('sequelize');
const db        = require('../Controller/databaseConnection');

/**
 * * Towers database object
 * * Table: torres
 */

const TowersComplete = db.define('torres_completas', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    objectid_1: {
        type: Sequelize.INTEGER
    },
    id_pm_concessao: {
        type: Sequelize.INTEGER
    },
    sg_concessao: {
        type: Sequelize.STRING
    },
    ds_linha_transmissao: {
        type: Sequelize.STRING
    },
    nu_estrutura: {
        type: Sequelize.STRING
    },
    nu_projeto: {
        type: Sequelize.STRING
    },
    cd_serie: {
        type: Sequelize.STRING
    },
    cd_modelo: {
        type: Sequelize.STRING
    },
    nu_extensao: {
        type: Sequelize.STRING
    },
    vl_altura_total: {
        type: Sequelize.STRING
    },
    vl_altura_nominal: {
        type: Sequelize.STRING
    },
    ds_tipo_suporte: {
        type: Sequelize.STRING
    },
    ds_subtipo_suporte: {
        type: Sequelize.STRING
    },
    ds_disposicao: {
        type: Sequelize.STRING
    },
    ds_material: {
        type: Sequelize.STRING
    },
    vl_altitude: {
        type: Sequelize.DOUBLE
    },
    vl_deflexao: {
        type: Sequelize.STRING
    },
    vl_perna1: {
        type: Sequelize.STRING
    },
    vl_perna2: {
        type: Sequelize.STRING
    },
    vl_perna3: {
        type: Sequelize.STRING
    },
    vl_perna4: {
        type: Sequelize.STRING
    },
    ps_estrutura: {
        type: Sequelize.STRING
    },
    vl_elevacao_perna_ref: {
        type: Sequelize.STRING
    },
    cd_fundacao_mastro_provisorio: {
        type: Sequelize.STRING
    },
    cd_fundacao_perna_provisorio: {
        type: Sequelize.STRING
    },
    vl_dim_base: {
        type: Sequelize.INTEGER
    },
    cd_tipo_solo: {
        type: Sequelize.STRING
    },
    dt_operacao: {
        type: Sequelize.STRING
    },
    dt_desmontagem: {
        type: Sequelize.STRING
    },
    coord_x: {
        type: Sequelize.DOUBLE
    },
    coord_y: {
        type: Sequelize.DOUBLE
    },
    vl_vao_peso_condutor: {
        type: Sequelize.STRING
    },
    vl_vao_peso_pararaios: {
        type: Sequelize.STRING
    },
    vl_vao_vento: {
        type: Sequelize.STRING
    },
    vl_cota_condutor: {
        type: Sequelize.DOUBLE
    },
    vl_cota_pararaios: {
        type: Sequelize.STRING
    },
    cd_arranjo_condutor_provisorio: {
        type: Sequelize.STRING
    },
    cd_arranjo_pararaios_provisorio: {
        type: Sequelize.STRING
    },
    cx_opgw: {
        type: Sequelize.STRING
    },
    vl_folha_pp: {
        type: Sequelize.INTEGER
    },
    ds_observacao: {
        type: Sequelize.STRING
    },
    sg_subestacao_1: {
        type: Sequelize.STRING
    },
    sg_subestacao_2: {
        type: Sequelize.STRING
    },
    nm_subestacao_1: {
        type: Sequelize.STRING
    },
    nm_subestacao_2: {
        type: Sequelize.STRING
    },
    id_local: {
        type: Sequelize.INTEGER
    },
    sg_local: {
        type: Sequelize.STRING
    },
    ds_local: {
        type: Sequelize.STRING
    },
    ds_tipo_equipamento: {
        type: Sequelize.STRING
    },
    nm_equipamento: {
        type: Sequelize.STRING
    },
    id_equipamento_sap: {
        type: Sequelize.INTEGER
    },
    id_pm_equipamento: {
        type: Sequelize.INTEGER
    },
    dt_inclusao: {
        type: Sequelize.STRING
    },
    ds_status_disponibilidade: {
        type: Sequelize.STRING
    },
    ds_status_rede: {
        type: Sequelize.STRING
    },
    ds_status_restricao: {
        type: Sequelize.STRING
    },
    globalid: {
        type: Sequelize.STRING
    },
});

db.sync(); // Sync the model to the real database table
module.exports = TowersComplete;