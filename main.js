const express = require('express');
const app = express();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();
const port = 3000

var omdbApi = require('omdb-client');
 
var params = {
    apiKey: 'f3011be7',
    query: 'Terminator',
    year: 2012
}


require('./config/environment.js')(app, express)
require('./config/routes.js')(app,omdbApi,params)

app.listen(port, () => console.info(`App listening on port ${port}`))
