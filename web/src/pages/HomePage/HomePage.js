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
        <h1>Sitemap</h1>
        <ul className="alt">
          <li>
            <strong>
              <Link to={routes.about()}>About</Link>
            </strong>
            {': '}
            What is this project all about?
          </li>
          <li>
            <strong>
              <Link to={routes.sandbox()}>Sandbox</Link>
            </strong>
            {': '}
            Where all the fun is!
          </li>
          <li>
            <strong>
              <Link to={routes.chapter1()}>Chapter 1</Link>
            </strong>
            {': '}
            Getting familiar with Redwood
          </li>
        </ul>
      </article>
    </>
  )
}

export default HomePage
