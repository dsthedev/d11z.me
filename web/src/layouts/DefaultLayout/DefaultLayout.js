import { NavLink, routes } from '@redwoodjs/router'

import logoPng from 'src/images/logo.png'
import { LoginOrOutLink } from 'src/util/LoginOrLogoutLink'

const DefaultLayout = ({ children }) => {
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
          <nav className="flex-flex-row justify-center">
            <ul className="flex flex-col text-center">
              <li className={navLiClasses}>
                <h6>{<LoginOrOutLink />}</h6>
              </li>
              <li>
                <span>&copy; d11z</span>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </>
  )
}

export default DefaultLayout
