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
  
  await Localization.updateOne({ _id: _id }, {
    name: name
  })
    .then(() => {
      console.log('Localización modificada con éxito');
      res.status(200).send('Localización modificada con éxito');
    })
    .catch((error) => {
      console.error('Error al actualizar la localización:', error);
      res.status(400).send('La localización no existe');
    });
}

async function deleteLocalization(req, res, next) {
  const _id = req.body;
  
  await Localization.deleteOne({ _id: _id })
    .then(() => {
      console.log('Localización eliminada con éxito');
      res.status(200).send('Localización eliminada con éxito');
    })
    .catch((error) => {
      console.error('Error al eliminar la localización:', error);
      res.status(400).send('La localización no existe');
    });
}

module.exports = {
  createLocalization,
  updateLocalization,
  deleteLocalization
};