import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Chat from './pages/Chat/Chat'

const App = () => {
  return (
    <Router>
      <Switch>

        <Route path="/chat">
          <Chat/>
        </Route>


        <Route path="/">
          <Landing/>
        </Route>

      </Switch>
    </Router>

  )
}

export default App
