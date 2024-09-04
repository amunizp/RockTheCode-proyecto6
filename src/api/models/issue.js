const { default: mongoose } = require('mongoose')
// const { Flat, flatSchema } = require('./flat')

const issueSchema = new mongoose.Schema(
  {
    person: { type: String, required: true },
    description: { type: String, required: true },
    flat: { type: mongoose.Types.ObjectId, required: false, ref: 'flats' }
    //apartment: flatSchema //store as subdocument
  },
  {
    timestamps: true,
    collection: 'issues'
  }
)

const Issue = mongoose.model('issues', issueSchema, 'issues')
module.exports = Issue
