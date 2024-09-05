const { json } = require('express')
const { courts } = require('../models/flat')
const Issue = require('../models/issue')
// import _ from 'lodash'
// const _ = require('lodash')

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
      console.log(`yes ${court} is in the Courts`)
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
// Al actualizar una colección que tenga un array de datos relacionados, no queremos que estos datos se borren
// Evitaremos duplicados en el array relacionado
const updateIssue = async (req, res, next) => {
  try {
    const { id } = req.params
    const newIssue = new Issue(req.body)
    newIssue._id = id
    if (req.body.update.length > 0) {
      console.log(
        'You want to append an update, let me check to see if the issue had any previous updates'
      )
      const docToBeUpdated = await Issue.findById(id)
      if (
        docToBeUpdated.update.some((update) => req.body.update.includes(update))
      ) {
        console.log(
          'I found that some are in common',
          docToBeUpdated.update.some((update) =>
            req.body.update.includes(update)
          )
        )
        console.log("I will return an error as I don't want to overwrite")
        return res
          .status(409)
          .json('Error Updating: I do not want to overwrite an update')
      } else {
        // update all properties and append the update property
        const issueUpdated = await Issue.findByIdAndUpdate(
          id,
          {
            $set: Object.keys(newIssue.toObject()).reduce((acc, key) => {
              if (key !== 'update') {
                acc[key] = newIssue[key]
              }
              return acc
            }, {}),
            $addToSet: { update: { $each: req.body.update } }
          },
          { new: true }
        )
        return res.status(214).json(issueUpdated)
      }
    }
    console.log(
      "Looks like you don't have an update, I will just update or replace "
    )

    const issueUpdated = await Issue.findByIdAndUpdate(id, newIssue, {
      new: true
      // runValidators: true
    })
    return res.status(214).json(issueUpdated)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error updating issue', error: error.message })
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
