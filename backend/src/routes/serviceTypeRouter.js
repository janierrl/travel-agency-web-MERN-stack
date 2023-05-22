const { Router } = require('express');
const { createServiceType, updateServiceType, deleteServiceType } = require('../controllers/serviceTypeController.js');

const router = Router();

router.post("/createServiceType", createServiceType);
router.post('/updateServiceType', updateServiceType);
router.post('/deleteServiceType', deleteServiceType);

module.exports = router;