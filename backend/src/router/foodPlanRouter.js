const { Router } = require('express');
const { createFoodPlan, updateFoodPlan, deleteFoodPlan } = require('../controllers/foodPlanController.js');

const router = Router();

router.post("/createFoodPlan", createFoodPlan);
router.post('/updateFoodPlan', updateFoodPlan);
router.post('/deleteFoodPlan', deleteFoodPlan);

module.exports = router;