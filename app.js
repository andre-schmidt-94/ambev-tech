const express = require('express')
const mongoose = require('mongoose')
const logger = require('./src/api/services/logger')


require('dotenv').config()
const app = express()

app.use(express.json())

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 5000 }, () => {
    logger.info('Connected to MongoDB!')
});

// Start
app.listen(9000);