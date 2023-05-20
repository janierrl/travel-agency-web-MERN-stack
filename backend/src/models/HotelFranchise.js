const { Schema, model } = require('mongoose');

const hotelFranchiseSchema = new Schema({
    name: String
});

module.exports = model('HotelFranchise', hotelFranchiseSchema);