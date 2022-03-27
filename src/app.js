
const express = require('express');
require('env2')('.env');
const init = require('./init');


const app = express();

init(app);


app.set('port', process.env.PORT || 5000);



module.exports = app;