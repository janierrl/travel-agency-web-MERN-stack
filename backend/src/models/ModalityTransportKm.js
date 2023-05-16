const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    cost_km: Number,
    cost_km_round_trip: Number,
    cost_hr_wait: Number,
    id_contract: String,
    id_vehicle: String
});

module.exports = model('ModalityTransportKm', userSchema);