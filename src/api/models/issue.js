const { default: mongoose } = require('mongoose')

const issueSchema = new mongoose.Schema(
  {
    person: { type: String, required: true },
    description: { type: String, required: true },
    flat: { type: mongoose.Types.ObjectId, required: false, ref: 'flats' }
  },
  {
    timestamps: true,
    collection: 'cuadros'
  }
)

const Issue = mongoose.model('issues', issueSchema, 'issues')
module.exports = Issue
