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
  
  await CompanyTransport.updateOne({ _id: _id }, {
    name: name
  })
    .then(() => {
      console.log('Compañía de transporte modificada con éxito');
      res.status(200).send('Compañía de transporte modificada con éxito');
    })
    .catch((error) => {
      console.error('Error al actualizar la compañía de transporte:', error);
      res.status(400).send('La compañía de transporte no existe');
    });
}

async function deleteCompanyTransport(req, res, next) {
  const _id = req.body;

  await CompanyTransport.deleteOne({ _id: _id })
    .then(() => {
      console.log('Compañía de transporte eliminada con éxito');
      res.status(200).send('Compañía de transporte eliminada con éxito');
    })
    .catch((error) => {
      console.error('Error al eliminar la compañía de transporte:', error);
      res.status(400).send('La compañía de transporte no existe');
    });
}

module.exports = {
  createCompanyTransport,
  updateCompanyTransport,
  deleteCompanyTransport
};