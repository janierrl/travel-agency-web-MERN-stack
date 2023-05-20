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
  const dailyActivity = await DailyActivity.findOne({ _id: _id });

  if (!dailyActivity) { return res.status(400).send('La actividad diaria no existe'); }

  dailyActivity.name = name;

  await dailyActivity.save();
  res.status(200).send('Actividad diaria modificada con éxito');
}

async function deleteDailyActivity(req, res, next) {
  const _id = req.body;
  const findDailyActivity = await DailyActivity.findOne({ _id: _id });

  if (!findDailyActivity) { return res.status(400).send('La actividad diaria no existe'); }

  await DailyActivity.deleteOne({ _id: _id });
  res.status(200).send('Actividad diaria eliminada con éxito');
}

module.exports = {
  createDailyActivity,
  updateDailyActivity,
  deleteDailyActivity
};