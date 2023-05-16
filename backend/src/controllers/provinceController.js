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
  const province = await Province.findOne({ _id: _id });

  if (!province) { return res.status(400).send('La provincia no existe'); }

  province.name = name;

  await province.save();
  res.status(200).send('Provincia modificada con éxito');
}

async function deleteProvince(req, res, next) {
  const _id = req.body;
  const findProvince = await Province.findOne({ _id: _id });

  if (!findProvince) { return res.status(400).send('La provincia no existe'); }

  await Province.deleteOne({ _id: _id });
  res.status(200).send('Provincia eliminada con éxito');
}

module.exports = {
  createProvince,
  updateProvince,
  deleteProvince
};