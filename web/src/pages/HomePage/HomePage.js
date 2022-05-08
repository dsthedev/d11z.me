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
            <h1>Latest Progress</h1>
            <ul className="alt">
              <li>
                <strong>
                  <Link to={routes.chapter2()}>Chapter 2</Link>
                </strong>
                {' | '}
                Started getting dynamic with Redwood!
              </li>
            </ul>
          </div>
          <div className="meta">
            <time className="published" dateTime="2022-05-07">
              May 7, 2022
            </time>
          </div>
        </header>
        <p>
          Up Next:{' '}
          <strong>
            <a href={routes.chapter2()}>Cells</a>
          </strong>
        </p>
      </article>

      <section className="post">
        <h2>Thoughts &amp; Ideas</h2>
        <ul>
          <li>
            Can blog posts be cached to json files for most recent, single, etc
            to reduce db dependency?
          </li>
          <li>
            It's becoming a little tedious to hand-write all the html on this
            site, need to find a better way to store and edit page content,
            maybe <code>marked</code>?
          </li>
        </ul>
      </section>
    </>
  )
}

export default HomePage
