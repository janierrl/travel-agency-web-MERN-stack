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

  await ModalityHotelComertial.updateOne({ _id: _id }, {
    name: name
  })
    .then(() => {
      console.log('Modalidad de hotel comercial modificada con éxito');
      res.status(200).send('Modalidad de hotel comercial modificada con éxito');
    })
    .catch((error) => {
      console.error('Error al actualizar la modalidad de hotel comercial:', error);
      res.status(400).send('La modalidad de hotel comercial no existe');
    });
}

async function deleteModalityHotelComertial(req, res, next) {
  const _id = req.body;
  
  await ModalityHotelComertial.deleteOne({ _id: _id })
    .then(() => {
      console.log('Modalidad de hotel comercial eliminada con éxito');
      res.status(200).send('Modalidad de hotel comercial eliminada con éxito');
    })
    .catch((error) => {
      console.error('Error al eliminar la modalidad de hotel comercial:', error);
      res.status(400).send('La modalidad de hotel comercial no existe');
    });
}

module.exports = {
  createModalityHotelComertial,
  updateModalityHotelComertial,
  deleteModalityHotelComertial
};