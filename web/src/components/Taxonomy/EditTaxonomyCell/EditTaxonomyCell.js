import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import TaxonomyForm from 'src/components/Taxonomy/TaxonomyForm'

export const QUERY = gql`
  query EditTaxonomyById($id: Int!) {
    taxonomy: taxonomy(id: $id) {
      id
      name
      slug
      type
      description
      createdAt
      updatedAt
    }
  }
`
const UPDATE_TAXONOMY_MUTATION = gql`
  mutation UpdateTaxonomyMutation($id: Int!, $input: UpdateTaxonomyInput!) {
    updateTaxonomy(id: $id, input: $input) {
      id
      name
      slug
      type
      description
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ taxonomy }) => {
  const [updateTaxonomy, { loading, error }] = useMutation(
    UPDATE_TAXONOMY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Taxonomy updated')
        navigate(routes.taxonomies())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateTaxonomy({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Taxonomy {taxonomy.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TaxonomyForm
          taxonomy={taxonomy}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
