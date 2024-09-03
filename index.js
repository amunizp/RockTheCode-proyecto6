console.log('esto arrancó')
// configurar que pueda acceder a las variables del .env
require('dotenv').config()

// me traigo el módulo de express para poder crear el servidor
const express = require('express')
// me traigo la función de conexión con la bbdd que hemos creado previamente
const { connectDB } = require('./src/config/db')
const addRoutes = require('./src/api/routes/add')
const issuesRoutes = require('./src/api/routes/issue')
const flatsRoutes = require('./src/api/routes/flat')
// ejecutamos express y lo guardamos en una variable
const app = express()
//connectamos BBDD
connectDB()

// req.body de formato json
app.use(express.json())

app.use('/api/v1/additions', addRoutes)
app.use('/api/v1/issues', issuesRoutes)
app.use('/api/v1/flats', flatsRoutes)
app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

// ponemos a escuchar a nuestro servidor
port = 3000
app.listen(port, () => {
  console.log('http://localhost:3000')
})
