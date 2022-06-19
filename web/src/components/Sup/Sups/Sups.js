import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Sup/SupsCell'

const DELETE_SUP_MUTATION = gql`
  mutation DeleteSupMutation($id: Int!) {
    deleteSup(id: $id) {
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

const SupsList = ({ sups }) => {
  const [deleteSup] = useMutation(DELETE_SUP_MUTATION, {
    onCompleted: () => {
      toast.success('Sup deleted')
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
    if (confirm('Are you sure you want to delete sup ' + id + '?')) {
      deleteSup({ variables: { id } })
    }
  }

  return (
    <div className="mx-auto max-w-xl">
      <table className="w-full text-right">
        <thead>
          <tr>
            <th className="p-1">Name</th>
            <th className="p-1">Bottle</th>
            <th className="p-1">Daily</th>
            <th className="p-1">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {sups.map((sup) => (
            <tr key={sup.id}>
              <td className="p-1">{truncate(sup.name)}</td>
              <td className="p-1">{truncate(sup.capsuleAmount)}</td>
              <td className="p-1">{truncate(sup.servingSize)}</td>
              <td className="p-1">
                <nav className="rw-table-actions">
                  <Link
                    to={routes.sup({ id: sup.id })}
                    title={'Show sup ' + sup.id + ' detail'}
                    className="px-4 py-2 mr-2 text-lg bg-slate-100 hover:bg-slate-200 rounded-lg"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editSup({ id: sup.id })}
                    title={'Edit sup ' + sup.id}
                    className="px-4 py-2 mr-2 text-lg bg-slate-100 hover:bg-slate-200 rounded-lg"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete sup ' + sup.id}
                    className="px-4 py-2 mr-2 text-lg bg-slate-100 hover:bg-slate-200 rounded-lg"
                    onClick={() => onDeleteClick(sup.id)}
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

export default SupsList
