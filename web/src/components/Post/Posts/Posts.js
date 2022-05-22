import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Post/PostsCell'
import { useAuth } from '@redwoodjs/auth'

const DELETE_POST_MUTATION = gql`
  mutation DeletePostMutation($id: Int!) {
    deletePost(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const PostsList = ({ posts }) => {
  const { currentUser, isAuthenticated, hasRole } = useAuth()

  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      toast.success('Post deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete post ' + id + '?')) {
      deletePost({ variables: { id } })
    }
  }

  return (
    <div className="mx-auto max-w-prose">
      <table className="table-fixed">
        <thead>
          <tr>
            <th>Title</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{truncate(post.title)}</td>
              <td>
                <nav className="flex flex-row">
                  <Link
                    to={routes.post({ id: post.id })}
                    title={'Show post ' + post.id + ' detail'}
                    className="px-2 py-1 text-neutral-50 bg-zinc-600 hover:bg-zinc-800"
                  >
                    Show
                  </Link>
                  {isAuthenticated && hasRole(['admin', 'editor']) ? (
                    <>
                      <Link
                        to={routes.editPost({ id: post.id })}
                        title={'Edit post ' + post.id}
                        className="px-2 py-1 ml-2 text-neutral-50 bg-cyan-600 hover:bg-cyan-800"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        title={'Delete post ' + post.id}
                        className="px-2 py-1 ml-2 text-neutral-50 bg-red-600 hover:bg-red-800"
                        onClick={() => onDeleteClick(post.id)}
                      >
                        Delete
                      </button>
                    </>
                  ) : (
                    false
                  )}
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PostsList
