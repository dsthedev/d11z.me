import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import DefaultLayout from 'src/layouts/DefaultLayout/DefaultLayout'

const PostsLayout = ({ children }) => {
  return (
    <DefaultLayout>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

      <header>
        <ul className="flex flex-row justify-evenly">
          <li>
            <Link
              className="p-2 mb-2 hover:border-b-2 hover:border-slate-800"
              to={routes.admin()}
            >
              Admin
            </Link>
          </li>
          <li>
            <Link
              className="p-2 mb-2 hover:border-b-2 hover:border-slate-800"
              to={routes.posts()}
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              className="p-2 mb-2 hover:border-b-2 hover:border-slate-800"
              to={routes.newPost()}
            >
              New Post
            </Link>
          </li>
        </ul>
      </header>

      <div className="mx-auto my-6 max-w-md">{children}</div>
    </DefaultLayout>
  )
}

export default PostsLayout
