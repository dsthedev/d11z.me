import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_RATE_MUTATION = gql`
  mutation DeleteRateMutation($id: Int!) {
    deleteRate(id: $id) {
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

const Rate = ({ rate }) => {
  const [deleteRate] = useMutation(DELETE_RATE_MUTATION, {
    onCompleted: () => {
      toast.success('Rate deleted')
      navigate(routes.rates())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete rate ' + id + '?')) {
      deleteRate({ variables: { id } })
    }
  }

  return (
    <>
      <div className="segment">
        <header className="segment-header">
          <h2 className="heading heading-secondary">Rate {rate.id} Detail</h2>
        </header>
        <table className="table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{rate.id}</td>
            </tr>
            <tr>
              <th>Value</th>
              <td>{rate.value}</td>
            </tr>
            <tr>
              <th>Currency</th>
              <td>{rate.currency}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{rate.name}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{rate.type}</td>
            </tr>
            <tr>
              <th>Material</th>
              <td>{rate.material}</td>
            </tr>
            <tr>
              <th>Modifiers</th>
              <td>{rate.modifiers}</td>
            </tr>
            <tr>
              <th>Unit</th>
              <td>{rate.unit}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{rate.description}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(rate.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(rate.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="button-group">
        <Link
          to={routes.editRate({ id: rate.id })}
          className="button button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="button button-red"
          onClick={() => onDeleteClick(rate.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Rate
