const port = process.env.PORT || 3000;
const express = require('express');

const app = express();

//Settings
app.set('port', port);

module.exports = app;
