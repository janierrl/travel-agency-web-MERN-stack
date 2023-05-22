const { Router } = require('express');
const { verifyEmail, verifyCode } = require('../../controllers/utils/codeController.js');

const router = Router();

router.post("/verifyEmail", verifyEmail);
router.post('/verifyCode', verifyCode);

module.exports = router;