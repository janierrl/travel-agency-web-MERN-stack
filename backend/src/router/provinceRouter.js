const { Router } = require('express');
const { createProvince, updateProvince, deleteProvince } = require('../controllers/provinceController.js');

const router = Router();

router.post("/createProvince", createProvince);
router.post('/updateProvince', updateProvince);
router.post('/deleteProvince', deleteProvince);

module.exports = router;