const ContractService = require('../models/ContractService.js');

async function createContractService(req, res, next) {
  const { 
    pax_cost,
    id_contract,
    id_province
  } = req.body;
  const findContractService = await ContractService.findOne({ id_contract: id_contract });

  if (findContractService) { return res.status(400).send('El contrato de servicio ya existe'); }

  const contractService = new ContractService({
    pax_cost: pax_cost,
    id_contract: id_contract,
    id_province: id_province
  });

  await contractService.save();
  res.status(200).send('Contrato de servicio creado con éxito');
}

async function updateContractService(req, res, next) {
  const { 
    _id, 
    pax_cost,
    id_contract,
    id_province 
  } = req.body;

  await ContractService.updateOne({ _id: _id }, {
    pax_cost: pax_cost,
    id_contract: id_contract,
    id_province: id_province
  })
    .then(() => {
      console.log('Contrato de servicio modificado con éxito');
      res.status(200).send('Contrato de servicio modificado con éxito');
    })
    .catch((error) => {
      console.error('Error al actualizar el contrato de servicio:', error);
      res.status(400).send('El contrato de servicio no existe');
    });
}

async function deleteContractService(req, res, next) {
  const _id = req.body;

  await ContractService.deleteOne({ _id: _id })
    .then(() => {
      console.log('Contrato de servicio eliminado con éxito');
      res.status(200).send('Contrato de servicio eliminado con éxito');
    })
    .catch((error) => {
      console.error('Error al eliminar el contrato de servicio:', error);
      res.status(400).send('El contrato de servicio no existe');
    });
}

module.exports = {
  createContractService,
  updateContractService,
  deleteContractService
};