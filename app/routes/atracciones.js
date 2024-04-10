const express = require('express');
const controller = require('../controllers/atracciones');
const router = express.Router();

const path = 'atracciones';
router.get(`/${path}`, controller.getData);
module.exports = router;