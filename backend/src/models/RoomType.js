const { Schema, model } = require('mongoose');

const roomTypeSchema = new Schema({
    name: String
});

module.exports = model('RoomType', roomTypeSchema);