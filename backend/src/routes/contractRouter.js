const { Router } = require('express');
const { createContract, updateContract, deleteContract } = require('../controllers/contractController.js');

const router = Router();

router.post("/createContract", createContract);
router.post('/updateContract', updateContract);
router.post('/deleteContract', deleteContract);

module.exports = router;