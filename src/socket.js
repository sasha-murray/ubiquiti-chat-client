import io from 'socket.io-client'
import { JOIN_CHAT, joinChat, setUsers, closeRoom } from './actions/actions'

const url = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_URL : 'http://localhost:8000'

const socketMiddleware = state => {
  let socket = null
  if (!socket) {
    socket = io(url)
  }

  socket.on('users', data => {
    state.dispatch(setUsers(data))
  })

  socket.on('room closing', () => {
    console.log('Room closing!')
    state.dispatch(closeRoom())
    window.location.href = '/'
  })

  return next => action => {
    switch (action.type) {

      case JOIN_CHAT: {
        socket.emit('join chat', action)
        break
      }

      default:
        break
    }

    return next(action)
  }
}

export default socketMiddleware
