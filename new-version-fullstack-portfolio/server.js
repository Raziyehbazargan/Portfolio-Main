'use strict';

// npm modules
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const express = require('express');

const debug = require('debug')('portfolio:server');

// app modules

// load environment vars
dotenv.load();

// module constants
const PORT = process.env.PORT;
const app = express();

// app routes

// app middleware
app.use(cors());
app.use(morgan('dev'));

// start server
const server = module.exports = app.listen(PORT, () => {
  debug(`server up on ${PORT}`);
});

server.isRunning = true;
