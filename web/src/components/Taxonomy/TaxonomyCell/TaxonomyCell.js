import Taxonomy from 'src/components/Taxonomy/Taxonomy'

export const QUERY = gql`
  query FindTaxonomyById($id: Int!) {
    taxonomy: taxonomy(id: $id) {
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

export const Empty = () => <div>Taxonomy not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ taxonomy }) => {
  return <Taxonomy taxonomy={taxonomy} />
}
