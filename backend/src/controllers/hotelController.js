const Hotel = require('../models/Hotel.js');

async function createHotel(req, res, next) {
  const { 
    name,
    address,
    category,
    telephone_number,
    fax,
    email,
    dist_to_city,
    dist_to_airport,
    rooms_amount,
    floors_amount,
    id_localization,
    id_province,
    id_hotel_franchise 
  } = req.body;
  const findHotel = await Hotel.findOne({ name: name });

  if (findHotel) { return res.status(400).send('El hotel ya existe'); }

  const hotel = new Hotel({
    name: name,
    address: address,
    category: category,
    telephone_number: telephone_number,
    fax: fax,
    email: email,
    dist_to_city: dist_to_city,
    dist_to_airport: dist_to_airport,
    rooms_amount: rooms_amount,
    floors_amount: floors_amount,
    id_localization: id_localization,
    id_province: id_province,
    id_hotel_franchise: id_hotel_franchise
  });

  await hotel.save();
  res.status(200).send('Hotel creado con éxito');
}

async function updateHotel(req, res, next) {
  const { 
    _id, 
    name,
    address,
    category,
    telephone_number,
    fax,
    email,
    dist_to_city,
    dist_to_airport,
    rooms_amount,
    floors_amount,
    id_localization,
    id_province,
    id_hotel_franchise 
  } = req.body;

  await Hotel.updateOne({ _id: _id }, {
    name: name,
    address: address,
    category: category,
    telephone_number: telephone_number,
    fax: fax,
    email: email,
    dist_to_city: dist_to_city,
    dist_to_airport: dist_to_airport,
    rooms_amount: rooms_amount,
    floors_amount: floors_amount,
    id_localization: id_localization,
    id_province: id_province,
    id_hotel_franchise: id_hotel_franchise
  })
    .then(() => {
      console.log('Hotel modificado con éxito');
      res.status(200).send('Hotel modificado con éxito');
    })
    .catch((error) => {
      console.error('Error al actualizar el hotel:', error);
      res.status(400).send('El hotel no existe');
    });
}

async function deleteHotel(req, res, next) {
  const _id = req.body;

  await Hotel.deleteOne({ _id: _id })
    .then(() => {
      console.log('Hotel eliminado con éxito');
      res.status(200).send('Hotel eliminado con éxito');
    })
    .catch((error) => {
      console.error('Error al eliminar el hotel:', error);
      res.status(400).send('El hotel no existe');
    });
}

module.exports = {
  createHotel,
  updateHotel,
  deleteHotel
};