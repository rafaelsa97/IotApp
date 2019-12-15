const TowersBasicModel = require('../Models/TowersModel');
const TowersCompleteModel = require('../Models/TowersCompleteModel');
const _ = require('underscore');

class TowersController {
    /**
     * * getAllTowers()
     * Loads all towers positioned in transmission lines
     * ! Data persisted on "torres_completas" database table.
     * TODO Cache information for faster calls
     */
    static getAllTowersPositions() {
        return new Promise((resolve,reject) => {
            TowersCompleteModel.findAll({
                attributes: ['ds_linha_transmissao', 'coord_x', 'coord_y']
            }).then(response => {
                var groupedTowers = _.groupBy(response,'ds_linha_transmissao');
                resolve(groupedTowers);
            }).catch((err) =>{
                reject("Couldn't retrieve Towers data from database.\n" + err);
            });
        });
    }

    /**
     * * getSelectedTowersInfo()
     * Loads all towers information to model training algorithm
     * ! Data persisted on "torres_completas" database table.
     */
    static getSelectedTowersInfo(){
        return new Promise((resolve,reject) => {
            TowersCompleteModel.findAll({
                attributes: [
                                'cd_modelo',
                                'cd_tipo_solo',
                                'coord_x',
                                'coord_y',
                                'ds_disposicao',
                                'ds_linha_transmissao',
                                'ds_local',
                                'ds_material',
                                'ds_observacao',
                                'ds_status_disponibilidade',
                                'ds_subtipo_suporte',
                                'ds_tipo_equipamento',
                                'ds_tipo_suporte',
                                'nu_estrutura',
                                'sg_local',
                                'vl_altitude',
                                'vl_altura_nominal',
                                'vl_altura_total',
                                'vl_cota_condutor',
                                'vl_cota_pararaios',
                                'vl_dim_base',
                                'vl_vao_peso_condutor',
                                'vl_vao_peso_pararaios'
                            ]
            }).then(response => {
                var groupedTowers = _.groupBy(response,'ds_linha_transmissao');
                resolve(groupedTowers);
            }).catch((err) =>{
                reject("Couldn't retrieve Lines data from database.\n" + err);
            });
        });
    }
}

module.exports = TowersController;