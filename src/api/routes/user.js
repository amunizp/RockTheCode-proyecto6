const isAuth = require('../../middleware/isAuth')
const { registerUser, getUsers, loginUser } = require('../controllers/user')

const UserRoutes = require('express').Router()
//const { registerUser } = require('../controllers/user.controller')

UserRoutes.post('/register', registerUser)
UserRoutes.post('/login', loginUser)
UserRoutes.get('/', isAuth, getUsers)

module.exports = UserRoutes
