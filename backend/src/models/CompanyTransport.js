const { Schema, model } = require('mongoose');

const companyTransportSchema = new Schema({
    name: String
});

module.exports = model('CompanyTransport', companyTransportSchema);