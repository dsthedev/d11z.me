import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="d11z.me | A personal developer's webapp sandbox"
        description="d11z.me is a personal webapp sandbox by d11z for experimenting with the RedwoodJS framework."
      />

      <article className="post">
        <header>
          <div className="title">
            <h2>
              <Link to={routes.about()}>What is d11z.me?</Link>
            </h2>
            <ul className="actions">
              <li>
                <Link to={routes.about()} className="button large">
                  Read About Project
                </Link>
              </li>
            </ul>
          </div>
        </header>
        <header>
          <div className="title">
            <h2>
              <Link to={routes.sandbox()}>Sandbox</Link>
            </h2>
            <ul className="actions">
              <li>
                <Link to={routes.sandbox()} className="button large">
                  Get to Work!
                </Link>
              </li>
            </ul>
          </div>
        </header>
        <footer>
          <p>Nothing else to see here...</p>
        </footer>
      </article>
    </>
  )
}

export default HomePage
