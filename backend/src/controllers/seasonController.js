const Season = require('../models/Season.js');

async function createSeason(req, res, next) {
  const { 
    start_date,
    finish_date,
    name,
    description
  } = req.body;
  const findSeason = await Season.findOne({ name: name });

  if (findSeason) { return res.status(400).send('La temporada ya existe'); }

  const season = new Season({
    start_date: start_date,
    finish_date: finish_date,
    name: name,
    description: description
  });

  await season.save();
  res.status(200).send('Temporada creada con éxito');
}

async function updateSeason(req, res, next) {
  const { 
    _id, 
    start_date,
    finish_date,
    name,
    description
  } = req.body;

  await Season.updateOne({ _id: _id }, {
    start_date: start_date,
    finish_date: finish_date,
    name: name,
    description: description
  })
    .then(() => {
      console.log('Temporada modificada con éxito');
      res.status(200).send('Temporada modificada con éxito');
    })
    .catch((error) => {
      console.error('Error al actualizar la temporada:', error);
      res.status(400).send('La temporada no existe');
    });
}

async function deleteSeason(req, res, next) {
  const _id = req.body;

  await Season.deleteOne({ _id: _id })
    .then(() => {
      console.log('Temporada eliminada con éxito');
      res.status(200).send('Temporada eliminada con éxito');
    })
    .catch((error) => {
      console.error('Error al eliminar la temporada:', error);
      res.status(400).send('La temporada no existe');
    });
}

module.exports = {
  createSeason,
  updateSeason,
  deleteSeason
};