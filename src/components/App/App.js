import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from '../Navbar'
import Home from '../Home'
import Players from '../Players'
import Teams from '../Teams'
import NotFound from '../NotFound'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/players' component={Players} />
          <Route path='/teams' component={Teams} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
