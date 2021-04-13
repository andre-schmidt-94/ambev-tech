const express = require('express');
const mongoose = require('mongoose');
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

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 5000 }, () => {
    logger.info('Connected to MongoDB!')
});

// Start
app.listen(9000, () => logger.info('Server running on port 9000'));