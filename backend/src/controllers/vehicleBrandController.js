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
  
  await VehicleBrand.updateOne({ _id: _id }, {
    name: name
  })
    .then(() => {
      console.log('Marca de vehículo modificada con éxito');
      res.status(200).send('Marca de vehículo modificada con éxito');
    })
    .catch((error) => {
      console.error('Error al actualizar la marca de vehículo:', error);
      res.status(400).send('La marca de vehículo no existe');
    });
}

async function deleteVehicleBrand(req, res, next) {
  const _id = req.body;
  
  await VehicleBrand.deleteOne({ _id: _id })
    .then(() => {
      console.log('Marca de vehículo eliminada con éxito');
      res.status(200).send('Marca de vehículo eliminada con éxito');
    })
    .catch((error) => {
      console.error('Error al eliminar la marca de vehículo:', error);
      res.status(400).send('La marca de vehículo no existe');
    });
}

module.exports = {
  createVehicleBrand,
  updateVehicleBrand,
  deleteVehicleBrand
};