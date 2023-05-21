const { Router } = require('express');
const { createModalityTransportHrKm, updateModalityTransportHrKm, deleteModalityTransportHrKm } = require('../controllers/modalityTransportHrKmController.js');

const router = Router();

router.post("/createModalityTransportHrKm", createModalityTransportHrKm);
router.post('/updateModalityTransportHrKm', updateModalityTransportHrKm);
router.post('/deleteModalityTransportHrKm', deleteModalityTransportHrKm);

module.exports = router;