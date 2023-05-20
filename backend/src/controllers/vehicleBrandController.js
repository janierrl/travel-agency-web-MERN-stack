const VehicleBrand = require('../models/VehicleBrand.js');

async function createVehicleBrand(req, res, next) {
  const name = req.body;
  const findVehicleBrand = await VehicleBrand.findOne({ name: name });

  if (findVehicleBrand) { return res.status(400).send('La marca de vehículo ya existe'); }

  const vehicleBrand = new VehicleBrand({
    name: name
  });

  await vehicleBrand.save();
  res.status(200).send('Marca de vehículo creada con éxito');
}

async function updateVehicleBrand(req, res, next) {
  const { _id, name } = req.body;
  const vehicleBrand = await VehicleBrand.findOne({ _id: _id });

  if (!vehicleBrand) { return res.status(400).send('La marca de vehículo no existe'); }

  vehicleBrand.name = name;

  await vehicleBrand.save();
  res.status(200).send('Marca de vehículo modificada con éxito');
}

async function deleteVehicleBrand(req, res, next) {
  const _id = req.body;
  const findVehicleBrand = await VehicleBrand.findOne({ _id: _id });

  if (!findVehicleBrand) { return res.status(400).send('La marca de vehículo no existe'); }

  await VehicleBrand.deleteOne({ _id: _id });
  res.status(200).send('Marca de vehículo eliminada con éxito');
}

module.exports = {
  createVehicleBrand,
  updateVehicleBrand,
  deleteVehicleBrand
};