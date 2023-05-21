const Vehicle = require('../models/Vehicle.js');

async function createVehicle(req, res, next) {
  const { 
    capacity_without_baggage,
    capacity_with_baggage,
    capacity_total,
    production_date,
    vehicle_plate,
    id_vehicle_brand
  } = req.body;
  const findVehicle = await Vehicle.findOne({ vehicle_plate: vehicle_plate });

  if (findVehicle) { return res.status(400).send('El vehículo ya existe'); }

  const vehicle = new Vehicle({
    capacity_without_baggage: capacity_without_baggage,
    capacity_with_baggage: capacity_with_baggage,
    capacity_total: capacity_total,
    production_date: production_date,
    vehicle_plate: vehicle_plate,
    id_vehicle_brand: id_vehicle_brand
  });

  await vehicle.save();
  res.status(200).send('Vehículo creado con éxito');
}

async function updateVehicle(req, res, next) {
  const { 
    _id, 
    capacity_without_baggage,
    capacity_with_baggage,
    capacity_total,
    production_date,
    vehicle_plate,
    id_vehicle_brand 
  } = req.body;

  await Vehicle.updateOne({ _id: _id }, {
    capacity_without_baggage: capacity_without_baggage,
    capacity_with_baggage: capacity_with_baggage,
    capacity_total: capacity_total,
    production_date: production_date,
    vehicle_plate: vehicle_plate,
    id_vehicle_brand: id_vehicle_brand
  })
    .then(() => {
      console.log('Vehículo modificado con éxito');
      res.status(200).send('Vehículo modificado con éxito');
    })
    .catch((error) => {
      console.error('Error al actualizar el vehículo:', error);
      res.status(400).send('El vehículo no existe');
    });
}

async function deleteVehicle(req, res, next) {
  const _id = req.body;

  await Vehicle.deleteOne({ _id: _id })
    .then(() => {
      console.log('Vehículo eliminado con éxito');
      res.status(200).send('Vehículo eliminado con éxito');
    })
    .catch((error) => {
      console.error('Error al eliminar el vehículo:', error);
      res.status(400).send('El vehículo no existe');
    });
}

module.exports = {
  createVehicle,
  updateVehicle,
  deleteVehicle
};