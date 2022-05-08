import PriceSheet from '../PriceSheet/PriceSheet'

export const QUERY = gql`
  query PriceSheetsQuery {
    prices: rates {
      id
      value
      currency
      unit
      type
      material
      modifiers
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ prices }) => {
  return <PriceSheet prices={prices} />
}
