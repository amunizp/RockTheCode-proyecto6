const Flat = require('../models/flat')

//? CRUD - CREATE - READ - UPDATE - DELETE

//! CREATE
const postFlat = async (req, res, next) => {
  try {
    const newFlat = new Flat(req.body)
    const flatSaved = await newFlat.save()
    return res.status(201).json(flatSaved)
  } catch (error) {
    if ((error.Name = 'ValidationError')) {
      return res.status(400).json(error.message)
    } else {
      return res.status(400).json(error)
    }
  }
}

//! READ
const getFlats = async (req, res, next) => {
  try {
    const allFlats = await Flat.find()
    return res.status(200).json(allFlats)
  } catch (error) {
    return res.status(400).json('Error while Reading')
  }
}

//! UPDATE
const updateFlat = async (req, res, next) => {
  try {
    const { id } = req.params
    const newFlat = new Flat(req.body)
    newFlat._id = id
    // findByIdAndUpdate me va a devolver el dato ANTIGUO
    const up = await Flat.findByIdAndUpdate(id, newFlat, { new: true })
    return res.status(200).json(up)
  } catch (error) {
    return res.status(400).json('Error while updating')
  }
}

//! DELETE
const deleteFlat = async (req, res, next) => {
  try {
    const { id } = req.params
    const flatDeleted = await Flat.findByIdAndDelete(id)
    return res.status(200).json(flatDeleted)
  } catch (error) {
    return res.status(400).json('Error while deleting')
  }
}

module.exports = {
  postFlat,
  getFlats,
  updateFlat,
  deleteFlat
}
