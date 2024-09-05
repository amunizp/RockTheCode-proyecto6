const { courts } = require('../models/flat')
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
    const allIssues = await Issue.find()
      .populate('flat')
      .populate('update')
      .populate('parent')
    return res.status(302).json(allIssues)
  } catch (error) {
    return res.status(400).json('Error Reading')
  }
}

//READ Courts
const getCourtIssue = async (req, res, next) => {
  try {
    const { court } = req.params
    if (courts.includes(court)) {
      console.log('si Court esta Courts')
      const allCourtIssues = await Issue.find({ person: 'Mary' }).populate(
        'flat'
      )
      return res.status(302).json(allCourtIssues)
    }
  } catch (error) {
    return res.status(400).json('Error Reading')
  }
}
//READ person
const getPersonIssue = async (req, res, next) => {
  try {
    const { person } = req.params
    const allPersonIssues = await Issue.find({ person: person })
      .populate('flat')
      .populate('update')
      .populate('parent')
    return res.status(302).json(allPersonIssues)
  } catch (error) {
    return res.status(400).json('Error Reading persons')
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
  deleteIssue,
  getPersonIssue
  // getCourtIssue
}
