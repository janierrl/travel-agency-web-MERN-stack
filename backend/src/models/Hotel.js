const { Schema, model } = require('mongoose');

const hotelSchema = new Schema({
    name: String,
    address: String,
    category: String,
    telephone_number: String,
    fax: String,
    email: String,
    dist_to_city: String,
    dist_to_airport: String,
    rooms_amount: String,
    floors_amount: String,
    id_localization: String,
    id_province: String,
    id_hotel_franchise: String
});

module.exports = model('Hotel', hotelSchema);