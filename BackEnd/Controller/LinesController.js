const LinesModel = require('../Models/LinesModel');
const _ = require('underscore');

class LinesController {
    /**
     * * getAllLinesInfo()
     * Loads all lines info
     * ! Data persisted on "linhas" database table.
     * TODO Cache information for faster calls
     */
    static getAllLinesInfo() {
        return new Promise((resolve,reject) => {
            LinesModel.findAll()
            .then(response => {
                resolve(response);
            }).catch((err) =>{
                reject("Couldn't retrieve Lines data from database.\n" + err);
            });
        });
    }

    /**
     * * getSelectedLinesInfo()
     * Loads all lines information to model training algorithm
     * ! Data persisted on "linhas" database table.
     */
    static getSelectedLinesInfo(){
        return new Promise((resolve,reject) => {
            LinesModel.findAll({
                attributes: [
                                'comprimento',
                                'ds_linha_transmissao',
                                'vl_classe_tensao',
                                'vl_potencia',
                                'vl_tensao_nominal'
                            ]
            }).then(response => {
                resolve(response);
            }).catch((err) =>{
                reject("Couldn't retrieve Lines data from database.\n" + err);
            });
        });
    }
}

module.exports = LinesController;