const ModalityTransportHrKm = require('../models/ModalityTransportHrKm.js');

async function createModalityTransportHrKm(req, res, next) {
  const { 
    cost_traveled_km,
    cost_km_extras,
    cost_hr_extras,
    cost_hr,
    id_contract,
    id_vehicle
  } = req.body;
  const findModalityTransportHrKm = await ModalityTransportHrKm.findOne({ id_contract: id_contract });

  if (findModalityTransportHrKm) { return res.status(400).send('La modalidad de transporte km/hr ya existe'); }

  const modalityTransportHrKm = new ModalityTransportHrKm({
    cost_traveled_km: cost_traveled_km,
    cost_km_extras: cost_km_extras,
    cost_hr_extras: cost_hr_extras,
    cost_hr: cost_hr,
    id_contract: id_contract,
    id_vehicle: id_vehicle
  });

  await modalityTransportHrKm.save();
  res.status(200).send('Modalidad de transporte km/hr creada con éxito');
}

async function updateModalityTransportHrKm(req, res, next) {
  const { 
    _id, 
    cost_traveled_km,
    cost_km_extras,
    cost_hr_extras,
    cost_hr,
    id_contract,
    id_vehicle 
  } = req.body;

  await ModalityTransportHrKm.updateOne({ _id: _id }, {
    cost_traveled_km: cost_traveled_km,
    cost_km_extras: cost_km_extras,
    cost_hr_extras: cost_hr_extras,
    cost_hr: cost_hr,
    id_contract: id_contract,
    id_vehicle: id_vehicle
  })
    .then(() => {
      console.log('Modalidad de transporte km/hr modificada con éxito');
      res.status(200).send('Modalidad de transporte km/hr modificada con éxito');
    })
    .catch((error) => {
      console.error('Error al actualizar la modalidad de transporte km/hr:', error);
      res.status(400).send('La modalidad de transporte km/hr no existe');
    });
}

async function deleteModalityTransportHrKm(req, res, next) {
  const _id = req.body;

  await ModalityTransportHrKm.deleteOne({ _id: _id })
    .then(() => {
      console.log('Modalidad de transporte km/hr eliminada con éxito');
      res.status(200).send('Modalidad de transporte km/hr eliminada con éxito');
    })
    .catch((error) => {
      console.error('Error al eliminar la modalidad de transporte km/hr:', error);
      res.status(400).send('La modalidad de transporte km/hr no existe');
    });
}

module.exports = {
  createModalityTransportHrKm,
  updateModalityTransportHrKm,
  deleteModalityTransportHrKm
};