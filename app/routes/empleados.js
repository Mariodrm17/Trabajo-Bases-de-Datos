const express = require('express');
const controller = require('../controllers/empleados');
const router = express.Router();

const path = 'empleados';
router.get(`/${path}`, controller.getData);
router.post(`/${path}/buscar`, controller.buscarEmpleadoPorNombre); // Ruta para buscar empleados por nombre

module.exports = router;
