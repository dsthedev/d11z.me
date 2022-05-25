import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import ClewForm from 'src/components/Clew/ClewForm'

const CREATE_CLEW_MUTATION = gql`
  mutation CreateClewMutation($input: CreateClewInput!) {
    createClew(input: $input) {
      id
    }
  }
`

const NewClew = () => {
  const [createClew, { loading, error }] = useMutation(CREATE_CLEW_MUTATION, {
    onCompleted: () => {
      toast.success('Clew created')
      navigate(routes.clews())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createClew({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Clew</h2>
      </header>
      <div className="rw-segment-main">
        <ClewForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewClew
