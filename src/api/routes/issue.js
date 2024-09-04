const {
  postIssue,
  getIssue,
  updateIssue,
  deleteIssue,
  getCourtIssue
} = require('../controllers/issue')

const issuesRoutes = require('express').Router()

issuesRoutes.post('/', postIssue)
issuesRoutes.get('/', getIssue)
issuesRoutes.put('/:id', updateIssue)
issuesRoutes.delete('/:id', deleteIssue)
// issuesRoutes.get('/court/:court', getCourtIssue)

module.exports = issuesRoutes
