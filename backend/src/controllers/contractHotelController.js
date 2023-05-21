const ContractHotel = require('../models/ContractHotel.js');

async function createContractHotel(req, res, next) {
  const { 
    id_contract,
    id_hotel
  } = req.body;
  const findContractHotel = await ContractHotel.findOne({ id_contract: id_contract });

  if (findContractHotel) { return res.status(400).send('El contrato de hotel ya existe'); }

  const contractHotel = new ContractHotel({
    id_contract: id_contract,
    id_hotel: id_hotel
  });

  await contractHotel.save();
  res.status(200).send('Contrato de hotel creado con éxito');
}

async function updateContractHotel(req, res, next) {
  const { 
    _id, 
    id_contract,
    id_hotel
  } = req.body;

  await ContractHotel.updateOne({ _id: _id }, {
    id_contract: id_contract,
    id_hotel: id_hotel
  })
    .then(() => {
      console.log('Contrato de hotel modificado con éxito');
      res.status(200).send('Contrato de hotel modificado con éxito');
    })
    .catch((error) => {
      console.error('Error al actualizar el contrato de hotel:', error);
      res.status(400).send('El contrato de hotel no existe');
    });
}

async function deleteContractHotel(req, res, next) {
  const _id = req.body;

  await ContractHotel.deleteOne({ _id: _id })
    .then(() => {
      console.log('Contrato de hotel eliminado con éxito');
      res.status(200).send('Contrato de hotel eliminado con éxito');
    })
    .catch((error) => {
      console.error('Error al eliminar el contrato de hotel:', error);
      res.status(400).send('El contrato de hotel no existe');
    });
}

module.exports = {
  createContractHotel,
  updateContractHotel,
  deleteContractHotel
};