export const JOIN_CHAT = 'JOIN_CHAT'
export const SET_USERS = 'SET_USERS'

export const joinChat = data => ({
  type: JOIN_CHAT,
  name: data.name
})

export const setUsers = users => {
  return {
    type: SET_USERS,
    users: users
  }
}

export const closeRoom = () => {
  return {
    type: SET_USERS,
    users: []
  }
}
