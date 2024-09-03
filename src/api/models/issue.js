const { default: mongoose } = require('mongoose')

const issueSchema = new mongoose.Schema(
  {
    person: { type: String, required: true },
    description: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: 'cuadros'
  }
)

const Issue = mongoose.model('issues', issueSchema, 'issues')
module.exports = Issue
