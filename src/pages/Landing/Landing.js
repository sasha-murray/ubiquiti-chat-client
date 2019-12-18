import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ReactComponent as Logo } from '../../logo.svg';
import './Landing.scss'

export default () => {
  const history = useHistory()

  const [name, setName] = useState('')
  const play = (event) => {
    event.preventDefault()
    history.push('/chat')}

  return (
    <div className={'landing'}>
      <div>
    <Logo className={'logo'}/>
  <h1 className={'heading'}>Welcome to the chat, {name}</h1>
        <form className={'landing-form'} onSubmit={play}>
          <input
            type="text"
            label="Name"
            required
            className={'name'}
            onChange={(event) => setName(event.target.value)}>
          </input>

          <input
            type="submit"
            className={"landing-button"}
            value="Join Chat">
          </input>
        </form>
      </div>
    </div>
  )
}