const { Schema, model } = require('mongoose');

const vehicleBrandSchema = new Schema({
    name: String
});

module.exports = model('VehicleBrand', vehicleBrandSchema);