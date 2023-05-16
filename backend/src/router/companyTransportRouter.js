const { Router } = require('express');
const { createCompanyTransport, updateCompanyTransport, deleteCompanyTransport } = require('../controllers/companyTransportController.js');

const router = Router();

router.post("/createCompanyTransport", createCompanyTransport);
router.post('/updateCompanyTransport', updateCompanyTransport);
router.post('/deleteCompanyTransport', deleteCompanyTransport);

module.exports = router;