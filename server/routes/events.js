const express = require('express')
const router = express.Router()
const { getTokenDecoder } = require('authenticare/server')

const {
  saveNewEvent,
  getAllEvents,
  deleteEvent,
  addUserToEvent,
  getUsersForEvent,
  getEventsForUser,
  addUserToEvent,
} = require('../Db/projectDb')

router.get('/', (req, res) => {
  getAllEvents()
    .then((events) => {
      res.status(200).json(events)
    })
    .catch(() => res.status(500).send('DATABASE ERROR'))
})

router.get('/eventsUser/:id', getTokenDecoder(), (req, res) => {
  if (req.user) {
    const id = Number(req.params.id)
    getEventsForUser(id)
      .then((events) => {
        return res.status(200).json(events)
      })
      .catch((err) => console.log(err))
  } else {
    res.status(500).send('authentication token not provided')
  }
})

router.get('/usersEvent/:id', getTokenDecoder(), (req, res) => {
  if (req.user) {
    const id = Number(req.params.id)
    const { eventId } = req.body
    getUsersForEvent(id, eventId)
      .then((users) => {
        return res.status(200).json(users)
      })
      .catch((err) => console.log(err))
  } else {
    res.status(500).send('authentication token not provided')
  }
})

router.post('/:id', getTokenDecoder(), (req, res) => {
  if (req.user) {
    const id = Number(req.params.id)
    saveNewEvent(id, req.body)
      .then((ids) => {
        return res.status(200).json(ids[0])
      })
      .catch((err) => console.log(err))
  } else {
    res.status(500).send('authentication token not provided')
  }
})

router.post('/usersEvent/:id', getTokenDecoder(), (req, res) => {
  if (req.user) {
    const id = Number(req.params.id)
    addUserToEvent(id, req.body)
      .then((ids) => {
        return res.status(200).json(ids[0])
      })
      .catch((err) => console.log(err))
  } else {
    res.status(500).send('authentication token not provided')
  }
})

router.delete('/', getTokenDecoder(), (req, res) => {
  if (req.user) {
    const id = Number(req.body)
    deleteEvent(id)
      .then(() => {
        res.sendStatus(200)
        return null
      })
      .catch((error) => {
        res.status(500).send('DATABASE ERROR' + error.message)
      })
  } else {
    res.status(500).send('authentication token not provided')
  }
})

module.exports = router
