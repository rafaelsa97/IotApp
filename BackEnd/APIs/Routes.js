const path     = require("path");
const mysql    = require('../Database/mySqlConnection.js');
/**
 * * Teste
 * ? Teste
 */
module.exports = function loadRoutes(app,viewPath,db){
    // Usual routes
    app.get("/",function(req,res)
    {
        mysql.getConnection(function(err, mclient) {
            console.log("Chegamos até aqui");
            mclient.query("SELECT * FROM raios", function (err, result, fields) {
                if (err) throw err;
                console.log(result);
              });
        });
        res.sendFile(path.join(viewPath + 'index.html')); // Send index page to browser
    });

    // API Taesa
    app.get("/taesa_api",function(req,res)
    {
        res.sendFile(path.join(viewPath + '/TaesaAPI/index.html')); // Send index page to browser
    });

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
    });
};