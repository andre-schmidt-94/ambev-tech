const express = require('express');
const orderController = require('../controllers/orderController');
const validateDto = require('../middlewares/validateDto');
const orderDto = require('../validations/order');

const orderRouter = express.Router();

orderRouter.get('/orders', orderController.getOrders);

orderRouter.get('/ordersTest', (req, res) => {
    res.send({store: 'chama ele'});
});

orderRouter.post('/v1/order', validateDto(orderDto), orderController.createOrder);

module.exports = orderRouter;