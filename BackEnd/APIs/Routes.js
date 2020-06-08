const path             = require('path');
const TowersController = require('../Controller/TowersController');

module.exports = function loadRoutes(app, viewPath) {
    /**
     * * Home page
     * * This route loads the home page, displaying the map and the line assets
     */
    app.get("/", function (req, res) {
        res.sendFile(path.join(viewPath + 'index.html')); // Send index page to browser
    });

    /**
     * This endpoint returns all towers information
     */
    app.get("/Towers", function (req, res) {
        try{
            TowersController.getAllTowersPositions()
            .then(result => {
                res.send(JSON.stringify(result));
            });
        }
        catch(err){
            console.log(err);
        }
    });

    // API Taesa
    app.get("/taesa_api", function (req, res) {
        res.sendFile(path.join(viewPath + '/TaesaAPI/index.html')); // Send index page to browser
    });

    app.post('/taesa_api/map', (req, res) => {
        switch (req.body.Asset) {
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