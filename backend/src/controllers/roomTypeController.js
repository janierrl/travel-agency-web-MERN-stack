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
  const roomType = await RoomType.findOne({ _id: _id });

  if (!roomType) { return res.status(400).send('El tipo de habitación no existe'); }

  roomType.name = name;

  await roomType.save();
  res.status(200).send('Tipo de habitación modificado con éxito');
}

async function deleteRoomType(req, res, next) {
  const _id = req.body;
  const findRoomType = await RoomType.findOne({ _id: _id });

  if (!findRoomType) { return res.status(400).send('El tipo de habitación no existe'); }

  await RoomType.deleteOne({ _id: _id });
  res.status(200).send('Tipo de habitación eliminado con éxito');
}

module.exports = {
  createRoomType,
  updateRoomType,
  deleteRoomType
};