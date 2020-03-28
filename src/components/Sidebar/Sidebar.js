import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import slug from 'slug'

import Loading from '../Loading'

const CustomLink = ({ to, children }) => {
  const styles = match => ({
    listStyleType: 'none',
    fontWeight: match ? 'bold' : ''
  })

  return (
    <Route
      path={to}
      children={({ match }) => (
        <li style={styles(match)}>
          <Link to={to}>{children}</Link>
        </li>
      )}
    />
  )
}

const Sidebar = ({
  title,
  list,
  loading,
  location,
  match
}) => {
  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <h3 className='header'>{title}</h3>

      <ul className='sidebar-list'>
        {list.map(item => (
          <CustomLink
            key={item}
            to={`${match.url}/${slug(item)}`}
          >
            {item.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </div>
  )
}

export default withRouter(Sidebar)
