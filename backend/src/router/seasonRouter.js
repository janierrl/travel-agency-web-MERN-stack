const { Router } = require('express');
const { createSeason, updateSeason, deleteSeason } = require('../controllers/seasonController.js');

const router = Router();

router.post("/createSeason", createSeason);
router.post('/updateSeason', updateSeason);
router.post('/deleteSeason', deleteSeason);

module.exports = router;