const express = require('express');
const { startServer } = require('./core/server');
const bodyParser = require('body-parser');
const middlewares = require('./middlewares');
const routes = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use(middlewares.cors);

app.use('/distance', routes.distances);

const server = startServer(app);

module.exports = server;
