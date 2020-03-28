import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import slug from 'slug'

import { getTeamsArticles, getTeamNames } from '../../api'

import Team from '../Team'
import TeamLogo from '../TeamLogo'
import Loading from '../Loading'

const TeamPage = ({
  match,
  match: { params }
}) => {
  const [state, setState] = React.useState({
    loading: true,
    articles: [],
    teamNames: []
  })

  const { teamId } = params

  React.useEffect(() => {
    Promise.all([
      getTeamNames(),
      getTeamsArticles(teamId)
    ]).then(([teamNames, articles]) => setState({
      loading: false,
      articles,
      teamNames
    }))
  }, [])

  const {
    loading,
    articles,
    teamNames
  } = state

  if (loading) {
    return (
      <div className='panel'>
        <Loading text='Loading Team Articles' />
      </div>
    )
  }

  if (
    !loading &&
    !teamNames.includes(teamId)
  ) {
    return <Redirect to='/' />
  }

  return (
    <div className='panel'>
      {
        !loading && teamNames.includes(teamId) && (
          <Team id={teamId}>
            {team => (
              <>
                <TeamLogo id={teamId} />
                <h1 className='medium-header'>{team.name}</h1>
                <h4>
                  <Link
                    className='btn-main'
                    style={{ cursor: 'pointer' }}
                    to={{
                      pathname: '/players',
                      search: `?teamId=${teamId}`
                    }}
                  >
                  Show Team Players
                  </Link>
                </h4>

                <h2 className='header'>Articles</h2>

                <ul className='articles'>
                  {articles.map(article => (
                    <li key={article.id}>
                      <Link to={`${match.url}/articles/${slug(article.title)}`}>
                        <h4 className='article-title'>{article.title}</h4>
                        <div className='article-date'>{article.date.toLocaleDateString()}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </Team>
        )
      }
    </div>
  )
}

export default TeamPage
