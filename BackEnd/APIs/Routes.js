const path      = require("path");
const Lines     = require('../Models/LinesModel');
const Towers    = require('../Models/TowersModel');

module.exports = function loadRoutes(app, viewPath) {
    /**
     * * Home page
     * * This route loads the home page, displaying the map and the line assets
     */
    app.get("/", function (req, res) {
        res.sendFile(path.join(viewPath + 'index.html')); // Send index page to browser
    });

    /**
     * * Lines API
     * Loads all transmission lines
     * ! Data persisted on "linhas" database table.
     * TODO Make a routine to retrieve data from Taesa API
     */
    app.get("/Lines", function (req, res) {
        try {
            Lines.findAll().then(response => {
                res.send(JSON.stringify(response))
            }).catch((err) =>{
                reject("Couldn't retrieve Lines data from database.\n" + err);
            });
        }
        catch (error) {
            console.log("Couldn't retrieve Lines data from database:\n" + error);
        }
    });

    /**
     * * Towers API
     * Loads all towers positioned in transmission lines
     * ! Data persisted on "torres" database table.
     * TODO Make a routine to retrieve data from Taesa API
     */
    app.get("/Towers", function (req, res) {
        try {
            console.log(Towers)
            Towers.findAll().then(response => {
                res.send(JSON.stringify(response))
            }).catch((err) =>{
                reject("Couldn't retrieve Towers data from database.\n" + err);
            });
        }
        catch (error) {
            console.log("Couldn't retrieve Lines data from database:\n" + error);
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