import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_BOOKMARK_MUTATION = gql`
  mutation DeleteBookmarkMutation($id: Int!) {
    deleteBookmark(id: $id) {
      id
    }
  }
`

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

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Bookmark = ({ bookmark }) => {
  const [deleteBookmark] = useMutation(DELETE_BOOKMARK_MUTATION, {
    onCompleted: () => {
      toast.success('Bookmark deleted')
      navigate(routes.bookmarks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete bookmark ' + id + '?')) {
      deleteBookmark({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Bookmark {bookmark.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{bookmark.id}</td>
            </tr>
            <tr>
              <th>Url</th>
              <td>{bookmark.url}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{bookmark.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{bookmark.description}</td>
            </tr>
            <tr>
              <th>Is sticky</th>
              <td>{checkboxInputTag(bookmark.isSticky)}</td>
            </tr>
            <tr>
              <th>Keywords</th>
              <td>{bookmark.keywords}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(bookmark.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(bookmark.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editBookmark({ id: bookmark.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(bookmark.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Bookmark
