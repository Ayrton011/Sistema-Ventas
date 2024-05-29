const express = require('express');
const router = express.Router();
const articuloControlador = require('../controlador/articuloControlador');
router.get('/', articuloControlador.getTodoslosArticulos);
router.post('/', articuloControlador.crearArticulo);

module.exports = router;