import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Bookmark/BookmarksCell'
import { useAuth } from '@redwoodjs/auth'

const DELETE_BOOKMARK_MUTATION = gql`
  mutation DeleteBookmarkMutation($id: Int!) {
    deleteBookmark(id: $id) {
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

const BookmarksList = ({ bookmarks }) => {
  const { isAuthenticated } = useAuth()
  const [deleteBookmark] = useMutation(DELETE_BOOKMARK_MUTATION, {
    onCompleted: () => {
      toast.success('Bookmark deleted')
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
    if (confirm('Are you sure you want to delete bookmark ' + id + '?')) {
      deleteBookmark({ variables: { id } })
    }
  }

  return (
    <div className="mx-auto my-4 max-w-lg">
      <table className="table-fixed">
        <thead>
          <tr>
            <th>&nbsp;</th>
            {isAuthenticated ? <th>&nbsp;</th> : false}
          </tr>
        </thead>
        <tbody className="flex flex-col">
          {bookmarks.map((bookmark) => (
            <tr
              key={bookmark.id}
              className="flex flex-row justify-between mb-2"
            >
              <td>
                <a
                  href={bookmark.url}
                  target="_blank"
                  className="px-3 py-1 bg-zinc-300 hover:bg-zinc-500"
                  rel="noreferrer"
                >
                  {truncate(bookmark.name)}
                </a>
              </td>
              {isAuthenticated ? (
                <td>
                  <nav className="rw-table-actions">
                    <Link
                      to={routes.editBookmark({ id: bookmark.id })}
                      title={'Edit bookmark ' + bookmark.id}
                      className="rw-button rw-button-small rw-button-blue"
                    >
                      Edit
                    </Link>
                  </nav>
                </td>
              ) : (
                false
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BookmarksList
