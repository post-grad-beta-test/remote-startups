const express = require('express')
const router = express.Router()
const { applyAuthRoutes, getTokenDecoder } = require('authenticare/server')
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const {
  userExists,
  saveNewUser,
  getUserByName,
  addDetails,
  updateEmail
} = require('../db')

applyAuthRoutes(router, {
  userExists,
  createUser: saveNewUser,
  getUserByName
})

router.post('/sendRegistrationEmail', (req, res) => {
  const { email } = req.body
  const msg = {
    to: email,
    from: 'coject@hotmail.com',
    subject: 'Welcome to Co-ject!',
    html: `Hello ${email}!<br>Welcome to Co-ject Events.<br>A platform for collaboration while working remotely.`
  }
  sgMail.send(msg)
    .then(email => res.status(201).json(email))
    .catch(err => err.message + ' no sendgrid API key found, please follow instructions in README')
})

router.post('/sendReminderEmail', (req, res) => {
  if (userExists()) {
    const { email } = req.body
    const resetPassword = '#'
    const msg = {
      to: email,
      from: 'coject@hotmail.com',
      subject: 'Reset Password Co-ject',
      html: `Hello ${email}\nPlease click on the following link to reset your password.\n<a href=${resetPassword}>Link</a>`
    }
    sgMail.send(msg)
      .then(email => res.status(201).json(email))
  }
})

router.get('/auth', (req, res) => {
  const username = req.query.username
  getUserByName(username)
    .then(user => {
      const userInfo = {
        id: user.id,
        username: user.username,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email
      }
      res.json(userInfo)
    })
    .catch((err) => res.status(500).send(err.message))
})

router.patch('/auth', (req, res) => {
  addDetails(req.body)
    .then(() => res.send(200))
    .catch((err) => res.status(500).send(err.message))
})

router.post('/auth', getTokenDecoder(), (req, res) => {
  if (req.user) {
    getUserByName(req.user.username)
      .then(user => {
        const userInfo = {
          id: user.id,
          username: user.username,
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
          image: user.image
        }
        res.json(userInfo)
      })
  } else {
    res.status(500).send('authentication token not provided')
  }
})

router.patch('/update', (req, res) => {
  updateEmail(req.body)
    .then(() => res.send(200))
    .catch((err) => res.status(500).send(err.message))
})

module.exports = router