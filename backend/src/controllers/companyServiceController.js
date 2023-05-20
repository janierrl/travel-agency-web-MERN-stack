const CompanyService = require('../models/CompanyService.js');

async function createCompanyService(req, res, next) {
  const name = req.body;
  const findCompanyService = await CompanyService.findOne({ name: name });

  if (findCompanyService) { return res.status(400).send('La compañía de servicio ya existe'); }

  const companyService = new CompanyService({
    name: name
  });

  await companyService.save();
  res.status(200).send('Compañía de servicio creada con éxito');
}

async function updateCompanyService(req, res, next) {
  const { _id, name } = req.body;
  
  await CompanyService.updateOne({ _id: _id }, {
    name: name
  })
    .then(() => {
      console.log('Compañía de servicio modificada con éxito');
      res.status(200).send('Compañía de servicio modificada con éxito');
    })
    .catch((error) => {
      console.error('Error al actualizar la compañía de servicio:', error);
      res.status(400).send('La compañía de servicio no existe');
    });
}

async function deleteCompanyService(req, res, next) {
  const _id = req.body;

  await CompanyService.deleteOne({ _id: _id })
    .then(() => {
      console.log('Compañía de servicio eliminada con éxito');
      res.status(200).send('Compañía de servicio eliminada con éxito');
    })
    .catch((error) => {
      console.error('Error al eliminar la compañía de servicio:', error);
      res.status(400).send('La compañía de servicio no existe');
    });
}

module.exports = {
  createCompanyService,
  updateCompanyService,
  deleteCompanyService
};