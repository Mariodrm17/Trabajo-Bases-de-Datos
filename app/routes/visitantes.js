const express = require('express');
const controller = require('../controllers/visitantes');
const router = express.Router();

const path = 'visitantes';

// Ruta para obtener todos los visitantes
router.get(`/${path}`, controller.getData);

// Ruta para obtener un visitante por ID
router.get(`/${path}/:id`, controller.getVisitanteById);

// Ruta para crear un nuevo visitante
router.post(`/${path}`, controller.createVisitante);

// Ruta para editar un visitante
router.put(`/${path}/:id`, controller.updateVisitante);

router.get(`/${path}/:id/edit`, controller.editVisitanteById);
// Ruta para eliminar un visitante
router.delete(`/${path}/:id`, controller.deleteVisitante);

module.exports = router;
