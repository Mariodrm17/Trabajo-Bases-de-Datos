const express = require('express');
const controller = require('../controllers/areas');
const router = express.Router();

const path = 'areas';
router.get(`/${path}`, controller.getData);
module.exports = router;