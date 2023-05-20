const Localization = require('../models/Localization.js');

async function createLocalization(req, res, next) {
  const name = req.body;
  const findLocalization = await Localization.findOne({ name: name });

  if (findLocalization) { return res.status(400).send('La lozalización ya existe'); }

  const localization = new Localization({
    name: name
  });

  await localization.save();
  res.status(200).send('Localización creada con éxito');
}

async function updateLocalization(req, res, next) {
  const { _id, name } = req.body;
  const localization = await Localization.findOne({ _id: _id });

  if (!localization) { return res.status(400).send('La localización no existe'); }

  localization.name = name;

  await localization.save();
  res.status(200).send('Localización modificada con éxito');
}

async function deleteLocalization(req, res, next) {
  const _id = req.body;
  const findLocalization = await Localization.findOne({ _id: _id });

  if (!findLocalization) { return res.status(400).send('La localización no existe'); }

  await Localization.deleteOne({ _id: _id });
  res.status(200).send('Localización eliminada con éxito');
}

module.exports = {
  createLocalization,
  updateLocalization,
  deleteLocalization
};