import Sup from 'src/components/Sup/Sup'

export const QUERY = gql`
  query FindSupById($id: Int!) {
    sup: sup(id: $id) {
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

export const Empty = () => <div>Sup not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ sup }) => {
  return <Sup sup={sup} />
}
