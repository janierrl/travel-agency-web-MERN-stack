const FoodPlan = require('../models/FoodPlan.js');

async function createFoodPlan(req, res, next) {
  const name = req.body;
  const findFoodPlan = await FoodPlan.findOne({ name: name });

  if (findFoodPlan) { return res.status(400).send('El plan de alimentación ya existe'); }

  const foodPlan = new FoodPlan({
      name: name
  });

  await foodPlan.save();
  res.status(200).send('Plan de alimentación creado con éxito');
}

async function updateFoodPlan(req, res, next) {
  const { _id, name } = req.body;
  const foodPlan = await FoodPlan.findOne({ _id: _id });

  if (!foodPlan) { return res.status(400).send('El plan de alimentación no existe'); }

  foodPlan.name = name;

  await foodPlan.save();
  res.status(200).send('Plan de alimentación modificado con éxito');
}

async function deleteFoodPlan(req, res, next) {
  const _id = req.body;
  const findFoodPlan = await FoodPlan.findOne({ _id: _id });

  if (!findFoodPlan) { return res.status(400).send('El plan de alimentación no existe'); }

  await FoodPlan.deleteOne({ _id: _id });
  res.status(200).send('Plan de alimentación eliminado con éxito');
}

module.exports = {
  createFoodPlan,
  updateFoodPlan,
  deleteFoodPlan
};