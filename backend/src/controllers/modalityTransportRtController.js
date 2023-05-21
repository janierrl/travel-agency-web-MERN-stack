const ModalityTransportRt = require('../models/ModalityTransportRt.js');

async function createModalityTransportRt(req, res, next) {
  const { 
    rt_description,
    cost_rt,
    cost_round_trip,
    id_contract,
    id_vehicle
  } = req.body;
  const findModalityTransportRt = await ModalityTransportRt.findOne({ id_contract: id_contract });

  if (findModalityTransportRt) { return res.status(400).send('La modalidad de transporte rt ya existe'); }

  const modalityTransportRt = new ModalityTransportRt({
    rt_description: rt_description,
    cost_rt: cost_rt,
    cost_round_trip: cost_round_trip,
    id_contract: id_contract,
    id_vehicle: id_vehicle
  });

  await modalityTransportRt.save();
  res.status(200).send('Modalidad de transporte rt creada con éxito');
}

async function updateModalityTransportRt(req, res, next) {
  const { 
    _id, 
    rt_description,
    cost_rt,
    cost_round_trip,
    id_contract,
    id_vehicle
  } = req.body;

  await ModalityTransportRt.updateOne({ _id: _id }, {
    rt_description: rt_description,
    cost_rt: cost_rt,
    cost_round_trip: cost_round_trip,
    id_contract: id_contract,
    id_vehicle: id_vehicle
  })
    .then(() => {
      console.log('Modalidad de transporte rt modificada con éxito');
      res.status(200).send('Modalidad de transporte rt modificada con éxito');
    })
    .catch((error) => {
      console.error('Error al actualizar la modalidad de transporte rt:', error);
      res.status(400).send('La modalidad de transporte rt no existe');
    });
}

async function deleteModalityTransportRt(req, res, next) {
  const _id = req.body;

  await ModalityTransportRt.deleteOne({ _id: _id })
    .then(() => {
      console.log('Modalidad de transporte rt eliminada con éxito');
      res.status(200).send('Modalidad de transporte rt eliminada con éxito');
    })
    .catch((error) => {
      console.error('Error al eliminar la modalidad de transporte rt:', error);
      res.status(400).send('La modalidad de transporte rt no existe');
    });
}

module.exports = {
  createModalityTransportRt,
  updateModalityTransportRt,
  deleteModalityTransportRt
};