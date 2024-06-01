const express = require('express');
const controller = require('../controllers/espectaculos');
const router = express.Router();

const path = 'espectaculos';
router.get(`/${path}`, controller.getData);
router.get(`/${path}/:id`, controller.getEspectaculoById);
router.post(`/${path}`, controller.addEspectaculo);
router.get(`/${path}/:id/edit`, controller.editEspectaculoById);
router.post(`/${path}/:id`, controller.updateEspectaculo);
router.get(`/${path}/:id/delete`, controller.deleteEspectaculo);

module.exports = router;
