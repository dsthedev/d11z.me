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
            <li>
              Cells make handling loading states, errors, and blank slates much
              easier, but they do a lot, so{' '}
              <em>
                <a href="https://redwoodjs.com/docs/cells">
                  read the effin docs!
                </a>
              </em>
            </li>
            <li>
              Key features:
              <code>
                <strong>QUERY</strong>, Loading, Empty, Failure,{' '}
                <strong>Success</strong>, beforeQuery, afterQuery
              </code>
            </li>
            <li>
              Cells are meant for fetching data, and are beneficial for async
              content
            </li>
            <li>
              Use alias to control prop names, improve consistency:
              <pre>{`
export const QUERY = gql
  query ArticlesQuery {
    articles: posts {
      id
    }
  }
`}</pre>
            </li>
            <li>
              The full scope of how Redwood works with data should be made more
              clear in the next section...
            </li>
          </ul>
        </section>

        <hr />

        <section>
          <h2>Working w/ Data</h2>
          <ul className="alt">
            <li>
              This is where it gets a bit complicated, and Redwood really
              leverages modern tools to shine
            </li>
            <li>
              Redwood implements GraphQL with Apollo on the client, and Yoga on
              the server
            </li>
            <li>
              The whole process is <em>designed</em> to be deployed to a
              serverless stack
            </li>
            <li>
              Services are an extraction above single database tables, and
              define functions for business logic
            </li>
            <li>
              <code>*.sdl.ts</code> files expose services to GraphQL, allowing
              fine control over API access
            </li>
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
