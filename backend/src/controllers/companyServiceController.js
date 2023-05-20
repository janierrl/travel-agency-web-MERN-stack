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
  const companyService = await CompanyService.findOne({ _id: _id });

  if (!companyService) { return res.status(400).send('La compañía de servicio no existe'); }

  companyService.name = name;

  await companyService.save();
  res.status(200).send('Compañía de serviciol modificada con éxito');
}

async function deleteCompanyService(req, res, next) {
  const _id = req.body;
  const findCompanyService = await CompanyService.findOne({ _id: _id });

  if (!findCompanyService) { return res.status(400).send('La compañía de servicio no existe'); }

  await CompanyService.deleteOne({ _id: _id });
  res.status(200).send('Compañía de servicio eliminada con éxito');
}

module.exports = {
  createCompanyService,
  updateCompanyService,
  deleteCompanyService
};