const { Router } = require('express');
const { createHotel, updateHotel, deleteHotel } = require('../controllers/hotelController.js');

const router = Router();

router.post("/createHotel", createHotel);
router.post('/updateHotel', updateHotel);
router.post('/deleteHotel', deleteHotel);

module.exports = router;