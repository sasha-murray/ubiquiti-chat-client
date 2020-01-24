import {
  NEW_MESSAGE,
  DISCONNECT,
  JOIN_CHAT
} from '../actions'

const initialState: Array<Object> = []

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case NEW_MESSAGE:
      return [...state, payload]
    case DISCONNECT:
    case JOIN_CHAT:
      return []
    default:
      return state
  }
}
