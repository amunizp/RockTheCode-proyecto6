const Additon = require('../models/add')

//! READ
const getAdditon = async (req, res, next) => {
  try {
    const { n1, n2 } = req.params
    const additions = await Additon(n1, n2)
    return res.status(200).json(additions)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

module.exports = {
  getAdditon
}
