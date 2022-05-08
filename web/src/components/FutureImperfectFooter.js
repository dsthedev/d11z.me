import { Link, routes } from '@redwoodjs/router'

const FutureImperfectFooter = ({ children }) => {
  return (
    <>
      <section id="footer">
        <ul className="icons">
          <li>
            <a
              href="https://github.com/dsthedev/d11z.me"
              className="icon solid fa-code"
            >
              <span className="label">Source Code</span>
            </a>
          </li>
          <li>
            <a href="mailto://" className="icon solid fa-envelope">
              <span className="label">Contact Developer</span>
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
