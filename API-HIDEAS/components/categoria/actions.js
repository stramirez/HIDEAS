const Categoria = require('./model')

const createCategoria = (req, res) => {
  const newCategoria = new Categoria(req.body)
  newCategoria.save((error, categoriaSaved) => {
    if (error) {
      res.status(422).send(error)
    } else {
      res.status(201).send(categoriaSaved)
    }
  })
}

const getCategoria = (req, res) => {
  Categoria.findById(req.params.id, (error, categoria) => {
    if (error) {
      res.status(500).send(error)
    } else if (categoria) {
      res.send(categoria)
    } else {
      res.status(404).send({})
    }
  })
}

const getCategorias = (req, res) => {
  let query = req.query
  if (req.query.name) {
    query = { name: new RegExp(`.*${req.query.name}.*`, 'i') }
  }

  Categoria.find(query, (error, categorias) => {
    if (error) {
      res.status(404).send(error)
    } else {
      res.send(categorias)
    }
  })
}

const updateCategoria = (req, res) => {
  Categoria.updateOne({ _id: req.params.id }, req.body, (error, result) => {
    if (error) {
      res.status(422).send(error)
    } else {
      res.send(result)
    }
  })
}

const deleteCategoria = (req, res) => {
  Categoria.findByIdAndDelete({ _id: req.params.id }, (error, result) => {
    if (error) {
      res.status(422).send(error)
    } else {
      res.send(result)
    }
  })
}

module.exports = { createCategoria, getCategoria, getCategorias, updateCategoria, deleteCategoria }