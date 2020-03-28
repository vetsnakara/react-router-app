import React, { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'

import { getTeamNames } from '../../api'

import Sidebar from '../Sidebar'
import TeamLogo from '../TeamLogo'
import Team from '../Team'

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

      <Route
        path={`${match.url}/:teamId`}
        render={({ match }) => (
          <div className='panel'>
            <Team id={match.params.teamId}>
              {team => (
                <>
                  <TeamLogo id={team.id} />
                  <h1 className='medium-header'>{team.name}</h1>
                  <Link className='center btn-main' to={`/${match.params.teamId}`}>
                    {team.name} Team Page
                  </Link>
                </>
              )}
            </Team>
          </div>
        )}
      />
    </div>
  )
}

export default Teams
