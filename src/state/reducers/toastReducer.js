import {
  SET_TOAST,
  REMOVE_TOAST
} from '../actions'
const initialState = { message: 'nothing', shown: false, variant: 'info' }

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_TOAST:
      return {
        ...state,
        shown: true,
        message: payload.message,
        variant: payload.variant
      }

    case REMOVE_TOAST:
      return {
        ...state,
        shown: false
      }

    default:
      return state
  }
}
