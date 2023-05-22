const { Router } = require('express');
const { createContractTransport, updateContractTransport, deleteContractTransport } = require('../controllers/contractTransportController.js');

const router = Router();

router.post("/createContractTransport", createContractTransport);
router.post('/updateContractTransport', updateContractTransport);
router.post('/deleteContractTransport', deleteContractTransport);

module.exports = router;