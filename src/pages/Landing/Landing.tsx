import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ReactComponent as Logo } from '../../logo.svg'
import { setToast, setUser } from '../../state/actions'
import { useDispatch } from 'react-redux'

import { Button, Container, TextField, Typography } from '@material-ui/core'

import Toast from '../../components/Toast/Toast'

import useStyles from './Style'

const url = process.env.URL || 'http://localhost:8000'

const Landing = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  const [name, setName] = useState('')

  const joinChat = async (event) => {
    event.preventDefault()

    try {
      const res = await fetch(`${url}/get-users`)
      const users = await res.json()
      if (name === '') {
        dispatch(setToast('You need to input a name', 'info'))
        return
      }
      if (users.find(user => user.user === name) !== undefined) {
        dispatch(setToast('Name already in use, please input a different name.', 'info'))
        return
      }
      dispatch(setUser(name))
      history.push('/chat')
    } catch (error) {
      dispatch(setToast('Cannot connect to server.', 'error'))
    }
  }

  return (
    <>
      <Container className={classes.container}>
        <Logo className={classes.logo} />
        <Typography className={classes.heading} variant="h2" component="h1" gutterBottom>
          Welcome to the chat
        </Typography>
        <Typography className={classes.subtitle} variant="h6" component="h2" gutterBottom>
          Enter a unique nickname to get started.
        </Typography>

        <form className={classes.form} autoComplete="off" onSubmit={joinChat}>

          <TextField
            className={classes.textField}
            id="Name"
            label="Name"
            margin="normal"
            onChange={event => setName(event.target.value)}
            variant="filled" />

          <Button
            className={classes.button}
            color="primary"
            id="joinChatButton"
            type="submit"
            variant="contained">
            Join Chatroom
          </Button>
        </form>
      </Container>
      <Toast />
    </>
  )
}

export default Landing
