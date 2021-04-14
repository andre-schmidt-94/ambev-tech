const mongoose = require('mongoose');
const logger = require('./src/api/services/logger');


const app = require('./app');

require('dotenv').config();

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 5000 }, () => {
    logger.info('Connected to MongoDB!')
});


// Start
app.listen(process.env.PORT, () => logger.info('Server running on port ' + process.env.PORT + '!!'));