import Posts from 'src/components/Post/Posts'

export const QUERY = gql`
  query ArticlesQuery {
    articles: postPosts {
      id
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }) => {
  return <Posts posts={articles} />
}
