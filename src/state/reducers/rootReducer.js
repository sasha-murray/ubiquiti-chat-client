import { combineReducers } from 'redux'
import chat from './chatReducer'
import user from './userReducer'
import toast from './toastReducer'

export default combineReducers({
  chat,
  toast,
  user
})
