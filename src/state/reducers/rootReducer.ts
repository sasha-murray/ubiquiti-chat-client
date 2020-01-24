import { combineReducers } from 'redux'
import toastReducer from './toastReducer'
import chatReducer from './chatReducer'
import userReducer from './userReducer'

export const rootReducer = combineReducers({
  chat: chatReducer,
  toast: toastReducer,
  user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>
// {chat: ChatState, toast: ToastState, users: UsersState}
