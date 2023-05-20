const { Schema, model } = require('mongoose');

const contractTypeSchema = new Schema({
    name: String
});

module.exports = model('ContractType', contractTypeSchema);