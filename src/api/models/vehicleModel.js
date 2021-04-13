const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
    model: String,
    location: String,
    type:     String
});

module.exports = mongoose.model('Vehicle', vehicleSchema);