const ContractType = require('../models/ContractType.js');

async function createContractType(req, res, next) {
  const name = req.body;
  const findContractType = await ContractType.findOne({ name: name });

  if (findContractType) { return res.status(400).send('El tipo de contrato ya existe'); }

  const contractType = new ContractType({
    name: name
  });

  await contractType.save();
  res.status(200).send('Tipo de contrato creado con éxito');
}

async function updateContractType(req, res, next) {
  const { _id, name } = req.body;
  
  await ContractType.updateOne({ _id: _id }, {
    name: name
  })
    .then(() => {
      console.log('Tipo de contrato modificado con éxito');
      res.status(200).send('Tipo de contrato modificado con éxito');
    })
    .catch((error) => {
      console.error('Error al actualizar el tipo de contrato:', error);
      res.status(400).send('El tipo de contrato no existe');
    });
}

async function deleteContractType(req, res, next) {
  const _id = req.body;
  
  await ContractType.deleteOne({ _id: _id })
    .then(() => {
      console.log('Tipo de contrato eliminado con éxito');
      res.status(200).send('Tipo de contrato eliminado con éxito');
    })
    .catch((error) => {
      console.error('Error al eliminar el tipo de contrato:', error);
      res.status(400).send('El tipo de contrato no existe');
    });
}

module.exports = {
  createContractType,
  updateContractType,
  deleteContractType
};