const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    pax_cost: Number,
    id_province: String
});

module.exports = model('ContractService', userSchema);