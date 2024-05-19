const express = require('express');
const router = express.Router();
const categoriaControlador = require('../controlador/categoriaControlador');

router.get('/', categoriaControlador.getTodaslasCategorias);

module.exports = router;