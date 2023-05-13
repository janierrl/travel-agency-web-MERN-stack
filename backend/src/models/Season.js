const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    start_date: Date,
    finish_date: Date,
    name: String,
    description: String
});

module.exports = model('Season', userSchema);