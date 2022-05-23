import { useAuth } from '@redwoodjs/auth'
import { NavLink, routes } from '@redwoodjs/router'

import logoPng from 'src/images/logo.png'

import { LoginOrOutLink } from 'src/util/LoginOrLogoutLink'

const DefaultLayout = ({ children }) => {
  const { isAuthenticated, currentUser } = useAuth()

  const navLiClasses = 'p-1 mb-1'
  const navLinkClasses = 'hover:text-emerald-700'
  const navLinkActiveClasses = 'text-emerald-600'

  return (
    <>
      <div className="h-screen">
        <header className="mx-auto max-w-prose">
          <nav className="mb-2 border-b-2 border-b-emerald-800">
            <ul className="w-full flex flex-row justify-center">
              <li className={navLiClasses}>
                <h1>
                  <NavLink
                    className={navLinkClasses}
                    activeClassName={navLinkActiveClasses}
                    to={routes.home()}
                  >
                    <img
                      src={logoPng}
                      alt="d11z logo"
                      className="w-6 transition ease-in-out delay-100 hover:scale-110"
                    />
                    <span className="visually-hidden">Home</span>
                  </NavLink>
                </h1>
              </li>
              <li className={navLiClasses}>
                <NavLink
                  className={navLinkClasses}
                  activeClassName={navLinkActiveClasses}
                  to={routes.about()}
                >
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        {children}

        <footer className="mx-auto max-w-prose mt-3 border-t-2 border-t-cyan-900">
          <nav>
            <ul className="flex flex-row text-sm justify-center">
              <li className={navLiClasses + 'pr-4 text-stone-300'}>
                <span>&copy; d11z</span>
              </li>
              {isAuthenticated ? (
                <li className={navLiClasses + 'pr-4 text-stone-500'}>
                  <NavLink
                    className={navLinkClasses}
                    activeClassName={navLinkActiveClasses}
                    to={routes.admin()}
                  >
                    <em>Admin/</em>
                  </NavLink>
                </li>
              ) : (
                false
              )}
              {isAuthenticated ? (
                <li className={navLiClasses + 'pr-4 text-stone-700'}>
                  <code className="p-1 text-xs bg-slate-600 text-stone-200">
                    {currentUser?.firstName ? currentUser.firstName : '?'}
                  </code>
                  :
                  <code className="p-1 text-xs bg-sky-600 text-stone-200">
                    {currentUser?.roles ? currentUser.roles : '?'}
                  </code>
                </li>
              ) : (
                false
              )}
              <li className={navLiClasses}>{<LoginOrOutLink />}</li>
            </ul>
          </nav>
        </footer>
      </div>
    </>
  )
}

export default DefaultLayout
