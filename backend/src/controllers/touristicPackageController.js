const TouristicPackage = require('../models/TouristicPackage.js');

async function createTouristicPackage(req, res, next) {
  const { 
    promotional_name, 
    days_amount, 
    nights_amount, 
    pax_amount, 
    cost_hotel, 
    cost_transport, 
    cost_transport_hotel_airport, 
    cost_total, 
    price 
  } = req.body;
  const findTouristicPackage = await TouristicPackage.findOne({ promotional_name: promotional_name });

  if (findTouristicPackage) { return res.status(400).send('El paquete turísitco ya existe'); }

  const touristicPackage = new TouristicPackage({
    promotional_name: promotional_name,
    days_amount: days_amount,
    nights_amount: nights_amount,
    pax_amount: pax_amount,
    cost_hotel: cost_hotel,
    cost_transport: cost_transport,
    cost_transport_hotel_airport: cost_transport_hotel_airport,
    cost_total: cost_total,
    price: price
  });

  await touristicPackage.save();
  res.status(200).send('Paquete turístico creado con éxito');
}

async function updateTouristicPackage(req, res, next) {
  const { 
    _id, 
    promotional_name, 
    days_amount, 
    nights_amount, 
    pax_amount, 
    cost_hotel, 
    cost_transport, 
    cost_transport_hotel_airport, 
    cost_total, 
    price 
  } = req.body;

  await TouristicPackage.updateOne({ _id: _id }, {
    promotional_name: promotional_name, 
    days_amount: days_amount,
    nights_amount: nights_amount, 
    pax_amount: pax_amount, 
    cost_hotel: cost_hotel, 
    cost_transport: cost_transport, 
    cost_transport_hotel_airport: cost_transport_hotel_airport, 
    cost_total: cost_total, 
    price: price 
  })
    .then(() => {
      console.log('Paquete turístico modificado con éxito');
      res.status(200).send('Paquete turístico modificado con éxito');
    })
    .catch((error) => {
      console.error('Error al actualizar el paquete turístico:', error);
      res.status(400).send('El paquete turístico no existe');
    });
}

async function deleteTouristicPackage(req, res, next) {
  const _id = req.body;

  await TouristicPackage.deleteOne({ _id: _id })
    .then(() => {
      console.log('Paquete turístico eliminado con éxito');
      res.status(200).send('Paquete turístico eliminado con éxito');
    })
    .catch((error) => {
      console.error('Error al eliminar el paquete turístico:', error);
      res.status(400).send('El paquete turístico no existe');
    });
}

module.exports = {
  createTouristicPackage,
  updateTouristicPackage,
  deleteTouristicPackage
};