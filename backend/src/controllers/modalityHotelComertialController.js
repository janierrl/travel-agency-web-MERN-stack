const ModalityHotelComertial = require('../models/ModalityHotelComertial.js');

async function createModalityHotelComertial(req, res, next) {
  const name = req.body;
  const findModalityHotelComertial = await ModalityHotelComertial.findOne({ name: name });

  if (findModalityHotelComertial) { return res.status(400).send('La modalidad de hotel comercial ya existe'); }

  const modalityHotelComertial = new ModalityHotelComertial({
      name: name
  });

  await modalityHotelComertial.save();
  res.status(200).send('Modalidad de hotel comercial creada con éxito');
}

async function updateModalityHotelComertial(req, res, next) {
  const { _id, name } = req.body;
  const modalityHotelComertial = await ModalityHotelComertial.findOne({ _id: _id });

  if (!modalityHotelComertial) { return res.status(400).send('La modalidad de hotel comercial no existe'); }

  modalityHotelComertial.name = name;

  await modalityHotelComertial.save();
  res.status(200).send('Modalidad de hotel comercial modificada con éxito');
}

async function deleteModalityHotelComertial(req, res, next) {
  const _id = req.body;
  const findModalityHotelComertial = await ModalityHotelComertial.findOne({ _id: _id });

  if (!findModalityHotelComertial) { return res.status(400).send('La modalidad de hotel comercial no existe'); }

  await ModalityHotelComertial.deleteOne({ _id: _id });
  res.status(200).send('Modalidad de hotel comercial eliminada con éxito');
}

module.exports = {
  createModalityHotelComertial,
  updateModalityHotelComertial,
  deleteModalityHotelComertial
};