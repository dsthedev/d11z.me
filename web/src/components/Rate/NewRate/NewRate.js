import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import RateForm from 'src/components/Rate/RateForm'

const CREATE_RATE_MUTATION = gql`
  mutation CreateRateMutation($input: CreateRateInput!) {
    createRate(input: $input) {
      id
    }
  }
`

const NewRate = () => {
  const [createRate, { loading, error }] = useMutation(CREATE_RATE_MUTATION, {
    onCompleted: () => {
      toast.success('Rate created')
      navigate(routes.rates())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createRate({ variables: { input } })
  }

  return (
    <div className="segment">
      <header className="segment-header">
        <h2 className="heading heading-secondary">New Rate</h2>
      </header>
      <div className="segment-main">
        <RateForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewRate
