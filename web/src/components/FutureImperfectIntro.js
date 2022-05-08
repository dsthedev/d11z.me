import { Link, routes } from '@redwoodjs/router'
import logo from 'src/images/logo.jpg'

const FutureImperfectIntro = ({ children }) => {
  return (
    <>
      <section className="intro">
        <Link to={routes.home()} className="logo">
          <img src={logo} alt="Placeholder Logo" />
        </Link>

        <header>
          <h2>d11z.me</h2>
          <p>A RedwoodJS Sandbox</p>
        </header>

        {children}
      </section>
    </>
  )
}

export default FutureImperfectIntro
