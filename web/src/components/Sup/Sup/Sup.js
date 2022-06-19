import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_SUP_MUTATION = gql`
  mutation DeleteSupMutation($id: Int!) {
    deleteSup(id: $id) {
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

const Sup = ({ sup }) => {
  const [deleteSup] = useMutation(DELETE_SUP_MUTATION, {
    onCompleted: () => {
      toast.success('Sup deleted')
      navigate(routes.sups())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete sup ' + id + '?')) {
      deleteSup({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Sup {sup.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{sup.id}</td>
            </tr>
            <tr>
              <th>Manufacturer</th>
              <td>{sup.manufacturer}</td>
            </tr>
            <tr>
              <th>Product ref</th>
              <td>{sup.productRef}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{sup.name}</td>
            </tr>
            <tr>
              <th>Collection</th>
              <td>{sup.collection}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{sup.type}</td>
            </tr>
            <tr>
              <th>Categories</th>
              <td>{sup.categories}</td>
            </tr>
            <tr>
              <th>Capsule amount</th>
              <td>{sup.capsuleAmount}</td>
            </tr>
            <tr>
              <th>Serving size</th>
              <td>{sup.servingSize}</td>
            </tr>
            <tr>
              <th>W meal</th>
              <td>{checkboxInputTag(sup.wMeal)}</td>
            </tr>
            <tr>
              <th>Caution</th>
              <td>{sup.caution}</td>
            </tr>
            <tr>
              <th>Ingredients</th>
              <td>{sup.ingredients}</td>
            </tr>
            <tr>
              <th>Other ingredients</th>
              <td>{sup.otherIngredients}</td>
            </tr>
            <tr>
              <th>Proprietary blend</th>
              <td>{sup.proprietaryBlend}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(sup.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(sup.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSup({ id: sup.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(sup.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Sup
