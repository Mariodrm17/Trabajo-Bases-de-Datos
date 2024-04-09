const express = require('express');
const controller = require('../controllers/visitantes');
const router = express.Router();

const path = 'visitantes';
router.get(`/${path}`, controller.getData);
module.exports = router;