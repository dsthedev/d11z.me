import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AdminPage = () => {
  return (
    <>
      <MetaTags title="Admin" description="Admin page" />

      <main className="mx-auto max-w-prose">
        <header>
          <h2>Manage Site</h2>
        </header>
        <article>
          <p className="py-4 my-4">
            <Link
              to={routes.users()}
              className="p-2 border-2 border-indigo-800 text-indigo-700 hover:text-indigo-900"
            >
              Users
            </Link>
          </p>
        </article>
      </main>
    </>
  )
}

export default AdminPage
