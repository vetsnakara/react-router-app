import React from 'react'

import { getTeamsArticles } from '../../api'

import Sidebar from '../Sidebar'

const Articles = ({ match }) => {
  const [state, setState] = React.useState({
    loading: true,
    teamArticles: []
  })

  React.useEffect(() => {
    getTeamsArticles(match.params.teamId)
      .then(teamArticles => setState({
        loading: false,
        teamArticles
      }))
  }, [])

  const { teamArticles, loading } = state
  // const { params, url } = match

  return (
    <div className='container'>
      <Sidebar
        loading={loading}
        title='Articles'
        list={teamArticles.map(({ title }) => title)}
      />
    </div>
  )
}

export default Articles
