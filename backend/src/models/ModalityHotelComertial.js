const { Schema, model } = require('mongoose');

const modalityHotelComertialSchema = new Schema({
    name: String
});

module.exports = model('ModalityHotelComertial', modalityHotelComertialSchema);