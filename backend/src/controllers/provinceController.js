const Province = require('../models/Province.js');

async function createProvince(req, res, next) {
  const name = req.body;
  const findProvince = await Province.findOne({ name: name });

  if (findProvince) { return res.status(400).send('La provincia ya existe'); }

  const province = new Province({
    name: name
  });

  await province.save();
  res.status(200).send('Provincia creada con éxito');
}

async function updateProvince(req, res, next) {
  const { _id, name } = req.body;
  
  await Province.updateOne({ _id: _id }, {
    name: name
  })
    .then(() => {
      console.log('Provincia modificada con éxito');
      res.status(200).send('Provincia modificada con éxito');
    })
    .catch((error) => {
      console.error('Error al actualizar la provincia:', error);
      res.status(400).send('La provincia no existe');
    });
}

async function deleteProvince(req, res, next) {
  const _id = req.body;
  
  await Province.deleteOne({ _id: _id })
    .then(() => {
      console.log('Provincia eliminada con éxito');
      res.status(200).send('Provincia eliminada con éxito');
    })
    .catch((error) => {
      console.error('Error al eliminar la provincia:', error);
      res.status(400).send('La provincia no existe');
    });
}

module.exports = {
  createProvince,
  updateProvince,
  deleteProvince
};