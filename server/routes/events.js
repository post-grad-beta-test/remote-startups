const express = require('express')
const router = express.Router()
const { getTokenDecoder } = require('authenticare/server')

const {
  saveNewEvent,
  getAllEvents,
  deleteEvent,
  addUserToEvent,
  getEventsForUser
} = require('../Db/projectDb')

router.get('/', (req, res) => {
  getAllEvents()
    .then((events) => {
      res.status(200).json(events)
    })
    .catch(() => res.status(500).send('DATABASE ERROR'))
})

router.post('/attending', (req, res) => {
  const { eventId, userId } = Number(req.body)
  addUserToEvent(eventId, userId)
    .then((ids) => {
      res.status(200).json(ids[0])
    })
    .catch((err) => {
      res.status(500).send(`DATABASE ERROR ${err.message}`)
    })
})

router.get('/:id/attending', (req, res) => {
  const { id } = req.params
  getEventsForUser(Number(id))
    .then((events) => {
      res.status(200).json(events)
    })
    .catch(() => res.status(500).send('DATABASE ERROR'))
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
