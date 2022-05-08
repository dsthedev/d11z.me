import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Rate/RatesCell'

const DELETE_RATE_MUTATION = gql`
  mutation DeleteRateMutation($id: Int!) {
    deleteRate(id: $id) {
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

const RatesList = ({ rates }) => {
  const [deleteRate] = useMutation(DELETE_RATE_MUTATION, {
    onCompleted: () => {
      toast.success('Rate deleted')
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
    if (confirm('Are you sure you want to delete rate ' + id + '?')) {
      deleteRate({ variables: { id } })
    }
  }

  return (
    <div className="segment table-wrapper-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Value</th>
            <th>Currency</th>
            <th>Name</th>
            <th>Type</th>
            <th>Material</th>
            <th>Modifiers</th>
            <th>Unit</th>
            <th>Description</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {rates.map((rate) => (
            <tr key={rate.id}>
              <td>{truncate(rate.id)}</td>
              <td>{truncate(rate.value)}</td>
              <td>{truncate(rate.currency)}</td>
              <td>{truncate(rate.name)}</td>
              <td>{truncate(rate.type)}</td>
              <td>{truncate(rate.material)}</td>
              <td>{truncate(rate.modifiers)}</td>
              <td>{truncate(rate.unit)}</td>
              <td>{truncate(rate.description)}</td>
              <td>{timeTag(rate.createdAt)}</td>
              <td>{timeTag(rate.updatedAt)}</td>
              <td>
                <nav className="table-actions">
                  <Link
                    to={routes.rate({ id: rate.id })}
                    title={'Show rate ' + rate.id + ' detail'}
                    className="button button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editRate({ id: rate.id })}
                    title={'Edit rate ' + rate.id}
                    className="button button-small button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete rate ' + rate.id}
                    className="button button-small button-red"
                    onClick={() => onDeleteClick(rate.id)}
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

export default RatesList
