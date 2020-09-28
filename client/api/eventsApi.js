import request from 'superagent'

export function addNewEvent (id, event) {
  console.log(event)
  return request.post('/api/v1/events/' + id)
    .send(event)
    .then((res) => res.body)
    .catch((error) => {
      res.status(500).send('something went wrong!!')
    })
}

export function showAllEvents () {
  return request
    .get('/api/v1/events')
    .then(res => res.body)
    .catch(error => {
      res.status(500).send('')
    })
}
