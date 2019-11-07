const environmentalVariables = require('./Config/EnvironmentVariables.js');
const loadPakcages           = require('./BackEnd/Loaders/PackageLoader.js');
const loadRoutes             = require('./BackEnd/Routes.js');
const express                = require("express");
const app                    = express();

let viewPath = __dirname + "/FrontEnd/"; // Taesa API path on project
loadPakcages(app,viewPath);
loadRoutes(app,viewPath);

//Runs the server and makes it listen to port 3000
app.listen(environmentalVariables.default.port,function(){
    console.log("Listening on port " + environmentalVariables.default.port);
});