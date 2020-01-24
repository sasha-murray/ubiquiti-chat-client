import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { disconnectManually, sendMessage, joinChat, setToast } from '../../state/actions'


import { Button, TextField } from '@material-ui/core'
import Message from '../../components/Message/Message'
import useStyles from './Style'
import { useTypedSelector } from '../../state/reducers/rootReducer'

const Chat = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  const name = useTypedSelector(state => state.user)
  const messages = useTypedSelector(state => state.chat)
  const [message, setMessage] = useState('')

  const messageHandler = event => {
    event.preventDefault()
    dispatch(sendMessage(message, name))
    setMessage('')
  }

  const disconnectHandler = () => {
    dispatch(disconnectManually())
    dispatch(setToast('Disconnected from server', 'info'))
    history.push('/')
  }

  const textfieldHandler = event => setMessage(event.target.value)

  useEffect(() => {
    const newUser = { user: name, timestamp: Date.now() }
    dispatch(joinChat(newUser))
  }, [dispatch, name])

  if (name === null) { history.push('/') }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.messages}>
          {
            messages.map(message => (
              <Message key={message.id} user={message.user} message={message.message} fromYou={name === message.user} />
            ))
          }
        </div>

        <div className={classes.writeSendDisconnect}>
          <form onSubmit={messageHandler}>
            <TextField className={classes.message}
              id="Message"
              label="Message"
              variant="filled"
              autoComplete="off"
              onChange={textfieldHandler}
              value={message}
            />

            <div className={classes.buttons}>
              <Button className={classes.button}
                color="secondary"
                variant="contained"
                onClick={disconnectHandler}>
                Disconnect
              </Button>

              <Button
                className={classes.button}
                color="primary"
                disabled={message === ''}
                id="sendMessageButton"
                type="submit"
                variant="contained">
                Send Message
              </Button>

            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Chat
