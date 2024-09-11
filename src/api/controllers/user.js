const bcrypt = require('bcrypt')

const User = require('../models/user')
const { generateToken } = require('../../utils/token')

async function registerUser(req, res, next) {
  try {
    const user = new User(req.body)
    const userExist = await User.findOne({ email: user.email })
    if (userExist) {
      return res
        .status(400)
        .json('error registering user, Do you have it already?')
    }

    const userDB = await user.save()
    return res.status(201).json(userDB)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error registering', error: error.message })
  }
}

async function loginUser(req, res, next) {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email }) //nombre de propiedad es isgual que nombre variable.

    if (!user) {
      return res.status(400).json('username or password in correct')
    }
    if (bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user._id, user.email)
      return res.status(200).json({ token, user })
    } else {
      res.status(400).json('username or password in correct')
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error in login', error: error.message })
  }
}

async function getUsers(req, res, next) {
  try {
    const allUsers = await User.find()
    return res.status(200).json(allUsers)
  } catch (error) {
    console.log(error)
    console.error()

    return res.status(400).json('Error when reading')
  }
}
module.exports = { registerUser, getUsers, loginUser }
