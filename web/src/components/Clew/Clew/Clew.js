import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_CLEW_MUTATION = gql`
  mutation DeleteClewMutation($id: Int!) {
    deleteClew(id: $id) {
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

const Clew = ({ clew }) => {
  const [deleteClew] = useMutation(DELETE_CLEW_MUTATION, {
    onCompleted: () => {
      toast.success('Clew deleted')
      navigate(routes.clews())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete clew ' + id + '?')) {
      deleteClew({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Clew {clew.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody className="flex flex-col">
            <tr>
              <th>Id</th>
              <td>{clew.id}</td>
            </tr>
            <tr>
              <th>For</th>
              <td>{clew.for}</td>
            </tr>
            <tr>
              <th>Username</th>
              <td>{clew.username}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{clew.email}</td>
            </tr>
            <tr>
              <th>Hint</th>
              <td>{clew.hint}</td>
            </tr>
            <tr>
              <th>Symbols</th>
              <td>{clew.symbols}</td>
            </tr>
            <tr>
              <th>Context</th>
              <td>{clew.context}</td>
            </tr>
            <tr>
              <th>Login url</th>
              <td>{clew.loginURL}</td>
            </tr>
            <tr>
              <th>License key</th>
              <td>{clew.licenseKey}</td>
            </tr>
            <tr>
              <th>Notes</th>
              <td>{clew.notes}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(clew.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(clew.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editClew({ id: clew.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(clew.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Clew
