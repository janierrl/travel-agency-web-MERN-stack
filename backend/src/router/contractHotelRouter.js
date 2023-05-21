const { Router } = require('express');
const { createContractHotel, updateContractHotel, deleteContractHotel } = require('../controllers/contractHotelController.js');

const router = Router();

router.post("/createContractHotel", createContractHotel);
router.post('/updateContractHotel', updateContractHotel);
router.post('/deleteContractHotel', deleteContractHotel);

module.exports = router;