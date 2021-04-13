const logger = require('../services/logger');

class VehicleController {
    createVehicle(req, res) {
        logger.info(req.body);
        
        res.json('Post DONE');
    }

    getVehicles(req, res) {
        logger.info(req.body);
        res.json('Get DONE');
    }
}

module.exports = new VehicleController();