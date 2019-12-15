const TowersController = require('./TowersController');
const LinesController = require('./LinesController');

class ModelTrainingRoutine {
    /**
     * * runModelraining(time)
     * Gets needed data and train the model every "time" minutes
     * @param minutes: time in minutes in which the function will be executed
     */

    static runModelTraining(minutes) {
        var period = minutes * 60 * 1000; // Get the miliseconds equivalent value
        setInterval(function() {
            var currentDate = new Date();
            console.log("Starting model training at " + currentDate.toString());
            
            try{
                // Get towers and lines information asynchronously

                // let [towers, lines] = await Promise.all([TowersController.getSelectedTowersInfo(), LinesController.getSelectedLinesInfo()]);
            }
            catch(err){
                console.log(err);
            }

        }, period);
    }
}

module.exports = ModelTrainingRoutine;