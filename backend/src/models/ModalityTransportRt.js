const { Schema, model } = require('mongoose');

const modalityTransportRtSchema = new Schema({
    rt_description: String,
    cost_rt: Number,
    cost_round_trip: Number,
    id_contract: String,
    id_vehicle: String
});

module.exports = model('ModalityTransportRt', modalityTransportRtSchema);