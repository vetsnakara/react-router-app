import React, { useState, useEffect } from 'react'
// import { Route } from 'react-router-dom'
// import { parse } from 'query-string'
// import slug from 'slug'

import { getTeamNames } from '../../api'

import Sidebar from '../Sidebar'

const Teams = ({ location, match }) => {
  const [state, setState] = useState({
    teams: [],
    loading: true
  })

  const fetchTeams = teamId => {
    getTeamNames(teamId).then(teamNames => {
      setState({
        teams: teamNames,
        loading: false
      })
    })
  }

  useEffect(() => {
    fetchTeams()
  }, [])

  const { loading, teams } = state

  return (
    <div className='container two-column'>
      <Sidebar
        title='Teams'
        loading={loading}
        list={teams}
      />

      {
        !loading && location.pathname === '/teams'
          ? <div className='sidebar-instruction'>Select a team</div>
          : null
      }
    </div>
  )
}

export default Teams
