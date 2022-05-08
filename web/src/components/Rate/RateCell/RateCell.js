import Rate from 'src/components/Rate/Rate'

export const QUERY = gql`
  query FindRateById($id: Int!) {
    rate: rate(id: $id) {
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

export const Empty = () => <div>Rate not found</div>

export const Failure = ({ error }) => (
  <div className="cell-error">{error.message}</div>
)

export const Success = ({ rate }) => {
  return <Rate rate={rate} />
}
