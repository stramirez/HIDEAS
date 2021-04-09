const mongoose = require('mongoose')

//Creación de schema de categorias de base de datos mongo
//Schema de Categorias
const categoriaSchema = new mongoose.Schema({
  id: { type: String, required: true},
  descripcion: { type: String, required: true }
})

const Categoria = mongoose.model('categorias', categoriaSchema)

module.exports = Categoria
