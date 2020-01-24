export const DISCONNECT = 'DISCONNECT'
export const JOIN_CHAT = 'JOIN_CHAT'
export const NEW_MESSAGE = 'NEW_MESSAGE'
export const REMOVE_TOAST = 'REMOVE TOAST'
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const SET_TOAST = 'SET_TOAST'
export const SET_USER = 'SET_USER'

export const disconnectManually = () => ({
  type: DISCONNECT
})

export const hideToast = () => ({
  type: REMOVE_TOAST
})

export const joinChat = (user) => ({
  type: JOIN_CHAT,
  payload: user
})

export const newMessage = (message) => ({
  type: NEW_MESSAGE,
  payload: message
})

export const sendMessage = (message, user) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    user
  }
})

export const setToast = (message, variant) => ({
  type: SET_TOAST,
  payload: {
    message,
    variant
  }
})

export const setUser = user => ({
  type: SET_USER,
  payload: user
})
