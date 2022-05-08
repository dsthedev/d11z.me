import { Link, routes } from '@redwoodjs/router'

const FutureImperfectFooter = ({ children }) => {
  return (
    <>
      <section id="footer">
        <ul className="icons">
          <li>
            <a
              href="https://github.com/dsthedev?tab=repositories"
              className="icon solid fa-code"
            >
              <span className="label">Github</span>
            </a>
          </li>
          <li>
            <a href="mailto://" className="icon solid fa-envelope">
              <span className="label">Email</span>
            </a>
          </li>
          <li>
            <code>&copy; d11z</code>
          </li>
        </ul>
        <p className="copyright">
          Design:{' '}
          <a
            target="_blank"
            href="http://html5up.net/future-imperfect"
            rel="noreferrer"
          >
            Future Imperfect
          </a>
        </p>

        {children}
      </section>
    </>
  )
}

export default FutureImperfectFooter
