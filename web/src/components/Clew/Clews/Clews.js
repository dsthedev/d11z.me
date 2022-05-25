import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Clew/ClewsCell'

const DELETE_CLEW_MUTATION = gql`
  mutation DeleteClewMutation($id: Int!) {
    deleteClew(id: $id) {
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

const ClewsList = ({ clews }) => {
  const [deleteClew] = useMutation(DELETE_CLEW_MUTATION, {
    onCompleted: () => {
      toast.success('Clew deleted')
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
    if (confirm('Are you sure you want to delete clew ' + id + '?')) {
      deleteClew({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>For</th>
            <th>Username</th>
            <th>Email</th>
            <th>Hint</th>
            <th>Symbols</th>
            <th>Context</th>
            <th>Login url</th>
            <th>License key</th>
            <th>Notes</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {clews.map((clew) => (
            <tr key={clew.id}>
              <td>{truncate(clew.id)}</td>
              <td>{truncate(clew.for)}</td>
              <td>{truncate(clew.username)}</td>
              <td>{truncate(clew.email)}</td>
              <td>{truncate(clew.hint)}</td>
              <td>{truncate(clew.symbols)}</td>
              <td>{truncate(clew.context)}</td>
              <td>{truncate(clew.loginURL)}</td>
              <td>{truncate(clew.licenseKey)}</td>
              <td>{truncate(clew.notes)}</td>
              <td>{timeTag(clew.createdAt)}</td>
              <td>{timeTag(clew.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.clew({ id: clew.id })}
                    title={'Show clew ' + clew.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editClew({ id: clew.id })}
                    title={'Edit clew ' + clew.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete clew ' + clew.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(clew.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ClewsList
