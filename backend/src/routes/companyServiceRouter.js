const { Router } = require('express');
const { createCompanyService, updateCompanyService, deleteCompanyService } = require('../controllers/companyServiceController.js');

const router = Router();

router.post("/createCompanyService", createCompanyService);
router.post('/updateCompanyService', updateCompanyService);
router.post('/deleteCompanyService', deleteCompanyService);

module.exports = router;