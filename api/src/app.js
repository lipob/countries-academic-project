const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const setHeaders = require('./utils/middlewares/setHeaders.js');
const errorHandler = require('./utils/middlewares/errorHandler.js');

require('./db.js');

const server = express();

server.name = 'API';

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use(setHeaders);

server.use('/', routes);

// Error catching endware.
server.use(errorHandler);

server.get('/', (req, res) => {
  res.send('hola henry');
});

module.exports = server;