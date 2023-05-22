const { Router } = require('express');
const { createHotelFranchise, updateHotelFranchise, deleteHotelFranchise } = require('../controllers/hotelFranchiseController.js');

const router = Router();

router.post("/createHotelFranchise", createHotelFranchise);
router.post('/updateHotelFranchise', updateHotelFranchise);
router.post('/deleteHotelFranchise', deleteHotelFranchise);

module.exports = router;