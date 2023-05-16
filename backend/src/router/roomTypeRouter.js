const { Router } = require('express');
const { createRoomType, updateRoomType, deleteRoomType } = require('../controllers/roomTypeController.js');

const router = Router();

router.post("/createRoomType", createRoomType);
router.post('/updateRoomType', updateRoomType);
router.post('/deleteRoomType', deleteRoomType);

module.exports = router;