import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_TAXONOMY_MUTATION = gql`
  mutation DeleteTaxonomyMutation($id: Int!) {
    deleteTaxonomy(id: $id) {
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

const Taxonomy = ({ taxonomy }) => {
  const [deleteTaxonomy] = useMutation(DELETE_TAXONOMY_MUTATION, {
    onCompleted: () => {
      toast.success('Taxonomy deleted')
      navigate(routes.taxonomies())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete taxonomy ' + id + '?')) {
      deleteTaxonomy({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Taxonomy {taxonomy.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{taxonomy.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{taxonomy.name}</td>
            </tr>
            <tr>
              <th>Slug</th>
              <td>{taxonomy.slug}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{taxonomy.type}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{taxonomy.description}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(taxonomy.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(taxonomy.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="flex flex-row">
        <Link
          to={routes.editTaxonomy({ id: taxonomy.id })}
          className="px-3 py-1 bg-slate-600 hover:bg-slate-800 text-slate-100"
        >
          Edit
        </Link>
        <button
          type="button"
          className="px-3 py-1 bg-slate-600 hover:bg-slate-800 text-slate-100"
          onClick={() => onDeleteClick(taxonomy.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Taxonomy
