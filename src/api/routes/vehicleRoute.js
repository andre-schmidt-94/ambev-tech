const express = require('express');
const vehicleController = require('../controllers/vehicleController');
const validateDto = require('../middlewares/validateDto');
const vehicleDto = require('../validations/vehicle');

const vehicleRouter = express.Router();

vehicleRouter.get('/vehicles', vehicleController.getVehicles);

vehicleRouter.post('/v1/vehicle', validateDto(vehicleDto), vehicleController.createVehicle);

module.exports = vehicleRouter;