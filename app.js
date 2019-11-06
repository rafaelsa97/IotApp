const express = require("express");
const dotenv  = require("dotenv");
const path    = require("path");
const app     = express();
dotenv.config(); // Load all environmental variables

let viewPath = __dirname + "/FrontEnd/"; // Taesa API path on project

API_Taesa: {
    app.get("/taesa_api",function(req,res)
    {
        res.sendFile(path.join(viewPath + '/TaesaAPI/index.html')); // Send index page to browser
    });

    app.use(express.urlencoded()); // Gets the submit parameter from POST request

    app.post('/taesa_api/map', (req, res) => {
        switch(req.body.Asset){
            case "Linhas":
                res.sendFile(path.join(viewPath + '/TaesaAPI/lines.html')); // Send index page to browser
                break;
            case "Torres":
                res.sendFile(path.join(viewPath + '/TaesaAPI/towers.html')); // Send index page to browser
                break;
            case "Subestações":
                res.sendFile(path.join(viewPath + '/TaesaAPI/substations.html')); // Send index page to browser
                break;
        }
    })
}

usualRouting: {
    app.use('/bootstrap', express.static(__dirname + process.env.BOOTSTRAP_PATH)); // Set the bootstrap path
    app.use('/css', express.static(__dirname + process.env.CSS_PATH)); // Set the bootstrap path

    app.get("/",function(req,res)
    {
        res.sendFile(path.join(viewPath + 'index.html')); // Send index page to browser
    });
}

//Runs the server and makes it listen to port 3000
app.listen(process.env.PORT,function(){
    console.log("Listening on port " + process.env.PORT);
});