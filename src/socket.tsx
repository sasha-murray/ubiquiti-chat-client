import io from 'socket.io-client'
import {
  DISCONNECT,
  JOIN_CHAT,
  SEND_MESSAGE,
  disconnectManually,
  newMessage,
  setToast
} from './state/actions'

const url = 'http://localhost:8000'

const socketMiddleware = state => {
  const socket = io(url)

  socket.on('message from server', data => {
    state.dispatch(newMessage(data))
  })

  socket.on('inactive', () => {
    socket.disconnect()
    state.dispatch(disconnectManually())
    state.dispatch(setToast('Disconnected due to inactivity', 'info'))
  })

  socket.on('server shutting down', () => {
    socket.disconnect()
    state.dispatch(disconnectManually())
    state.dispatch(setToast('Disconnected due to server shutdown', 'error'))
  })
  return next => action => {
    const { type, payload } = action
    switch (type) {
      case JOIN_CHAT: {
        socket.emit('user joined', payload)
        break
      }

      case SEND_MESSAGE: {
        socket.emit('message from client', payload)
        break
      }
      case DISCONNECT: {
        socket.disconnect()
        break
      }
      default:
        break
    }

    return next(action)
  }
}

export default socketMiddleware
