import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './utils/Navbar'
import Dashboard from './dashboard/Dashboard'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" component={ Dashboard } />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;