const ModalityTransportKm = require('../models/ModalityTransportKm.js');

async function createModalityTransportKm(req, res, next) {
  const { 
    cost_km,
    cost_km_round_trip,
    cost_hr_wait,
    id_contract,
    id_vehicle
  } = req.body;
  const findModalityTransportKm = await ModalityTransportKm.findOne({ id_contract: id_contract });

  if (findModalityTransportKm) { return res.status(400).send('La modalidad de transporte km ya existe'); }

  const modalityTransportKm = new ModalityTransportKm({
    cost_km: cost_km,
    cost_km_round_trip: cost_km_round_trip,
    cost_hr_wait: cost_hr_wait,
    id_contract: id_contract,
    id_vehicle: id_vehicle
  });

  await modalityTransportKm.save();
  res.status(200).send('Modalidad de transporte km creada con éxito');
}

async function updateModalityTransportKm(req, res, next) {
  const { 
    _id, 
    cost_km,
    cost_km_round_trip,
    cost_hr_wait,
    id_contract,
    id_vehicle
  } = req.body;

  await ModalityTransportKm.updateOne({ _id: _id }, {
    cost_km: cost_km,
    cost_km_round_trip: cost_km_round_trip,
    cost_hr_wait: cost_hr_wait,
    id_contract: id_contract,
    id_vehicle: id_vehicle
  })
    .then(() => {
      console.log('Modalidad de transporte km modificada con éxito');
      res.status(200).send('Modalidad de transporte km modificada con éxito');
    })
    .catch((error) => {
      console.error('Error al actualizar la modalidad de transporte km:', error);
      res.status(400).send('La modalidad de transporte km no existe');
    });
}

async function deleteModalityTransportKm(req, res, next) {
  const _id = req.body;

  await ModalityTransportKm.deleteOne({ _id: _id })
    .then(() => {
      console.log('Modalidad de transporte km eliminada con éxito');
      res.status(200).send('Modalidad de transporte km eliminada con éxito');
    })
    .catch((error) => {
      console.error('Error al eliminar la modalidad de transporte km:', error);
      res.status(400).send('La modalidad de transporte km no existe');
    });
}

module.exports = {
  createModalityTransportKm,
  updateModalityTransportKm,
  deleteModalityTransportKm
};