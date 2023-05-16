const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: String
});

module.exports = model('Role', userSchema);