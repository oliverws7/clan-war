const express = require('express');
const router = express.Router();
const clanController = require('../controllers/clanController');

router.get('/stats', clanController.getClanStats);
router.get('/history', clanController.getWarHistory);

module.exports = router;
