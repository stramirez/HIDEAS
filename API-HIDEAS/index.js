const express = require('express')
const app = express()
const cors = require('cors')
const { PORT } = require('./config')

// Carga y abre la conexión con la base de datos
require('./db')

// Rutas
const ideaRoutes = require('./components/idea/routes')
const categoriaRoutes = require('./components/categoria/routes')
const estadoRoutes = require('./components/estado/routes')

// Middleware para permitir recibir solicitudes HTTP desde cualquier dominio
app.use(cors())

// Funcionalidad para leer datos en JSON desde el body de la petición
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}));

// Instalación de rutas en el router principal
app.use('/idea', ideaRoutes)
app.use('/categoria', categoriaRoutes)
app.use('/estado', estadoRoutes)

app.listen(PORT, () => {
  console.log(`Server APP listening at localhost:${PORT}`)
})
