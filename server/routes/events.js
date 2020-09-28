//me no have tests, me is sad

const express = require('express')
const router = express.Router()

//unused functions being imported - fixing linter would help you notice
const { saveNewEvent,
  getAllEvents,
  deleteEvent,
  addUserToEvent,
  getUsersForEvent } = require('../Db/projectDb')

router.get('/', (req, res) => {
  getAllEvents(req.body)
    .then(events => res.status(200).json(events))
    .catch(() => res.status(500).send('DATABASE ERROR'))
})

router.post('/:id', (req, res) => {
  const id = Number(req.params.id)
  saveNewEvent(id, req.body)
    .then((ids) => {
      return res.status(200).json(ids[0])
    })
    .catch(err => console.log(err))
})

//delete commented out code, get it back from git if you need it later

// router.del('/', (req, res) => {
//   const id = Number(req.body)
// })

module.exports = router
