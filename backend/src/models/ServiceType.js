const { Schema, model } = require('mongoose');

const serviceTypeSchema = new Schema({
    name: String
});

module.exports = model('ServiceType', serviceTypeSchema);