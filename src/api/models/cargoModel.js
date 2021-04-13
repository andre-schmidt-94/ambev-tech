const mongoose = require('mongoose');

const cargoSchema = mongoose.Schema({
    type:     String,
    capacity: Number
});

module.exports = mongoose.model('Cargo', cargoSchema);