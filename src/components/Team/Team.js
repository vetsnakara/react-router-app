import React from 'react'

import Loading from '../Loading'
import { getTeam } from '../../api'

const Team = ({ id, children }) => {
  const [team, setTeam] = React.useState(null)

  React.useEffect(() => {
    setTeam(null)
    getTeam(id).then(team => setTeam(team))
  }, [id])

  if (!team) {
    return <Loading text='Loading Team' />
  }

  return (
    children(team)
  )
}

export default Team
