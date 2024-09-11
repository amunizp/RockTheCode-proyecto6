const User = require('../api/models/user')
const { verifyToken } = require('../utils/token')

const isAuth = async (req, res, next) => {
  try {
    // const [, token2] = req.headers.authorization.split(' ')
    const token = req.headers.authorization.split(' ').pop() //woould take the last space
    // const token3 = req.headers.authorization.substring(
    //   req.headers.authorization.indexOf(' ') + 1
    // )

    const { id } = verifyToken(token)
    const user = await User.findById(id)
    user.password = null
    req.user = user
    console.log(req.user)
    next()
  } catch (error) {
    return res
      .status(401)
      .json({ message: 'not autorized', error: error.message })
  }
}
module.exports = isAuth
