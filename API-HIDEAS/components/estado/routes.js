const express = require('express')
const router = express.Router()
const { createEstado, getEstado, getEstados, updateEstado, deleteEstado } = require('./actions')

// GET all Estados
router.get('/', getEstados)

// GET estado by ID
router.get('/:id', getEstado)

// POST Create a estado
router.post('/', createEstado)

//PUT Update estado info
router.put('/:id', updateEstado)

//DELETE delete estado by ID
router.delete('/:id', deleteEstado)

module.exports = router