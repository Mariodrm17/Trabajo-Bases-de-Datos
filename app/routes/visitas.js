const express = require('express');
const controller = require('../controllers/visitas');
const router = express.Router();

const path = 'visitas';
router.get(`/${path}`, controller.getData);
module.exports = router;