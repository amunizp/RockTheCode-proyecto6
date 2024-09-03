const {
  postIssue,
  getIssue,
  updateIssue,
  deleteIssue
} = require('../controllers/issue')

const issuesRoutes = require('express').Router()

issuesRoutes.post('/', postIssue)
issuesRoutes.get('/', getIssue)
issuesRoutes.put('/:id', updateIssue)
issuesRoutes.delete('/:id', deleteIssue)

module.exports = issuesRoutes
