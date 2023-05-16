const { Router } = require('express');
const { createContractType, updateContractType, deleteContractType } = require('../controllers/contractTypeController.js');

const router = Router();

router.post("/createContractType", createContractType);
router.post('/updateContractType', updateContractType);
router.post('/deleteContractType', deleteContractType);

module.exports = router;