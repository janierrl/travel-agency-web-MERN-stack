const ContractTransport = require('../models/ContractTransport.js');

async function createContractTransport(req, res, next) {
  const { 
    id_contract,
    id_company_transport
  } = req.body;
  const findContractTransport = await ContractTransport.findOne({ id_contract: id_contract });

  if (findContractTransport) { return res.status(400).send('El contrato de transporte ya existe'); }

  const contractTransport = new ContractTransport({
    id_contract: id_contract,
    id_company_transport: id_company_transport
  });

  await contractTransport.save();
  res.status(200).send('Contrato de transporte creado con éxito');
}

async function updateContractTransport(req, res, next) {
  const { 
    _id, 
    id_contract,
    id_company_transport
  } = req.body;

  await ContractTransport.updateOne({ _id: _id }, {
    id_contract: id_contract,
    id_company_transport: id_company_transport
  })
    .then(() => {
      console.log('Contrato de transporte modificado con éxito');
      res.status(200).send('Contrato de transporte modificado con éxito');
    })
    .catch((error) => {
      console.error('Error al actualizar el contrato de transporte:', error);
      res.status(400).send('El contrato de transporte no existe');
    });
}

async function deleteContractTransport(req, res, next) {
  const _id = req.body;

  await ContractTransport.deleteOne({ _id: _id })
    .then(() => {
      console.log('Contrato de transporte eliminado con éxito');
      res.status(200).send('Contrato de transporte eliminado con éxito');
    })
    .catch((error) => {
      console.error('Error al eliminar el contrato de transporte:', error);
      res.status(400).send('El contrato de transporte no existe');
    });
}

module.exports = {
  createContractTransport,
  updateContractTransport,
  deleteContractTransport
};