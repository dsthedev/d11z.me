import { Link, routes } from '@redwoodjs/router'

import Bookmarks from 'src/components/Bookmark/Bookmarks'

export const QUERY = gql`
  query FindBookmarks {
    bookmarks {
      id
      url
      name
      description
      isSticky
      keywords
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No bookmarks yet. '}
      <Link to={routes.newBookmark()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ bookmarks }) => {
  return <Bookmarks bookmarks={bookmarks} />
}
