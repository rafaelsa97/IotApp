const express = require("express");
const app     = express();
const path    = require('path');

let viewPath = __dirname + "/FrontEnd/"; // Taesa API path on project

usualRouting: {
    app.use('/css', express.static(__dirname + '\\Frontend\\Resources\\css')); // Set the bootstrap path
    app.use('/js', express.static(__dirname + '\\Frontend\\Resources\\Javascript')); // Set the bootstrap path

    app.get("/",function(req,res)
    {
        res.sendFile(path.join(viewPath + '/index.html')); // Send index page to browser
    });
}

//Runs the server and makes it listen to port 3000
app.listen(3000,function(){
    console.log("Listening on port 3000!");
});