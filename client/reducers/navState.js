import {CHANGE_NAV_STATE} from '../actions'

export default function navState(state='Logged Off', action) {
    switch (action.type) {
        case CHANGE_NAV_STATE:
            return action.navState
        default:
            return state
    }
}