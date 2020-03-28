import React from 'react'
import { Route } from 'react-router-dom'

import { getTeamsArticles } from '../../api'

import Sidebar from '../Sidebar'
import Loading from '../Loading'
import Article from '../Article'

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
  const { url, params: { teamId } } = match

  return (
    <div className='container two-column'>
      <Sidebar
        loading={loading}
        title='Articles'
        list={teamArticles.map(({ title }) => title)}
      />

      <Route
        path={`${url}/:articleId`}
        render={({ match: { params } }) => (
          <div className='panel'>
            <Article
              articleId={params.articleId}
              teamId={teamId}
            >
              {
                article => !article
                  ? <Loading />
                  : (
                    <div className='panel'>
                      <article className='article'>
                        <h1 className='header'>{article.title}</h1>
                        <p>{article.body}</p>
                      </article>
                    </div>
                  )
              }
            </Article>
          </div>
        )}
      />
    </div>
  )
}

export default Articles
