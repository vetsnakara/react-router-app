import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { parse } from 'query-string'
import slug from 'slug'

import { getPlayers } from '../../api'

import Sidebar from '../Sidebar'
import Player from '../Player'

const Players = ({ location, match }) => {
  const [state, setState] = useState({
    players: [],
    loading: true
  })

  const fetchPlayers = teamId => {
    getPlayers(teamId).then(players => {
      setState({
        players,
        loading: false
      })
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

  const { loading, players } = state

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

      <Route
        path={`${match.url}/:playerId`} render={({ match }) => {
          if (loading) {
            return null
          }

          const player = players.find(player => {
            return slug(player.name) === match.params.playerId
          })

          return <Player player={player} />
        }}
      />
    </div>
  )
}

export default Players
