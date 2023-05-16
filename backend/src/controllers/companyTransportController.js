const CompanyTransport = require('../models/CompanyTransport.js');

async function createCompanyTransport(req, res, next) {
  const name = req.body;
  const findCompanyTransport = await CompanyTransport.findOne({ name: name });

  if (findCompanyTransport) { return res.status(400).send('La compañía de transporte ya existe'); }

  const companyTransport = new CompanyTransport({
      name: name
  });

  await companyTransport.save();
  res.status(200).send('Compañía de transporte creada con éxito');
}

async function updateCompanyTransport(req, res, next) {
  const { _id, name } = req.body;
  const companyTransport = await CompanyTransport.findOne({ _id: _id });

  if (!companyTransport) { return res.status(400).send('La compañía de transporte no existe'); }

  companyTransport.name = name;

  await companyTransport.save();
  res.status(200).send('Compañía de transporte modificada con éxito');
}

async function deleteCompanyTransport(req, res, next) {
  const _id = req.body;
  const findCompanyTransport = await CompanyTransport.findOne({ _id: _id });

  if (!findCompanyTransport) { return res.status(400).send('La compañía de transporte no existe'); }

  await CompanyTransport.deleteOne({ _id: _id });
  res.status(200).send('Compañía de transporte eliminada con éxito');
}

module.exports = {
  createCompanyTransport,
  updateCompanyTransport,
  deleteCompanyTransport
};