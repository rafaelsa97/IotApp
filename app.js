const app  = require("express")();
const path = require('path');

let viewPath = __dirname + "/FrontEnd/TaesaAPI/"; // Taesa API path on project

RotasSimples: {
    app.get("/",function(req,res)
    {
        res.sendFile(path.join(viewPath + 'index.html')); // Send index page to browser
    });
}

//Runs the server and makes it listen to port 3000
app.listen(3000,function(){
    console.log("Listening on port 3000!")
});