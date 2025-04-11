const express = require('express');
const router = express.Router();
const gastoController = require('../controllers/gastosController');

// Definir las rutas para manejar los gastos
router.post('/api/gastos', gastoController.createGasto);
router.get('/api/gastos', gastoController.getGastos);

module.exports = router;
