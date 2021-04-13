const mongoose = require('mongoose');

const RankedVehicleSchema = mongoose.Schema({
    order: String,
    id_vehicle: String,
    model: String,
    location: String,
    capacity: Number,
    score: Number
});

module.exports = mongoose.model('RankedVehicle', RankedVehicleSchema);
