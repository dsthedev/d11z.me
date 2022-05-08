import { Link, routes } from '@redwoodjs/router'
import PriceSheet from 'src/components/PriceSheet/PriceSheet'

import Rates from 'src/components/Rate/Rates'

export const QUERY = gql`
  query FindRates {
    rates {
      id
      value
      currency
      name
      type
      material
      modifiers
      unit
      description
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="text-center">
      {'No rates yet. '}
      <Link to={routes.newRate()} className="link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="cell-error">{error.message}</div>
)

export const Success = ({ rates }) => {
  return <PriceSheet prices={rates} />
}
