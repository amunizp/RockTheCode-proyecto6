const { getAdditon } = require('../controllers/add')

const addRoutes = require('express').Router()
addRoutes.get('/', getAdditon)

module.exports = addRoutes
