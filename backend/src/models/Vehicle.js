const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    capacity_without_baggage: Number,
    capacity_with_baggage: Number,
    capacity_total: Number,
    production_date: Date,
    vehicle_plate: String,
    id_vehicle_brand: String
});

module.exports = model('Vehicle', userSchema);