const ApiError = require('../controllers/apiErrorController');
const logger = require('../services/logger');

function apiErrorHandler(err, req, res, next) {
    logger.error(err);

    if(err instanceof ApiError) {
        return res.status(err.code).json(err.message);
    }

    return res.status(500).json('Something went wrong');
}

module.exports = apiErrorHandler;