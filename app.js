const express = require('express');
const logger = require('./src/api/services/logger');
const vehicleRouter = require('./src/api/routes/vehicleRoute');
const orderRouter = require('./src/api/routes/orderRoute');
const rankingRouter = require('./src/api/routes/rankingRoute');
const apiErrorHandler = require('./src/api/middlewares/apiErrorHandler');

require('dotenv').config();
const app = express();

app.use(express.json());

app.use('/', vehicleRouter);
app.use('/', orderRouter);
app.use('/', rankingRouter);

app.use(apiErrorHandler);

module.exports = app;