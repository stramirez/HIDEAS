const mongoose = require('mongoose')

//Schema de Ideas
const ideaSchema = new mongoose.Schema({
  id: { type: String, required: true},
  categoria: { type: String, required: false },
  id_proyecto: { type: String, required: false },
  titulo_idea: { type: String, required: true },
  fecha_creacion: { type: Date, required: true },
  descripcion: { type: String, required: true },
  estado: { type: String, required: true },
  tecnologia: { type: String, required: false },
  inversion_prevista: { type: Number, required: false },
  responsable: { type: String, required: true },
  fecha_modificacion: { type: Date, required: false },
  propietario: { type: String, required: false },
}, {
  timestamps: true
});

const Idea = mongoose.model('ideas', ideaSchema)

module.exports = Idea
