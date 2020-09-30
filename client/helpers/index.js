import { isAuthenticated } from 'authenticare/client/auth'
import { addUserInfo, changeNavState } from '../actions'
import { getUserInfo } from '../api'

export const columns = [{ 'header': 'Name', 'property': 'name', 'primary': true, 'sortable': true, 'search': true }, { 'header': 'Dates', 'property': 'dates', 'sortable': true }, { 'header': 'Topic', 'property': 'topic', 'sortable': true }, { 'header': 'Description', 'property': 'description' }]

export function controlNavState (dispatch) {
  if (isAuthenticated()) {
    dispatch(changeNavState('Logged In'))
    getUserInfo()
      .then(userInfo => dispatch(addUserInfo({ username: userInfo.username })))
  } else dispatch(changeNavState('Logged Off'))
}

export const getData = (arr) => {
  return arr.map(event => ({
    'name': event.name,
    'dates': event.date_start + '-' + event.date_end,
    'topic': event.topic,
    'description': event.description
  })
  )
}
