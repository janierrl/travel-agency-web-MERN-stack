const { Router } = require('express');
const { createModalityHotelComertial, updateModalityHotelComertial, deleteModalityHotelComertial } = require('../controllers/modalityHotelComertialController.js');

const router = Router();

router.post("/createModalityHotelComertial", createModalityHotelComertial);
router.post('/updateModalityHotelComertial', updateModalityHotelComertial);
router.post('/deleteModalityHotelComertial', deleteModalityHotelComertial);

module.exports = router;