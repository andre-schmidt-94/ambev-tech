const logger = require('../services/logger');
const Vehicle = require('../models/vehicleModel');

class VehicleController {
    async createVehicle(req, res) {
        logger.info(req.body);

        if(await Vehicle.exists({model: req.body.model, type: req.body.type, location: req.body.location})){
            logger.warn("Vehicle exists");

            res.status(409).json('Conflict! Vehicle already exists');
        } else{
            logger.info("New Vehicle");

            const savedVehicle = await Vehicle(req.body).save();

            logger.info(savedVehicle);

            res.json(savedVehicle);   
        }
    }

    async getVehicles(req, res) {
        const vehicles = await Vehicle.find({});
        logger.info(vehicles);
        res.json(vehicles);
    }
}

module.exports = new VehicleController();