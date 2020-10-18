const ResultsModel = require('../Models/ResultsModel');
const _ = require('underscore');

class ResultsController {
    /**
     * * getAllResultsInfo()
     * Loads all results info
     * ! Data persisted on "resultados" database table.
     * TODO Cache information for faster calls
     */
    static getAllResultsInfo() {
        return new Promise((resolve,reject) => {
            ResultsModel.findAll()
            .then(response => {
                resolve(response);
            }).catch((err) =>{
                reject("Couldn't retrieve Results data from database.\n" + err);
            });
        });
    }

    /**
     * * getSelectedResultsInfo()
     * Loads all results information to model training algorithm
     * ! Data persisted on "resultados" database table.
     */
    static getSelectedResultsInfo(){
        return new Promise((resolve,reject) => {
            ResultsModel.findAll({
                attributes: [
                                'date',
                                'towerindex',
                                'distance',
                                'latitude',
                                'longitude'
                            ]
            }).then(response => {
                resolve(response);
            }).catch((err) =>{
                reject("Couldn't retrieve Results data from database.\n" + err);
            });
        });
    }
}

module.exports = ResultsController;