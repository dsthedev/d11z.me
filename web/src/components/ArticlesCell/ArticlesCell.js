import { Link, routes } from '@redwoodjs/router'
export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
    }
  }
`

export const Loading = () => <div>Loading Articles...</div>

export const Empty = () => <div>No Articles Found</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Oops: {error.message}</div>
)

export const Success = ({ articles }) => {
  return (
    <ul className="alt">
      {articles.map((article) => {
        return (
          <li key={article.id}>
            <h3>
              <Link to={routes.posts() + '/' + article.id}>
                {article.title} <span className="fa fa-link"></span>
              </Link>
            </h3>
          </li>
        )
      })}
    </ul>
  )
}
