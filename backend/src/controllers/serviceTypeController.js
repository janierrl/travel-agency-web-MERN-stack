const ServiceType = require('../models/ServiceType.js');

async function createServiceType(req, res, next) {
  const name = req.body;
  const findServiceType = await ServiceType.findOne({ name: name });

  if (findServiceType) { return res.status(400).send('El tipo de servicio ya existe'); }

  const serviceType = new ServiceType({
    name: name
  });

  await serviceType.save();
  res.status(200).send('Tipo de servicio creado con éxito');
}

async function updateServiceType(req, res, next) {
  const { _id, name } = req.body;
  
  await ServiceType.updateOne({ _id: _id }, {
    name: name
  })
    .then(() => {
      console.log('Tipo de servicio modificado con éxito');
      res.status(200).send('Tipo de servicio modificado con éxito');
    })
    .catch((error) => {
      console.error('Error al actualizar el tipo de servicio:', error);
      res.status(400).send('El tipo de servicio no existe');
    });
}

async function deleteServiceType(req, res, next) {
  const _id = req.body;
  
  await ServiceType.deleteOne({ _id: _id })
    .then(() => {
      console.log('Tipo de servicio eliminado con éxito');
      res.status(200).send('Tipo de servicio eliminado con éxito');
    })
    .catch((error) => {
      console.error('Error al eliminar el tipo de servicio:', error);
      res.status(400).send('El tipo de servicio no existe');
    });
}

module.exports = {
  createServiceType,
  updateServiceType,
  deleteServiceType
};