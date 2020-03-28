import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from '../Navbar'
import Home from '../Home'
import Players from '../Players'
import Teams from '../Teams'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path='/' exact component={Home} />
        <Route path='/players' exact component={Players} />
        <Route path='/teams' exact component={Teams} />
      </div>
    </Router>
  )
}

export default App
