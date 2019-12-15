class ModelTrainingRoutine {
    /**
     * * runModelraining(time)
     * Gets needed data and train the model every "time" minutes
     * @param minutes: time in minutes in which the function will be executed
     */

    static runModelTraining(minutes) {
        var period = minutes * 60 * 1000;
        setInterval(function() {
            console.log("I am doing my 5 minutes check");
            // do your stuff here
        }, period);
    }
}

module.exports = ModelTrainingRoutine;