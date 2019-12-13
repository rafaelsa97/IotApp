const TowersModel = require('../Models/TowersModel');

class TowersController {
    /**
     * * getAllTowers()
     * Loads all towers positioned in transmission lines
     * ! Data persisted on "torres" database table.
     * TODO Cache information for faster calls
     * TODO Organize arrays by network name
     */
    static getAllTowers() {
        return new Promise((resolve,reject) => {
            TowersModel.findAll().then(response => {
                resolve(response);
            }).catch((err) =>{
                reject("Couldn't retrieve Lines data from database.\n" + err);
            });
        });
    }

    
}

module.exports = TowersController;