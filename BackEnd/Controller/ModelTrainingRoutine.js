const towersController = require('./TowersController');
const linesController  = require('./LinesController');
const Enumerable       = require('linq-es2015');

class ModelTrainingRoutine {
    
    /**
     * * runModelTraining(time)
     * Gets needed data and train the model every "time" minutes
     * @param minutes: time in minutes in which the function will be executed
     */
    static runModelTraining(minutes) {
        let period = minutes * 60 * 1000; // Get the miliseconds equivalent value
        setInterval(async function() {
            var currentDate = new Date();
            console.log("Starting model training at " + currentDate.toString());
            
            try{
                // Get towers and lines information asynchronously
                let [towers,lines] = await Promise.all([towersController.getSelectedTowersInfo(), linesController.getSelectedLinesInfo()]);
                // Join towers and line relevant information by 'ds_linha_transmissao'
                let message = Enumerable.asEnumerable(towers)
                .Join(lines,
                    towerElement => towerElement.ds_linha_transmissao,
                    lineElement => lineElement.ds_linha_transmissao,
                    (towerElement, lineElement) => {
                        return {
                            towerModelCode:     towerElement.cd_modelo,
                            soilType:           towerElement.cd_tipo_solo,
                            longitude:          towerElement.coord_x,
                            latitude:           towerElement.coord_y,
                            disposition:        towerElement.ds_disposicao,
                            lineName:           towerElement.ds_linha_transmissao,
                            localName:          towerElement.ds_local,
                            towerMaterial:      towerElement.ds_material,
                            towerObservations:  towerElement.ds_observacao,
                            towerAvaliability:  towerElement.ds_status_disponibilidade,
                            towerSupport:       towerElement.ds_subtipo_suporte,
                            towerType:          towerElement.ds_tipo_equipamento,
                            supportType:        towerElement.ds_tipo_suporte,
                            structureNumber:    towerElement.nu_estrutura,
                            localCode:          towerElement.sg_local,
                            height:             towerElement.vl_altitude,
                            nominalHeight:      towerElement.vl_altura_nominal,
                            totalHeight:        towerElement.vl_altura_total,
                            conductorQuota:     towerElement.vl_cota_condutor,
                            lightningRodQuota:  towerElement.vl_cota_pararaios,
                            baseDimension:      towerElement.vl_dim_base,
                            conductorWeight:    towerElement.vl_vao_peso_condutor,
                            lightningRodweight: towerElement.vl_vao_peso_pararaio,
                            lineLength:         lineElement.comprimento,
                            voltageClass:       lineElement.vl_classe_tensao,
                            power:              lineElement.vl_potencia,
                            nominalVoltage:     lineElement.vl_tensao_nominal
                        }
                    }
                ).ToArray();
            }
            catch(err){
                console.log(err);
            }
            console.log("Finishing model training at " + currentDate.toString());
        }, period);
    }
}

module.exports = ModelTrainingRoutine;