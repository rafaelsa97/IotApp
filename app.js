const express = require("express");
const app     = express();
const path    = require('path');

let viewPath = __dirname + "/FrontEnd/TaesaAPI/"; // Taesa API path on project

RotasSimples: {
    app.get("/",function(req,res)
    {
        res.sendFile(path.join(viewPath + 'index.html')); // Send index page to browser
    });
    app.use(express.urlencoded());
    app.post('/', (req, res) => {
        switch(req.body.Asset){
            case "Linhas":
                res.sendFile(path.join(viewPath + 'lines.html')); // Send index page to browser
                break;
            case "Torres":
                res.sendFile(path.join(viewPath + 'towers.html')); // Send index page to browser
                break;
            case "Subestações":
                res.sendFile(path.join(viewPath + 'substations.html')); // Send index page to browser
                break;
        }
    })
}

//Runs the server and makes it listen to port 3000
app.listen(3000,function(){
    console.log("Listening on port 3000!")
});