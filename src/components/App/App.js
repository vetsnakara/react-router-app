import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import DynamicImport from '../DynamicImport'
import Navbar from '../Navbar'
import TeamPage from '../TeamPage'
import Articles from '../Articles'
import NotFound from '../NotFound'
import Loading from '../Loading'

const Home = props => (
  <DynamicImport load={() => import('../Home')}>
    {Component => !Component ? <Loading /> : <Component {...props} />}
  </DynamicImport>
)

const Teams = props => (
  <DynamicImport load={() => import('../Teams')}>
    {Component => !Component ? <Loading /> : <Component {...props} />}
  </DynamicImport>
)

const Players = props => (
  <DynamicImport load={() => import('../Players')}>
    {Component => !Component ? <Loading /> : <Component {...props} />}
  </DynamicImport>
)

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/players' component={Players} />
          <Route path='/teams' component={Teams} />
          <Route path='/:teamId' exact component={TeamPage} />
          <Route path='/:teamId/articles' component={Articles} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
