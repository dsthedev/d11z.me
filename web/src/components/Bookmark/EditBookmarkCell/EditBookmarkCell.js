import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import BookmarkForm from 'src/components/Bookmark/BookmarkForm'

export const QUERY = gql`
  query EditBookmarkById($id: Int!) {
    bookmark: bookmark(id: $id) {
      id
      url
      name
      description
      isSticky
      keywords
      createdAt
      updatedAt
    }
  }
`
const UPDATE_BOOKMARK_MUTATION = gql`
  mutation UpdateBookmarkMutation($id: Int!, $input: UpdateBookmarkInput!) {
    updateBookmark(id: $id, input: $input) {
      id
      url
      name
      description
      isSticky
      keywords
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ bookmark }) => {
  const [updateBookmark, { loading, error }] = useMutation(
    UPDATE_BOOKMARK_MUTATION,
    {
      onCompleted: () => {
        toast.success('Bookmark updated')
        navigate(routes.bookmarks())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateBookmark({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Bookmark {bookmark.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <BookmarkForm
          bookmark={bookmark}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
