const ServiceType = require('../models/ServiceType.js');

async function createServiceType(req, res, next) {
  const name = req.body;
  const findServiceType = await ServiceType.findOne({ name: name });

  if (findServiceType) { return res.status(400).send('El tipo de servicio ya existe'); }

  const serviceType = new ServiceType({
      name: name
  });

  await serviceType.save();
  res.status(200).send('Tipo de servicio creado con éxito');
}

async function updateServiceType(req, res, next) {
  const { _id, name } = req.body;
  const serviceType = await ServiceType.findOne({ _id: _id });

  if (!serviceType) { return res.status(400).send('El tipo de servicio no existe'); }

  serviceType.name = name;

  await serviceType.save();
  res.status(200).send('Tipo de servicio modificado con éxito');
}

async function deleteServiceType(req, res, next) {
  const _id = req.body;
  const findServiceType = await ServiceType.findOne({ _id: _id });

  if (!findServiceType) { return res.status(400).send('El tipo de servicio no existe'); }

  await ServiceType.deleteOne({ _id: _id });
  res.status(200).send('Tipo de servicio eliminado con éxito');
}

module.exports = {
  createServiceType,
  updateServiceType,
  deleteServiceType
};