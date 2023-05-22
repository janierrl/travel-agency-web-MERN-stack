const { Router } = require('express');
const { createContractService, updateContractService, deleteContractService } = require('../controllers/contractServiceController.js');

const router = Router();

router.post("/createContractService", createContractService);
router.post('/updateContractService', updateContractService);
router.post('/deleteContractService', deleteContractService);

module.exports = router;