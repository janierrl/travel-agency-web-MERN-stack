const { Schema, model } = require('mongoose');

const contractHotelSchema = new Schema({
    id_contract: String,
    id_hotel: String
});

module.exports = model('ContractHotel', contractHotelSchema);