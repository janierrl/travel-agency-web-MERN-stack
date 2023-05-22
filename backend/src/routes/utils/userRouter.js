const { Router } = require('express');
const { signup, me, sigin, recoverAccount } = require('../../controllers/utils/userController.js');

const router = Router();

router.post("/signup", signup);
router.get('/me', me);
router.post('/sigin', sigin);
router.post('/recoverAccount', recoverAccount);

module.exports = router;