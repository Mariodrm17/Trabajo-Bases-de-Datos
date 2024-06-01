const express = require('express');
const controller = require('../controllers/visitas');
const router = express.Router();

const path = 'visitas';
router.get(`/${path}`, controller.getData);
router.get(`/${path}/agregar`, controller.showAddForm);
router.post(`/${path}/agregar`, controller.addVisit);

module.exports = router;
