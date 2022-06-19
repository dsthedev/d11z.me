import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import SupForm from 'src/components/Sup/SupForm'

export const QUERY = gql`
  query EditSupById($id: Int!) {
    sup: sup(id: $id) {
      id
      manufacturer
      productRef
      name
      collection
      type
      categories
      capsuleAmount
      servingSize
      wMeal
      caution
      ingredients
      otherIngredients
      proprietaryBlend
      createdAt
      updatedAt
    }
  }
`
const UPDATE_SUP_MUTATION = gql`
  mutation UpdateSupMutation($id: Int!, $input: UpdateSupInput!) {
    updateSup(id: $id, input: $input) {
      id
      manufacturer
      productRef
      name
      collection
      type
      categories
      capsuleAmount
      servingSize
      wMeal
      caution
      ingredients
      otherIngredients
      proprietaryBlend
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ sup }) => {
  const [updateSup, { loading, error }] = useMutation(UPDATE_SUP_MUTATION, {
    onCompleted: () => {
      toast.success('Sup updated')
      navigate(routes.sups())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateSup({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Sup {sup.id}</h2>
      </header>
      <div className="rw-segment-main">
        <SupForm sup={sup} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
