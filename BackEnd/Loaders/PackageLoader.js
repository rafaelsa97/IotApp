const environmentalVariables = require('../../Config/EnvironmentVariables.js');
const express                = require('express');
const cors                   = require('cors');

module.exports = function loadPakcages(app,directory) {
    app.use(express.urlencoded());                    // Gets the submit parameter from POST request
    app.use('/resources', express.static(directory)); // Set frontend resources path
    app.use(cors());
    app.options('*', cors());
}