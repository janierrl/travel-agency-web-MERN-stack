const { Schema, model } = require('mongoose');

const foodPlanSchema = new Schema({
    name: String
});

module.exports = model('FoodPlan', foodPlanSchema);