const express = require('express')
const router = express.Router()
const { createCategoria, getCategoria, getCategorias, updateCategoria, deleteCategoria } = require('./actions')

// GET all Categorias
router.get('/', getCategorias)

// GET Categoria by ID
router.get('/:id', getCategoria)

// POST Create a categoria
router.post('/', createCategoria)

//PUT Update categoria info
router.put('/:id', updateCategoria)

//DELETE delete categoria by ID
router.delete('/:id', deleteCategoria)

module.exports = router