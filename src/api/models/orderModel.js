const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    store: String,
    location: String,
    quantity: Number
});

module.exports = mongoose.model('Order', orderSchema);