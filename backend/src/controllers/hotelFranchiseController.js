const HotelFranchise = require('../models/HotelFranchise.js');

async function createHotelFranchise(req, res, next) {
  const name = req.body;
  const findHotelFranchise = await HotelFranchise.findOne({ name: name });

  if (findHotelFranchise) { return res.status(400).send('La franquicia hotelera ya existe'); }

  const hotelFranchise = new HotelFranchise({
    name: name
  });

  await hotelFranchise.save();
  res.status(200).send('Franquicia hotelera creada con éxito');
}

async function updateHotelFranchise(req, res, next) {
  const { _id, name } = req.body;
  
  await HotelFranchise.updateOne({ _id: _id }, {
    name: name
  })
    .then(() => {
      console.log('Franquicia hotelera modificada con éxito');
      res.status(200).send('Franquicia hotelera modificada con éxito');
    })
    .catch((error) => {
      console.error('Error al actualizar la franquicia hotelera:', error);
      res.status(400).send('La franquicia hotelera no existe');
    });
}

async function deleteHotelFranchise(req, res, next) {
  const _id = req.body;
  
  await HotelFranchise.deleteOne({ _id: _id })
    .then(() => {
      console.log('Franquicia hotelera eliminada con éxito');
      res.status(200).send('Franquicia hotelera eliminada con éxito');
    })
    .catch((error) => {
      console.error('Error al eliminar la franquicia hotelera:', error);
      res.status(400).send('La franquicia hotelera no existe');
    });
}

module.exports = {
  createHotelFranchise,
  updateHotelFranchise,
  deleteHotelFranchise
};