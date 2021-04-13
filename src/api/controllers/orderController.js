const logger = require('../services/logger');
const Order = require('../models/orderModel');


class OrderController {
    async createOrder(req, res) {
        logger.info(req.body);

        if(await Order.exists({store: req.body.store, location: req.body.location, quantity: req.body.quantity})){
            logger.warn("Order exists");

            res.status(409).json({message: 'Conflict! Order already exists', order: req.body});
        } else{
            logger.info("New Order");

            const savedOrder = await Order(req.body).save();

            logger.info(savedOrder);

            res.json(savedOrder);   
        }
    }

    async getOrders(req, res) {
        const orders = await Order.find({});
        logger.info(orders);
        res.json(orders);
    }
}

module.exports = new OrderController();