import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AdminPage = () => {
  const { currentUser, hasRole } = useAuth()

  return (
    <>
      <MetaTags title="Admin" description="Admin page" />

      <main className="mx-auto max-w-prose">
        <header>
          <h2>Manage Site</h2>
        </header>
        <article>
          <ul className="flex flex-row">
            <li>
              <Link
                to={routes.posts()}
                className="p-1 ml-1 border-2 border-orange-400 bg-orange-500 hover:bg-orange-600 text-neutral-50 hover:text-neutral-200 text-lg"
              >
                Posts
              </Link>
            </li>
          </ul>
        </article>
      </main>
    </>
  )
}

export default AdminPage
