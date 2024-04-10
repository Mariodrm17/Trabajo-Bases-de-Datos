const express = require('express');
const controller = require('../controllers/espectaculos');
const router = express.Router();

const path = 'espectaculos';
router.get(`/${path}`, controller.getData);
module.exports = router;