import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_POST_MUTATION = gql`
  mutation DeletePostMutation($id: Int!) {
    deletePost(id: $id) {
      id
    }
  }
`

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

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Post = ({ post }) => {
  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      toast.success('Post deleted')
      navigate(routes.posts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete post ' + id + '?')) {
      deletePost({ variables: { id } })
    }
  }

  return (
    <>
      <article className="mx-auto max-w-prose">
        <header>
          <h2 className="text-3xl">{post.title}</h2>
        </header>
        <div
          dangerouslySetInnerHTML={{
            __html: post.body,
          }}
        ></div>
      </article>

      <footer>
        <nav className="flex flex-row p-2 my-2 justify-center">
          <Link
            to={routes.editPost({ id: post.id })}
            className="px-3 py-1 ml-2 text-neutral-50 bg-cyan-700 hover:bg-cyan-900"
          >
            Edit
          </Link>
          <button
            type="button"
            className="px-3 py-1 ml-2 text-neutral-50 bg-red-700 hover:bg-red-900"
            onClick={() => onDeleteClick(post.id)}
          >
            Delete
          </button>
        </nav>
      </footer>
    </>
  )
}

export default Post
