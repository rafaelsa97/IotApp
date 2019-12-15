const TowersBasicModel = require('../Models/TowersModel');
const TowersCompleteModel = require('../Models/TowersCompleteModel');
const _ = require('underscore');

class TowersController {
    /**
     * * getAllTowers()
     * Loads all towers positioned in transmission lines
     * ! Data persisted on "torres" database table.
     * TODO Cache information for faster calls
     * TODO Organize arrays by network name
     */
    static getAllTowersPositions() {
        return new Promise((resolve,reject) => {
            TowersCompleteModel.findAll({
                attributes: ['ds_linha_transmissao', 'coord_x', 'coord_y']
            }).then(response => {
                var groupedTowers = _.groupBy(response,'ds_linha_transmissao');
                resolve(groupedTowers);
            }).catch((err) =>{
                reject("Couldn't retrieve Lines data from database.\n" + err);
            });
        });
    }

    static getAllTowersInfo(){

    }
}

module.exports = TowersController;