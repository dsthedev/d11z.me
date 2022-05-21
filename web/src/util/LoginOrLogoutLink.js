import { useAuth } from '@redwoodjs/auth'
import { NavLink, routes } from '@redwoodjs/router'

export const LoginOrOutLink = () => {
  const { isAuthenticated, logOut } = useAuth()

  if (isAuthenticated) {
    return (
      <NavLink
        className="hover:text-amber-900"
        activeClassName="text-amber-900"
        to={routes.login()}
        onClick={logOut}
      >
        Logout
      </NavLink>
    )
  } else {
    return (
      <NavLink
        className="hover:text-emerald-700"
        activeClassName="text-emerald-700"
        to={routes.login()}
      >
        Login
      </NavLink>
    )
  }
}
