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
  const hotelFranchise = await HotelFranchise.findOne({ _id: _id });

  if (!hotelFranchise) { return res.status(400).send('La franquicia hotelera no existe'); }

  hotelFranchise.name = name;

  await hotelFranchise.save();
  res.status(200).send('Franquicia hotelera modificada con éxito');
}

async function deleteHotelFranchise(req, res, next) {
  const _id = req.body;
  const findHotelFranchise = await HotelFranchise.findOne({ _id: _id });

  if (!findHotelFranchise) { return res.status(400).send('La franquicia hotelera no existe'); }

  await HotelFranchise.deleteOne({ _id: _id });
  res.status(200).send('Franquicia hotelera eliminada con éxito');
}

module.exports = {
  createHotelFranchise,
  updateHotelFranchise,
  deleteHotelFranchise
};