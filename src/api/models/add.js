//const mongoose = require('mongoose')

// const addtionSchema = new mongoose.Schema(
//   {
//     number1: { type: Number, required: true },
//     number2: { type: Number, required: true },
//     N1PlusN2: { type: Number }
//   },
//   {
//     timestamps: true,
//     collection: 'additions'
//   }
// )

//const Additon = mongoose.model('additions', addtionSchema, 'addtions')
const Additon = async (N1, N2) => {
  {
    N1PlusN2: N1 + N2
  }
}

module.exports = Additon(N1, N2)
