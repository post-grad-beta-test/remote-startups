const express = require('express')
const router = express.Router()
const { applyAuthRoutes } = require('authenticare/server')
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const {
  userExists,
  saveNewUser,
  getUserByName
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
  const email = req.query.email
  getUserByName(email)
    .then(user => {
      const userInfo = {
        id: user.id,
        email: user.username
      }
      res.json(userInfo)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router