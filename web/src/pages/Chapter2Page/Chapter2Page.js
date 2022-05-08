import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const Chapter2Page = () => {
  return (
    <>
      <MetaTags
        title="Chapter 2: Getting dynamic with RedwoodJS"
        description="Chapter 2 of the tutorial covers getting dynamic, Cells, working with data, and routing parameters."
      />

      <article className="post">
        <header>
          <div className="title">
            <h1>Getting Dynamic with Redwood</h1>
            <p>
              Chapter 2 of the tutorial covers getting dynamic, Cells, working
              with data, and routing parameters.
            </p>
          </div>
        </header>

        <section>
          <h2>Getting Dynamic</h2>
          <ul className="alt">
            <li>
              Databases and SQL are first-class citizens in Redwood, and it
              starts with <code>api/db/schema.prisma</code>
            </li>
            <li>
              <pre>{`
model Post {
  id        Int      @id @default(autoincrement())
  title     String
  body      String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt()
}
`}</pre>
            </li>
            <li>Prisma supports string based CUID or UUID for ids</li>
            <li>
              Create a snapshot of schema changes and migrate{' '}
              <code>yarn redwood prisma migrate dev</code>
            </li>
            <li>
              Prisma Studio is a great way to view &amp; manipulate data:{' '}
              <code>yarn rw prisma studio</code> opens{' '}
              <code>http://localhost:5555/</code>
            </li>
            <li>
              Redwood has a complete CRUD operation component generator:{' '}
              <code>yarn rw g scaffold post</code>
            </li>
            <li>
              The scaffold generator does a lot, so make sure to read the{' '}
              <a
                href="https://redwoodjs.com/docs/tutorial/chapter2/getting-dynamic#creating-a-post-editor"
                target="_blank"
                rel="noreferrer"
              >
                docs
              </a>{' '}
              and get familiar with the files it creates
            </li>
          </ul>
          <blockquote>
            <strong>Notice</strong>: sqlite databases will not work on live
            hosting such as Netlify, a full database will need to be connected.
          </blockquote>
        </section>

        <hr />

        <section>
          <h2>Cells</h2>
          <ul className="alt">
            <li>Cells</li>
          </ul>
        </section>

        <hr />

        <section>
          <h2>Working w/ Data</h2>
          <ul className="alt">
            <li>Working w/ Data</li>
          </ul>
        </section>

        <hr />

        <section>
          <h2>Routing Parameters</h2>
          <ul className="alt">
            <li>Routing Parameters</li>
          </ul>
        </section>
      </article>
    </>
  )
}

export default Chapter2Page
