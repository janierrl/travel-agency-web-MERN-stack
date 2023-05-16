const { Router } = require('express');
const { createLocalization, updateLocalization, deleteLocalization } = require('../controllers/localizationController.js');

const router = Router();

router.post("/createLocalization", createLocalization);
router.post('/updateLocalization', updateLocalization);
router.post('/deleteLocalization', deleteLocalization);

module.exports = router;