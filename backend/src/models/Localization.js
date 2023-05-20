const { Schema, model } = require('mongoose');

const localizationSchema = new Schema({
    name: String
});

module.exports = model('Localization', localizationSchema);