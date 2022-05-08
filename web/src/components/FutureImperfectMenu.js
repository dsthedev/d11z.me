import { NavLink, routes } from '@redwoodjs/router'
import ToggleElemClassById from 'src/util/ToggleElemClassById'

const FutureImperfectMenu = ({ children }) => {
  return (
    <>
      <section id="menu">
        <a
          className="fa fa-angle-double-right close-menu"
          href="#menu"
          onClick={(e) => ToggleElemClassById(e, 'is-menu-visible', 'menu')}
        >
          <span className="sr-only">Close</span>
        </a>

        <section>
          <ul className="links">
            <li>
              <NavLink activeClassName="active" to={routes.about()}>
                <h3>About</h3>
                <p>What is this project all about?</p>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to={routes.posts()}>
                <h3>Posts</h3>
                <p>Pointless drivel, probably...</p>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to={routes.chapter1()}>
                <h3>Chapter 1</h3>
                <p>
                  Get <em>familiar</em> with Redwood.
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to={routes.chapter2()}>
                <h3>Chapter 2</h3>
                <p>
                  Getting <strong>dynamic</strong> with Redwood!
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to={routes.sandbox()}>
                <h3>Sandbox</h3>
                <p>Watch out for pesky bugs!</p>
              </NavLink>
            </li>
          </ul>
        </section>

        <section>
          <ul className="actions stacked">
            <li>
              <NavLink
                activeClassName="active"
                className="button large fit"
                to={routes.home()}
              >
                Log In (Home)
              </NavLink>
            </li>
          </ul>
        </section>

        <section>{children}</section>
      </section>
    </>
  )
}

export default FutureImperfectMenu
