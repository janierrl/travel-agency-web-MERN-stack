const { Schema, model } = require('mongoose');

const contractServiceSchema = new Schema({
    pax_cost: Number,
    id_contract: String,
    id_province: String
});

module.exports = model('ContractService', contractServiceSchema);