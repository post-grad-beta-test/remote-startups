const express = require('express')
const router = express.Router()
const { applyAuthRoutes, getTokenDecoder } = require('authenticare/server')
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const {
  userExists,
  saveNewUser,
  getUserByName,
  updateDetails
} = require('../db')

applyAuthRoutes(router, {
  userExists,
  createUser: saveNewUser,
  getUserByName
})

//this lets anyone send the welcome email via your api - an attacker could burn all your sendGrid credits while spamming someone
// at least use authenticare to only email the current user - see https://github.com/don-smith/authenticare/blob/master/docs/server/getTokenDecoder.md
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

//again, you should use authenticare to make sure a user can only send this to themselves
router.post('/sendReminderEmail', (req, res) => {
  //this isn't passing in a username
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

//this allows any attacker to find a users email if they know their username - limit this to only sending back data for current user
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

//this lets any user overwrite the email for an account once they know the username, then they can reset the password to themselves and take full control of it
//nees to be locked down so a user can only update their own details
router.patch('/auth', (req, res) => {
  updateDetails(req.body)
    .then(() => res.send(200))
    .catch((err) => res.status(500).send(err.message))
})

//this getTokenDecoder is what you need on all the methods you need to lock down
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

module.exports = router