const express = require('express');
const router = express.Router();
const categoriaControlador = require('../controlador/categoriaControlador');

router.get('/:busqueda', categoriaControlador.buscarCategoria);
router.get('/', categoriaControlador.getTodaslasCategorias);
router.get('/:id', categoriaControlador.getCategoriaPorId);
router.post('/', categoriaControlador.crearCategoria);
router.put('/:id', categoriaControlador.actualizarCategoria);
router.delete('/:id', categoriaControlador.eliminarCategoria);

module.exports = router;