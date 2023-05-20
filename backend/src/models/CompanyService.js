const { Schema, model } = require('mongoose');

const companyServiceSchema = new Schema({
    name: String
});

module.exports = model('CompanyService', companyServiceSchema);