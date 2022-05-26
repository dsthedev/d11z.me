import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import ClewForm from 'src/components/Admin/ClewForm'

export const QUERY = gql`
  query EditClewById($id: Int!) {
    clew: clew(id: $id) {
      id
      for
      username
      email
      hint
      symbols
      context
      loginURL
      licenseKey
      notes
      updatedAt
    }
  }
`
const UPDATE_CLEW_MUTATION = gql`
  mutation UpdateClewMutation($id: Int!, $input: UpdateClewInput!) {
    updateClew(id: $id, input: $input) {
      id
      for
      username
      email
      hint
      symbols
      context
      loginURL
      licenseKey
      notes
      createdAt
      updatedAt
    }
  }
`

const DELETE_CLEW_MUTATION = gql`
  mutation DeleteClewMutation($id: Int!) {
    deleteClew(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ clew }) => {
  const [updateClew, { loading, error }] = useMutation(UPDATE_CLEW_MUTATION, {
    onCompleted: () => {
      toast.success('Clew updated')
      navigate(routes.clews())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const [deleteClew] = useMutation(DELETE_CLEW_MUTATION, {
    onCompleted: () => {
      toast.success('Removed Clew')
      navigate(routes.clews())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateClew({ variables: { id, input } })
  }

  const onDeleteClick = (id) => {
    if (confirm('Delete Clew for ' + clew.for + '?')) {
      deleteClew({ variables: { id } })
    }
  }

  return (
    <div className="clear-both max-w-sm mx-auto">
      <header className="text-3xl text-center">
        <h2>{clew.for}</h2>
      </header>
      <section className="clear-both">
        <ClewForm clew={clew} onSave={onSave} error={error} loading={loading} />
      </section>
      <hr />
      <aside className="clear-both text-center">
        <button
          type="button"
          className="px-2 py-1 text-white bg-red-800 hover:bg-red-900"
          onClick={() => onDeleteClick(parseInt(clew.id))}
        >
          Delete
        </button>
      </aside>
    </div>
  )
}
