const express = require("express");
const app     = express();
const path    = require('path');

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
    app.use('/bootstrap', express.static(__dirname + '\\node_modules\\bootstrap\\dist')); // Set the bootstrap path
    app.use('/css', express.static(__dirname + '\\Frontend\\Resources\\css')); // Set the bootstrap path

    app.get("/",function(req,res)
    {
        res.sendFile(path.join(viewPath + 'index.html')); // Send index page to browser
    });
}

//Runs the server and makes it listen to port 3000
app.listen(3000,function(){
    console.log("Listening on port 3000!");
});