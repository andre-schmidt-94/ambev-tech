const express = require('express');
const rankingController = require('../controllers/rankingController');

const rankingRouter = express.Router();

rankingRouter.get('/v1/order/:orderId/vehicle/ranking', rankingController.getRankings);

module.exports = rankingRouter;