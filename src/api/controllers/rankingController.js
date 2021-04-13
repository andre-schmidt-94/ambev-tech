const logger = require('../services/logger');
const getD = require('../services/getD');
const Vehicle = require('../models/vehicleModel');
const Order = require('../models/orderModel');
const Cargo = require('../models/cargoModel');
const RankedVehicle = require('../models/rankedVehicleModel');
const findShortestPath = require('../controllers/graphController');

class RankingController {
    async getRankings(req, res) {
        logger.info('Get Rankings invoked!');
        logger.info({ orderId: req.params.orderId });
        var d = 100;
        var distance;

        try {
            await RankedVehicle.deleteMany({ order: req.params.orderId });

            const order = await Order.findOne({ _id: req.params.orderId });

            logger.info(order._doc);

            const vehicles = await Vehicle.find({});

            for await (const vehicle of vehicles) {
                const cargo = await Cargo.findOne({ type: vehicle.type });
                logger.info({ model: vehicle.model, type: vehicle.type, capacity: cargo.capacity });

                if (order.location != vehicle.location) {
                    distance = findShortestPath(order.location, vehicle.location);
                    d = getD.getD(distance.distance);
                }

                var n = (100 - (25 * ((order.quantity - cargo.capacity) / 10)));
                var score = Math.trunc((n + d) / 2);

                logger.info({ oLocation: order.location, vlocation: vehicle.location, distance: distance.distance, path: distance.path, d: d, n: n, score: score });

                let newRankedVehicle = new RankedVehicle({
                    order: order._id,
                    id_vehicle: vehicle._id,
                    model: vehicle.model,
                    location: vehicle.location,
                    capacity: cargo.capacity,
                    score: score
                });

                await newRankedVehicle.save();
            }

            const rankedVehicles = await RankedVehicle.find({ order: req.params.orderId }).sort([['score', 'desc']]);

            logger.info(rankedVehicles);
            res.json(rankedVehicles);
        } catch (error) {
            logger.error(error);

            res.status(409).json({ message: error });
        }
    }
}

module.exports = new RankingController();