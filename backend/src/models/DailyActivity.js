const { Schema, model } = require('mongoose');

const dailyActivitySchema = new Schema({
    name: String
});

module.exports = model('DailyActivity', dailyActivitySchema);