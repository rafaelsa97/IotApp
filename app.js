const environmentalVariables = require('./Config/EnvironmentVariables.js');
const modelTraining          = require('./BackEnd/Controller/ModelTrainingRoutine');
const loadPakcages           = require('./BackEnd/Loaders/PackageLoader.js');
const loadRoutes             = require('./BackEnd/APIs/Routes.js');
const express                = require("express");
const app                    = express();

let viewPath = __dirname + "/FrontEnd/"; // Taesa API path on project
loadPakcages(app,viewPath);
loadRoutes(app,viewPath);

modelTraining.runModelTraining(0.025); // Runs model training every N minutes

//Runs the server and makes it listen to port 3000
app.listen(environmentalVariables.default.port,function(){
    console.log("Listening on port " + environmentalVariables.default.port);
});

// test