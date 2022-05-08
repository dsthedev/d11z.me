import { Link, routes } from '@redwoodjs/router'

const FutureImperfectBlurb = ({ children }) => {
  return (
    <>
      <section className="blurb">
        <h2>About</h2>
        <p>
          d11z.me is a personal webapp sandbox by d11z for experimenting with
          the RedwoodJS framework.
        </p>
        <ul className="actions">
          <li>
            <Link to={routes.about()} className="button">
              Learn More
            </Link>
          </li>
        </ul>

        {children}
      </section>
    </>
  )
}

export default FutureImperfectBlurb
