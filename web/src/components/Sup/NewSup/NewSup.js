import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import SupForm from 'src/components/Sup/SupForm'

const CREATE_SUP_MUTATION = gql`
  mutation CreateSupMutation($input: CreateSupInput!) {
    createSup(input: $input) {
      id
    }
  }
`

const NewSup = () => {
  const [createSup, { loading, error }] = useMutation(CREATE_SUP_MUTATION, {
    onCompleted: () => {
      toast.success('Sup created')
      navigate(routes.sups())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createSup({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Sup</h2>
      </header>
      <div className="rw-segment-main">
        <SupForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSup
