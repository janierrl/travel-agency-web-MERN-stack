const { Router } = require('express');
const { createModalityTransportRt, updateModalityTransportRt, deleteModalityTransportRt } = require('../controllers/modalityTransportRtController.js');

const router = Router();

router.post("/createModalityTransportRt", createModalityTransportRt);
router.post('/updateModalityTransportRt', updateModalityTransportRt);
router.post('/deleteModalityTransportRt', deleteModalityTransportRt);

module.exports = router;