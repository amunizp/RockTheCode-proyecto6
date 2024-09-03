const {
  getFlats,
  postFlat,
  updateFlat,
  deleteFlat
} = require('../controllers/flat')

const flatsRoutes = require('express').Router()

flatsRoutes.get('/', getFlats)
flatsRoutes.post('/', postFlat)
flatsRoutes.put('/:id', updateFlat)
flatsRoutes.delete('/:id', deleteFlat)

module.exports = flatsRoutes
