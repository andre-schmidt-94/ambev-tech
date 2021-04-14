const mongoose = require('mongoose');
const OrderModel = require('../../src/api/models/orderModel');

require('dotenv').config();

mongoose.connect(process.env.TEST_DB_CONNECTION);

describe('Orders DB test', () => {
    beforeAll(async () => {
        await OrderModel.deleteMany({});
    });

    afterEach(async () => {
        await OrderModel.deleteMany({});
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    it('the model exists', () => {
        expect(OrderModel).toBeDefined();
    });

    it('should insert an order into db', async () => {
        const order = new OrderModel({
            store: 'Distribuidora de bebidas',
            location: 'B',
            quantity: '40'
        })

        const res = await OrderModel(order).save();
        expect(res.store).toEqual('Distribuidora de bebidas');
    });
})