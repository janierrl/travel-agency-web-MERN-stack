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
  
  await FoodPlan.updateOne({ _id: _id }, {
    name: name
  })
    .then(() => {
      console.log('Plan de alimentación modificado con éxito');
      res.status(200).send('Plan de alimentación modificado con éxito');
    })
    .catch((error) => {
      console.error('Error al actualizar el plan de alimentación:', error);
      res.status(400).send('El plan de alimentación no existe');
    });
}

async function deleteFoodPlan(req, res, next) {
  const _id = req.body;
  
  await FoodPlan.deleteOne({ _id: _id })
    .then(() => {
      console.log('Plan de alimentación eliminado con éxito');
      res.status(200).send('Plan de alimentación eliminado con éxito');
    })
    .catch((error) => {
      console.error('Error al eliminar el plan de alimentación:', error);
      res.status(400).send('El plan de alimentación no existe');
    });
}

module.exports = {
  createFoodPlan,
  updateFoodPlan,
  deleteFoodPlan
};