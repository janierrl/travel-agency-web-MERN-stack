const { Schema, model } = require('mongoose');

const contractSchema = new Schema({
    start_date: Date,
    finish_date: Date,
    conciliation_date: Date,
    description: String,
    id_contract_type: String
});

module.exports = model('Contract', contractSchema);