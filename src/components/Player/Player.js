import React from 'react'
import { Link } from 'react-router-dom'

const Player = ({
  player: { name, avatar, number, teamId }
}) => {
  return (
    <div className='panel'>
      <img className='avatar' src={avatar} alt={`${name}'s avatar`} />
      <h1 className='medium-header'>{name}</h1>
      <div className='row'>
        <ul className='info-list' style={{ marginRight: '60px' }}>
          <li>Number
            <div>
              # {number}
            </div>
          </li>
        </ul>
        <ul className='info-list'>
          <li>Team
            <div>
              <Link to={`/${teamId}`} style={{ color: '#68809a' }}>
                {teamId[0].toUpperCase() + teamId.slice(1)}
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Player
