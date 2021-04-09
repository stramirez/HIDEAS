const express = require('express')
const router = express.Router()
const { createIdea, getIdea, getIdeas, updateIdea, deleteIdea } = require('./actions')

// GET all ideas
router.get('/', getIdeas)

// GET idea by ID
router.get('/:id', getIdea)

// POST Create a idea
router.post('/', createIdea)

//PUT Update idea's info
router.put('/:id', updateIdea)

//DELETE delete idea's by ID
router.delete('/:id', deleteIdea)

module.exports = router