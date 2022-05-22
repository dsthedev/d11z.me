import Profile from 'src/components/Profile/Profile'

export const QUERY = gql`
  query FindProfileQuery($id: Int!) {
    profile: user(id: $id) {
      id
      email
      name
      displayName
      firstName
      lastName
      roles
    }
  }
`

export const Loading = () => <div>Loading Profile...</div>

export const Empty = () => <div>No Profile!</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'maroon' }}>Error: {error.message}</div>
)

export const Success = ({ profile }) => {
  return <Profile profile={profile} />
}
