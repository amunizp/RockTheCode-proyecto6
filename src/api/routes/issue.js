const {
  postIssue,
  getIssue,
  updateIssue,
  deleteIssue,
  // getCourtIssue,
  getPersonIssue
} = require('../controllers/issue')

const issuesRoutes = require('express').Router()

issuesRoutes.post('/', postIssue)
issuesRoutes.get('/', getIssue)
issuesRoutes.put('/:id', updateIssue)
issuesRoutes.delete('/:id', deleteIssue)
// issuesRoutes.get('/court/:court', getCourtIssue)
issuesRoutes.get('/getPersons/:person', getPersonIssue)
module.exports = issuesRoutes
