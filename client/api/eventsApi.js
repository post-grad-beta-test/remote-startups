import request from 'superagent'

export function addNewEvent(id, event) {
  console.log(id)
  return request.post('/api/v1/events/' + id)
    .send(event)
    .then((res) => res.body)
    .catch((error) => console.log(error))
}

export function showAllEvents() {
  return request
    .get('/api/v1/events')
    .then(res => res.body)
    .catch(error => console.log(error))
}
