const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    // emoji: { type: String, trim: true, required: true },
    password: {
      type: String,
      trim: true,
      required: true,
      minlength: [8, 'Password 8 characters minimum']
    },
    email: {
      type: String,
      trim: true,
      required: true
    }
  },
  {
    timestamps: true
  }
)

userSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, 10) //await needs to be in async and at the top?
  next()
})

const User = mongoose.model('users', userSchema)
module.exports = User
