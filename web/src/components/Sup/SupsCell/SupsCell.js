import { Link, routes } from '@redwoodjs/router'

import Sups from 'src/components/Sup/Sups'

export const QUERY = gql`
  query FindSups {
    sups {
      id
      manufacturer
      productRef
      name
      collection
      type
      categories
      capsuleAmount
      servingSize
      wMeal
      caution
      ingredients
      otherIngredients
      proprietaryBlend
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No sups yet. '}
      <Link to={routes.newSup()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ sups }) => {
  return <Sups sups={sups} />
}
