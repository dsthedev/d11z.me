import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import ClewForm from 'src/components/Clew/ClewForm'

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
      createdAt
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

  const onSave = (input, id) => {
    updateClew({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Clew {clew.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ClewForm clew={clew} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
