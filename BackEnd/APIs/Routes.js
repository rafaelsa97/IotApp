const path     = require("path");
const mysql    = require('../Database/mySqlConnection.js');
/**
 * * Teste
 * ? Teste
 */
module.exports = function loadRoutes(app,viewPath,db){
    /**
     * ! USUAL ROUTES
     */

    /**
     * * Home page
     * * This route loads the home page, displaying the map and the line assets
     */
    app.get("/",function(req,res)
    {
        res.sendFile(path.join(viewPath + 'index.html')); // Send index page to browser
    });

    /**
     * * Lines API
     * * Loads all line points
     */
    app.get("/Lines",function(req,res){
        try {
            let teste = mysql.getConnection(function(err, mclient) {
                console.log("Chegamos até aqui");
                return mclient.query("SELECT * FROM raios", function (err, result, fields) {
                    if (err) throw err;
                    return result;
                  });
            });
        } catch (error) {
            console.log(error);
        }
    })

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