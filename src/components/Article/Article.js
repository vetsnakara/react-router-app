import React from 'react'

import { getArticle } from '../../api'

const Article = ({
  articleId,
  teamId,
  loading,
  children
}) => {
  const [article, setArticle] = React.useState(null)

  React.useEffect(() => {
    setArticle(null)
    getArticle(teamId, articleId)
      .then(article => setArticle(article))
  }, [articleId])

  return children(article)
}

export default Article
