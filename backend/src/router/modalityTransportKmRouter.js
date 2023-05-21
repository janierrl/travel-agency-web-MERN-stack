const { Router } = require('express');
const { createModalityTransportKm, updateModalityTransportKm, deleteModalityTransportKm } = require('../controllers/modalityTransportKmController.js');

const router = Router();

router.post("/createModalityTransportKm", createModalityTransportKm);
router.post('/updateModalityTransportKm', updateModalityTransportKm);
router.post('/deleteModalityTransportKm', deleteModalityTransportKm);

module.exports = router;