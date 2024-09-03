const Issue = require('../models/issue')

//CREATE
const postIssue = async (req, res, next) => {
  try {
    const newIssue = new Issue(req.body)
    const issueSaved = await newIssue.save()
    return res.status(201).json(issueSaved)
  } catch (error) {
    return res.status(400).json('Error when creating')
  }
}
//READ
const getIssue = async (req, res, next) => {
  try {
    const allIssues = await Issue.find().populate('flat')
    return res.status(302).json(allIssues)
  } catch (error) {
    return res.status(400).json('Error Reading')
  }
}

//UPDATE
const updateIssue = async (req, res, next) => {
  try {
    const { id } = req.params
    const newIssue = new Issue(req.body)
    newIssue._id = id
    const issueUpdated = await Issue.findByIdAndUpdate(id, newIssue, {
      new: true
    })
    return res.status(214).json(issueUpdated)
  } catch (error) {
    return res.status(400).json('Error Updating')
  }
}

//DELETE
const deleteIssue = async (req, res, next) => {
  try {
    const { id } = req.params
    const issueDeleted = await Issue.findByIdAndDelete(id)
    return res.status(200).json(issueDeleted) //TODO porque no veo el objeto borrado? pq 204 me dice no Content y no acepta content.
  } catch (error) {
    return res.status(400).json('Error Deleting')
  }
}

module.exports = {
  postIssue,
  getIssue,
  updateIssue,
  deleteIssue
}
