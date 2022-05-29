import { Link, routes } from '@redwoodjs/router'

import Clews from 'src/components/Admin/Clews'

export const QUERY = gql`
  query FindClews {
    clews {
      id
      for
      username
      email
      hint
      symbols
      context
      loginURL
      licenseKey
      notes
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No Clews! '}
      <Link to={routes.newClew()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ clews }) => {
  return <Clews clews={clews} />
}
