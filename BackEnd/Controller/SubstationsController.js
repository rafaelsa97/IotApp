const SubstationsModel = require('../Models/SubstationsModel');
const _ = require('underscore');

class SubstationsController {
    /**
     * * getAllSubstationsInfo()
     * Loads all substations info
     * ! Data persisted on "subestacoes" database table.
     * TODO Cache information for faster calls
     */
    static getAllSubstationsInfo() {
        return new Promise((resolve,reject) => {
            SubstationsModel.findAll()
            .then(response => {
                resolve(response);
            }).catch((err) =>{
                reject("Couldn't retrieve Substations data from database.\n" + err);
            });
        });
    }
}

module.exports = SubstationsController;