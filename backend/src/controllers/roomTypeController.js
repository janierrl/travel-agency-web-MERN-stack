const RoomType = require('../models/RoomType.js');

async function createRoomType(req, res, next) {
  const name = req.body;
  const findRoomType = await RoomType.findOne({ name: name });

  if (findRoomType) { return res.status(400).send('El tipo de habitación ya existe'); }

  const roomType = new RoomType({
    name: name
  });

  await roomType.save();
  res.status(200).send('Tipo de habitación creado con éxito');
}

async function updateRoomType(req, res, next) {
  const { _id, name } = req.body;
  
  await RoomType.updateOne({ _id: _id }, {
    name: name
  })
    .then(() => {
      console.log('Tipo de habitación modificado con éxito');
      res.status(200).send('Tipo de habitación modificado con éxito');
    })
    .catch((error) => {
      console.error('Error al actualizar el tipo de habitación:', error);
      res.status(400).send('El tipo de habitación no existe');
    });
}

async function deleteRoomType(req, res, next) {
  const _id = req.body;
  
  await RoomType.deleteOne({ _id: _id })
    .then(() => {
      console.log('Tipo de habitación eliminado con éxito');
      res.status(200).send('Tipo de habitación eliminado con éxito');
    })
    .catch((error) => {
      console.error('Error al eliminar el tipo de habitación:', error);
      res.status(400).send('El tipo de habitación no existe');
    });
}

module.exports = {
  createRoomType,
  updateRoomType,
  deleteRoomType
};