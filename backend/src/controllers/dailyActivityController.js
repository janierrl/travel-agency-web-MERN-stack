const DailyActivity = require('../models/DailyActivity.js');

async function createDailyActivity(req, res, next) {
  const name = req.body;
  const findDailyActivity = await DailyActivity.findOne({ name: name });

  if (findDailyActivity) { return res.status(400).send('La actividad diaria ya existe'); }

  const dailyActivity = new DailyActivity({
    name: name
  });

  await dailyActivity.save();
  res.status(200).send('Actividad diaria creada con éxito');
}

async function updateDailyActivity(req, res, next) {
  const { _id, name } = req.body;
  
  await DailyActivity.updateOne({ _id: _id }, {
    name: name
  })
    .then(() => {
      console.log('Actividad diaria modificada con éxito');
      res.status(200).send('Actividad diaria modificada con éxito');
    })
    .catch((error) => {
      console.error('Error al actualizar la actividad diaria:', error);
      res.status(400).send('La actividad diaria no existe');
    });
}

async function deleteDailyActivity(req, res, next) {
  const _id = req.body;
  
  await DailyActivity.deleteOne({ _id: _id })
    .then(() => {
      console.log('Actividad diaria eliminada con éxito');
      res.status(200).send('Actividad diaria eliminada con éxito');
    })
    .catch((error) => {
      console.error('Error al eliminar la actividad diaria:', error);
      res.status(400).send('La actividad diaria no existe');
    });
}

module.exports = {
  createDailyActivity,
  updateDailyActivity,
  deleteDailyActivity
};