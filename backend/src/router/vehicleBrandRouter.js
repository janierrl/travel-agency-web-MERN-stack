const { Router } = require('express');
const { createVehicleBrand, updateVehicleBrand, deleteVehicleBrand } = require('../controllers/vehicleBrandController.js');

const router = Router();

router.post("/createVehicleBrand", createVehicleBrand);
router.post('/updateVehicleBrand', updateVehicleBrand);
router.post('/deleteVehicleBrand', deleteVehicleBrand);

module.exports = router;