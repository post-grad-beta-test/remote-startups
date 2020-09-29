import nock from 'nock'
import { sendRegistrationEmail, sendReminderEmail } from './index'

test('sendRegistrationEmail passes email to client side', () => {
  nock(/localhost/)
    .post('/api/v1/sendRegistrationEmail')
    .reply(200, { email: 'test@mail.com' })

  return sendRegistrationEmail()
    .then(res => {
      expect(res.email).toMatch(/test@mail.com/)
    })
})

test('sendReminderEmail passes email to client side', () => {
  nock(/localhost/)
    .post('/api/v1/sendReminderEmail')
    .reply(200, { email: 'test@mail.com' })

  return sendReminderEmail()
    .then(res => {
      expect(res.email).toMatch(/test@mail.com/)
    })
})
