const environmentalVariables = require('../../Config/EnvironmentVariables.js');
const express                = require('express');

module.exports = function loadPakcages(app,directory) {
    app.use(express.urlencoded());                    // Gets the submit parameter from POST request
    app.use('/resources', express.static(directory)); // Set frontend resources path
}