const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    promotional_name: String,
    days_amount: Number,
    nights_amount: Number,
    pax_amount: Number,
    cost_hotel: Number,
    cost_transport: Number,
    cost_transport_hotel_airport: Number,
    cost_total: Number,
    price: Number
});

module.exports = model('TouristicPackage', userSchema);