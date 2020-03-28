import React from 'react'
import { Link } from 'react-router-dom'

import { getTeamNames } from '../../api'

import TeamLogo from '../TeamLogo'

const Home = () => {
  const [teamNames, setTeamNames] = React.useState([])

  React.useEffect(() => {
    getTeamNames().then(teamNames => {
      console.log('teamNames:', teamNames)
      setTeamNames(teamNames)
    })
  }, [])

  return (
    <div className='container'>
      <h1 className='large-header'>
        Dream Teams
      </h1>
      <h3 className='header text-center'>
        Select a team
      </h3>
      <div className='home-grid'>
        {teamNames.map(id => (
          <Link key={id} to={`/${id}`}>
            <TeamLogo id={id} className='team-logo' />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
