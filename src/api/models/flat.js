const { default: mongoose } = require('mongoose')
const { validate } = require('./issue')
// There are only certain amount of courts and certain amount of Courts I need to validate that somehow.
//TODO Maybe this model should be called ParkleysModel, that way if another estate needs it they can use something different?
courts = [
  'Milton',
  'Gray',
  'Brooke',
  'Marlowe',
  'Spencer',
  'Shelley',
  'Pope',
  'Byron',
  'Coleridge',
  'Herrick',
  'Dryden',
  'Tennyson'
]
const flatSchema = new mongoose.Schema(
  {
    number: {
      type: Number,
      required: true,
      validate: {
        validator: (value) => value > 0 && value <= 18,
        message: 'Parkleys estate only has 18 max'
      }
    },
    court: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: 'flats'
  }
)

const Flat = mongoose.model('flats', flatSchema, 'flats')
module.exports = Flat
