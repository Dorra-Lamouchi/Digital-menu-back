var express = require('express');
var app = express();
//var cors = require('cors');

//app.use(cors());

var StarterController = require('./starter/StarterController');
app.use('/starter', StarterController);

module.exports = app;