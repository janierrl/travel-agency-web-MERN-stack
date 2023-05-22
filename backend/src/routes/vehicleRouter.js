const { Router } = require('express');
const { createVehicle, updateVehicle, deleteVehicle } = require('../controllers/vehicleController.js');

const router = Router();

router.post("/createVehicle", createVehicle);
router.post('/updateVehicle', updateVehicle);
router.post('/deleteVehicle', deleteVehicle);

module.exports = router;