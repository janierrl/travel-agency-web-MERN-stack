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
  const contractType = await ContractType.findOne({ _id: _id });

  if (!contractType) { return res.status(400).send('El tipo de contrato no existe'); }

  contractType.name = name;

  await contractType.save();
  res.status(200).send('Tipo de contrato modificado con éxito');
}

async function deleteContractType(req, res, next) {
  const _id = req.body;
  const findContractType = await ContractType.findOne({ _id: _id });

  if (!findContractType) { return res.status(400).send('El tipo de contrato no existe'); }

  await ContractType.deleteOne({ _id: _id });
  res.status(200).send('Tipo de contrato eliminado con éxito');
}

module.exports = {
  createContractType,
  updateContractType,
  deleteContractType
};