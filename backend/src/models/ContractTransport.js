const { Schema, model } = require('mongoose');

const contractTransportSchema = new Schema({
    id_contract: String,
    id_company_transport: String
});

module.exports = model('ContractTransport', contractTransportSchema);