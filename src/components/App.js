import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './utils/Navbar'
import Dashboard from './dashboard/Dashboard'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={ Dashboard } />
            <Route path="/signin" component={ SignIn } />
            <Route path="/signup" component={ SignUp } />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;