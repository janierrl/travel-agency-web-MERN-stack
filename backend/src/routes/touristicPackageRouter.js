const { Router } = require('express');
const { createTouristicPackage, updateTouristicPackage, deleteTouristicPackage } = require('../controllers/touristicPackageController.js');

const router = Router();

router.post("/createTouristicPackage", createTouristicPackage);
router.post('/updateTouristicPackage', updateTouristicPackage);
router.post('/deleteTouristicPackage', deleteTouristicPackage);

module.exports = router;