const Idea = require('./model')

const createIdea = (req, res) => {
  const newIdea = new Idea(req.body)
  newIdea.save((error, ideaSaved) => {
    if (error) {
      res.status(422).send(error)
    } else {
      res.status(201).send(ideaSaved)
    }
  })
}

const getIdea = (req, res) => {
  Idea.findById(req.params.id, (error, idea) => {
    if (error) {
      res.status(500).send(error)
    } else if (idea) {
      res.send(idea)
    } else {
      res.status(404).send({})
    }
  })
}

const getIdeas = (req, res) => {
  let query = req.query
  if (req.query.name) {
    query = { name: new RegExp(`.*${req.query.name}.*`, 'i') }
  }

  Idea.find(query, (error, ideas) => {
    if (error) {
      res.status(404).send(error)
    } else {
      res.send(ideas)
    }
  })
}

const updateIdea = (req, res) => {
  Idea.updateOne({ _id: req.params.id }, req.body, (error, result) => {
    if (error) {
      res.status(422).send(error)
    } else {
      res.send(result)
    }
  })
}

const deleteIdea = (req, res) => {
  Idea.findByIdAndDelete({ _id: req.params.id }, (error, result) => {
    if (error) {
      res.status(422).send(error)
    } else {
      res.send(result)
    }
  })
}

module.exports = { createIdea, getIdea, getIdeas, updateIdea, deleteIdea }