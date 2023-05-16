const { Router } = require('express');
const { createDailyActivity, updateDailyActivity, deleteDailyActivity } = require('../controllers/dailyActivityController.js');

const router = Router();

router.post("/createDailyActivity", createDailyActivity);
router.post('/updateDailyActivity', updateDailyActivity);
router.post('/deleteDailyActivity', deleteDailyActivity);

module.exports = router;