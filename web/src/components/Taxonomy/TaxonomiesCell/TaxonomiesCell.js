import { Link, routes } from '@redwoodjs/router'

import Taxonomies from 'src/components/Taxonomy/Taxonomies'

export const QUERY = gql`
  query FindTaxonomies {
    taxonomies {
      id
      name
      slug
      type
      description
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No taxonomies yet. '}
      <Link to={routes.newTaxonomy()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ taxonomies }) => {
  return <Taxonomies taxonomies={taxonomies} />
}
