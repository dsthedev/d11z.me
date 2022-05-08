import { Link, routes } from '@redwoodjs/router'

const FutureImperfectFooter = ({ children }) => {
  return (
    <>
      <section id="footer">
        <ul className="icons">
          <li>
            <a href="#" className="icon solid fa-code">
              <span className="label">Github</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon solid fa-envelope">
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
        <p className="copyright">
          &copy; Untitled. Design: <a href="http://html5up.net">HTML5 UP</a>.
          Images: <a href="http://unsplash.com">Unsplash</a>.
        </p>

        {children}
      </section>
    </>
  )
}

export default FutureImperfectFooter
