const { Schema, model } = require('mongoose');

const modalityTransportHrKmSchema = new Schema({
    cost_traveled_km: Number,
    cost_km_extras: Number,
    cost_hr_extras: Number,
    cost_hr: Number,
    id_contract: String,
    id_vehicle: String
});

module.exports = model('ModalityTransportHrKm', modalityTransportHrKmSchema);