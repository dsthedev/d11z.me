import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <article className="post">
        <header>
          <div className="title">
            <h1>About d11z.me</h1>
            <p>What is this project all about?</p>
          </div>
        </header>

        <ul className="alt">
          <li>
            <strong>What do?</strong> This is a sandbox for me,{' '}
            <a
              href="https://www.darrensopiarz.com/"
              target="_blank"
              rel="noreferrer"
            >
              d11z
            </a>
            , to experiment with RedwoodJS.
          </li>
          <li>
            <strong>Why Redwood?</strong> Because RedwoodJS is amazing, I
            recommend starting with their{' '}
            <a
              href="https://github.com/redwoodjs/redwood/blob/main/README.md"
              target="_blank"
              rel="noreferrer"
            >
              readme
            </a>
          </li>
          <li>
            <strong>The Goal:</strong> Follow the official tutorial
            unofficially...
          </li>
          <li>
            <strong>Privacy?</strong> This project does not track or store any
            information about the user whatsoever!
          </li>
        </ul>

        <ul className="actions">
          <li>
            <Link to={routes.home()} className="button small">
              Return Home
            </Link>
          </li>
        </ul>
      </article>
    </>
  )
}

export default AboutPage
