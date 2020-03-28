import React, { useState, useEffect } from 'react'
import { parse } from 'query-string'

import { getPlayers } from '../../api'
import Sidebar from '../Sidebar'

const Players = ({ location, match }) => {
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchPlayers = teamId => {
    getPlayers(teamId).then(players => {
      setLoading(false)
      setPlayers(players)
    })
  }

  useEffect(() => {
    if (location.search) {
      // if team is specified in query paramters
      fetchPlayers(parse(location.search).teamId)
    } else {
      fetchPlayers()
    }
  }, [])

  return (
    <div className='container two-column'>
      <Sidebar
        title='Players'
        loading={loading}
        list={players.map(player => player.name)}
      />
      {
        !loading && location.pathname === '/players'
          ? <div className='sidebar-instruction'>Select a player</div>
          : null
      }
    </div>
  )
}

export default Players
