const { Schema, model } = require('mongoose');

const provinceSchema = new Schema({
    name: String
});

module.exports = model('Province', provinceSchema);