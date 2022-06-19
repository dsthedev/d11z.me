import { Link, routes } from '@redwoodjs/router'

const AdminHeader = () => {
  return (
    <header>
      <ul className="flex flex-row justify-start text-l">
        <li>
          <Link
            to={routes.admin()}
            className="p-2 mb-2 hover:border-b-2 hover:border-slate-800"
          >
            Admin
          </Link>
        </li>
        <li className="visually-hidden">
          <Link
            to={routes.posts()}
            className="p-2 mb-2 hover:border-b-2 hover:border-slate-800"
          >
            Posts
          </Link>
        </li>
        <li className="visually-hidden">
          <Link
            to={routes.taxonomies()}
            className="p-2 mb-2 hover:border-b-2 hover:border-slate-800"
          >
            Taxonomies
          </Link>
        </li>
        <li className="visually-hidden">
          <Link
            to={routes.bookmarks()}
            className="p-2 mb-2 hover:border-b-2 hover:border-slate-800"
          >
            Bookmarks
          </Link>
        </li>
        <li>
          <Link
            to={routes.clews()}
            className="p-2 mb-2 hover:border-b-2 hover:border-slate-800"
          >
            Clews
          </Link>
        </li>
        <li className="visually-hidden">
          <Link
            to="/sups"
            className="p-2 mb-2 hover:border-b-2 hover:border-slate-800"
          >
            Sups
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default AdminHeader
