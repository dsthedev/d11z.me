import Clew from 'src/components/Clew/Clew'

export const QUERY = gql`
  query FindClewById($id: Int!) {
    clew: clew(id: $id) {
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

export const Empty = () => <div>Clew not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ clew }) => {
  return <Clew clew={clew} />
}
