const express = require('express');
const controller = require('../controllers/restaurantes');
const router = express.Router();

const path = 'restaurantes';
router.get(`/${path}`, controller.getData);
module.exports = router;