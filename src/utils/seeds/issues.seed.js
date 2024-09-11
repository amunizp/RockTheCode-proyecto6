require('dotenv').config()
const Issue = require('../../api/models/issue')
const { issues } = require('../../data/issues')
const mongoose = require('mongoose')

// En este caso, nos conectaremos de nuevo a nuestra base de datos
// pero nos desconectaremos tras insertar los documentos
mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    const allIssues = await Issue.find()
    // Si existen películas previamente, dropearemos la colección
    if (allIssues.length) {
      await Issue.collection.drop() //La función drop borra la colección
    } else {
      console.log('Nothing to drop')
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Issue.insertMany(issues)
    console.log('all the seeds inserted')
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect())
