console.log('esto arrancó')
// configurar que pueda acceder a las variables del .env, se suele realizar lo primero de todo
require('dotenv').config()

// me traigo el módulo de express para poder crear el servidor
const express = require('express')
// me traigo la función de conexión con la bbdd que hemos creado previamente
const { connectDB } = require('./src/config/db')
// ejecutamos express y lo guardamos en una variable, en mi caso me gusta llamarle app porque así viene en la documentación de la librería
const app = express()

connectDB()

// req.body de formato json
app.use(express.json())

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

// ponemos a escuchar a nuestro servidor
port = 3000
app.listen(port, () => {
  console.log('http://localhost:3000')
})
