const { default: mongoose } = require('mongoose')

//TODO in case circular reference to the same collection does not work.
//! reading about mongoDB it seems it is not a good choice for data that uses
//reference to other data. Maybe postgreSQL or a graph data base called Neo4J might be better.
const updateSchema = new mongoose.Schema(
  {
    person: { type: String, required: true },
    description: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: 'updates'
  }
)

const Update = mongoose.model('updates', updateSchema, 'updates')
module.exports = Update
