const express = require('express');
const controller = require('../controllers/empleados');
const router = express.Router();

const path = 'empleados';
router.get(`/${path}`, controller.getData);
module.exports = router;