const Estado = require('./model')

const createEstado = (req, res) => {
  const newEstado = new Estado(req.body)
  newEstado.save((error, estadoSaved) => {
    if (error) {
      res.status(422).send(error)
    } else {
      res.status(201).send(estadoSaved)
    }
  })
}

const getEstado = (req, res) => {
  Estado.findById(req.params.id, (error, estado) => {
    if (error) {
      res.status(500).send(error)
    } else if (estado) {
      res.send(estado)
    } else {
      res.status(404).send({})
    }
  })
}

const getEstados = (req, res) => {
  let query = req.query
  if (req.query.name) {
    query = { name: new RegExp(`.*${req.query.name}.*`, 'i') }
  }

  Estado.find(query, (error, estados) => {
    if (error) {
      res.status(404).send(error)
    } else {
      res.send(estados)
    }
  })
}

const updateEstado = (req, res) => {
  Estado.updateOne({ _id: req.params.id }, req.body, (error, result) => {
    if (error) {
      res.status(422).send(error)
    } else {
      res.send(result)
    }
  })
}

const deleteEstado = (req, res) => {
  Estado.findByIdAndDelete({ _id: req.params.id }, (error, result) => {
    if (error) {
      res.status(422).send(error)
    } else {
      res.send(result)
    }
  })
}

module.exports = { createEstado, getEstado, getEstados, updateEstado, deleteEstado }