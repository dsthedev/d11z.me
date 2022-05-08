import { NavLink, routes } from '@redwoodjs/router'
import ToggleElemClassById from 'src/util/ToggleElemClassById'

const FutureImperfectHeader = ({ children }) => {
  return (
    <>
      <header id="header">
        <h1>
          <a href={routes.home()}>d11z</a>
        </h1>
        <nav className="links">
          <ul>
            <li>
              <NavLink activeClassName="active" to={routes.about()}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to={routes.chapter1()}>
                Ch: 1
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to={routes.chapter2()}>
                Ch: 2
              </NavLink>
            </li>
          </ul>
        </nav>

        <nav className="main">
          <ul>
            <li className="menu">
              <a
                className="fa-bars"
                href="#menu"
                onClick={(e) =>
                  ToggleElemClassById(e, 'is-menu-visible', 'menu')
                }
              >
                Menu
              </a>
            </li>
          </ul>
        </nav>
        {children}
      </header>
    </>
  )
}

export default FutureImperfectHeader
