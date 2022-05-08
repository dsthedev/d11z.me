import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import RateForm from 'src/components/Rate/RateForm'

export const QUERY = gql`
  query EditRateById($id: Int!) {
    rate: rate(id: $id) {
      id
      value
      currency
      name
      type
      material
      modifiers
      unit
      description
      createdAt
      updatedAt
    }
  }
`
const UPDATE_RATE_MUTATION = gql`
  mutation UpdateRateMutation($id: Int!, $input: UpdateRateInput!) {
    updateRate(id: $id, input: $input) {
      id
      value
      currency
      name
      type
      material
      modifiers
      unit
      description
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="cell-error">{error.message}</div>
)

export const Success = ({ rate }) => {
  const [updateRate, { loading, error }] = useMutation(UPDATE_RATE_MUTATION, {
    onCompleted: () => {
      toast.success('Rate updated')
      navigate(routes.rates())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateRate({ variables: { id, input } })
  }

  return (
    <div className="segment">
      <header className="segment-header">
        <h2 className="heading heading-secondary">Edit Rate {rate.id}</h2>
      </header>
      <div className="segment-main">
        <RateForm rate={rate} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
