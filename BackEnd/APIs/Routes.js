const path = require("path");
const Sequelize = require('sequelize');
const db = require('..//Controller/databaseConnection');
const User = require('../Models/UsersVO');
/**
 * * Teste
 * ? Teste
 */
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
     * * Loads all line points
     */
    app.get("/Lines", function (req, res) {
        try {
            User.findAll().then(users => {
                res.send(JSON.stringify(users, null, 4))
            }).catch(() =>{
                console.log("deu pau")
            });
        }
        catch (error) {
            console.log("Não foi possível retornar do banco:\n" + error);
        }
    })

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