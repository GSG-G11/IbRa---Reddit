
const express = require('express');
const router = require('./routes');
require('env2')('.env');

const app = express();

router(app);

app.set('port', process.env.PORT || 9000);

module.exports = app;