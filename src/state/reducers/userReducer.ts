import {
  SET_USER,
  DISCONNECT
} from '../actions'
const initialState = null

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_USER:
      return payload
    case DISCONNECT:
      return null

    default:
      return state
  }
}
