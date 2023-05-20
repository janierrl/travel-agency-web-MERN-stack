const Contract = require('../models/Contract.js');

async function createContract(req, res, next) {
  const { start_date, finish_date, conciliation_date, description, id_contract_type } = req.body;
  const findContract = await Contract.findOne({ description: description });

  if (findContract) { return res.status(400).send('El contrato ya existe'); }

  const contract = new Contract({
    start_date: start_date,
    finish_date: finish_date,
    conciliation_date: conciliation_date,
    description: description,
    id_contract_type: id_contract_type
  });

  await contract.save();
  res.status(200).send('Contrato creado con éxito');
}

async function updateContract(req, res, next) {
  const { _id, start_date, finish_date, conciliation_date, description, id_contract_type } = req.body;

  await Contract.updateOne({ _id: _id }, {
    start_date: start_date,
    finish_date: finish_date,
    conciliation_date: conciliation_date,
    description: description,
    id_contract_type: id_contract_type
  })
    .then(() => {
      console.log('Contrato modificado con éxito');
      res.status(200).send('Contrato modificado con éxito');
    })
    .catch((error) => {
      console.error('Error al actualizar el contrato:', error);
      res.status(400).send('El contrato no existe');
    });
}

async function deleteContract(req, res, next) {
  const _id = req.body;

  await Contract.deleteOne({ _id: _id })
    .then(() => {
      console.log('Contrato eliminado con éxito');
      res.status(200).send('Contrato eliminado con éxito');
    })
    .catch((error) => {
      console.error('Error al eliminar el contrato:', error);
      res.status(400).send('El contrato no existe');
    });
}

module.exports = {
  createContract,
  updateContract,
  deleteContract
};