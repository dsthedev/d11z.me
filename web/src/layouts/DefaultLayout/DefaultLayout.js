import { useAuth } from '@redwoodjs/auth'
import { NavLink, routes } from '@redwoodjs/router'

// import 'src/css/fontawesome-all.min.css'
// import 'src/css/future-imperfect.css'

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
            <ul className="w-full flex flex-row justify-center text-m md:text-xl lg:text-3xl ">
              <li className={navLiClasses}>
                <h1>
                  <NavLink
                    className={navLinkClasses}
                    activeClassName={navLinkActiveClasses}
                    to={isAuthenticated ? routes.admin() : routes.home()}
                  >
                    <img
                      src={logoPng}
                      alt="d11z logo"
                      className="w-6 md:w-8 lg:w-10 transition ease-in-out delay-100 hover:scale-110"
                    />
                    <span className="visually-hidden">
                      <i className="fa fa-home">
                        <span className="visually-hidden">Home</span>
                      </i>
                    </span>
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

        <footer className="mx-auto max-w-prose p-4 my-4 border-t-2 border-t-cyan-900">
          <nav>
            {isAuthenticated ? (
              <ul className="flex flex-row text-lg justify-center">
                <li className={navLiClasses + 'pr-4 text-stone-700'}>
                  <code className="px-3 py-1 text-xs bg-slate-500 hover:bg-slate-600 text-stone-200">
                    {currentUser?.firstName ? currentUser.firstName : '?'}
                  </code>
                  <span className="px-3">::</span>
                  <code className="px-3 py-1 text-xs bg-sky-500 hover:bg-sky-600 text-stone-200">
                    {currentUser?.roles ? currentUser.roles : '?'}
                  </code>
                </li>
              </ul>
            ) : (
              false
            )}
            <ul className="flex flex-row text-md justify-center">
              <li className={navLiClasses + 'pr-4 text-stone-400'}>
                <span>&copy; d11z</span>
              </li>
              {isAuthenticated ? (
                <li className={navLiClasses + 'pr-4 text-stone-800'}>
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
              <li className={navLiClasses}>{<LoginOrOutLink />}</li>
            </ul>
          </nav>
        </footer>
      </div>
    </>
  )
}

export default DefaultLayout
