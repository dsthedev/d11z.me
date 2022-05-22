import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Taxonomy/TaxonomiesCell'

const DELETE_TAXONOMY_MUTATION = gql`
  mutation DeleteTaxonomyMutation($id: Int!) {
    deleteTaxonomy(id: $id) {
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

const TaxonomiesList = ({ taxonomies }) => {
  const [deleteTaxonomy] = useMutation(DELETE_TAXONOMY_MUTATION, {
    onCompleted: () => {
      toast.success('Taxonomy deleted')
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
    if (confirm('Are you sure you want to delete taxonomy ' + id + '?')) {
      deleteTaxonomy({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="table-fixed text-left">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {taxonomies.map((taxonomy) => (
            <tr key={taxonomy.id}>
              <td>{truncate(taxonomy.name)}</td>
              <td>{truncate(taxonomy.type)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.taxonomy({ id: taxonomy.id })}
                    title={'Show taxonomy ' + taxonomy.id + ' detail'}
                    className="px-3 py-1 bg-slate-600 hover:bg-slate-800 text-slate-100 text-xs"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTaxonomy({ id: taxonomy.id })}
                    title={'Edit taxonomy ' + taxonomy.id}
                    className="px-3 py-1 bg-slate-600 hover:bg-slate-800 text-slate-100 text-xs "
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete taxonomy ' + taxonomy.id}
                    className="px-3 py-1 bg-slate-600 hover:bg-slate-800 text-slate-100 text-xs "
                    onClick={() => onDeleteClick(taxonomy.id)}
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

export default TaxonomiesList
