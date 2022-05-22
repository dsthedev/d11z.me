import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ProfileCell from 'src/components/ProfileCell/ProfileCell'

const AdminPage = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <MetaTags title="Admin" description="Admin page" />

      <main className="mx-auto mb-6 max-w-prose">
        <header>
          <ul className="flex flex-row justify-start">
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
                to={routes.taxonomies()}
              >
                Taxonomies
              </Link>
            </li>
          </ul>
        </header>

        <section>
          <ProfileCell id={currentUser?.id ? currentUser.id : false} />
        </section>
      </main>
    </>
  )
}

export default AdminPage
