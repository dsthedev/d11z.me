import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const Chapter1Page = () => {
  return (
    <>
      <MetaTags
        title="Chapter 1: Get familiar with RedwoodJS"
        description="Chapter 1 of the tutorial covers prerequisites, installation & setup, file structure, first pages, layouts, and links."
      />

      <article className="post">
        <header>
          <div className="title">
            <h1>Getting Familiar with Redwood</h1>
            <p>
              Chapter 1 of the tutorial covers prerequisites, installation &
              setup, file structure, first pages, layouts, and links.
            </p>
          </div>
        </header>

        <section>
          <h2>Prerequisites</h2>
          <ul className="alt">
            <li>
              High level understanding of{' '}
              <strong>React, GraphQL Prisma, Jamstack</strong>
            </li>
            <li>
              Consider joining their{' '}
              <a
                href="https://discord.gg/jjSYEQd"
                target="_blank"
                rel="noreferrer"
              >
                Discord
              </a>
            </li>
            <li>
              Commit <code>yarn redwood upgrade</code> to memory
            </li>
            <li>
              Have Node
              <code>{'>=14.19 <=16.x'}</code>
            </li>
            <li>
              &amp; Yarn
              <code>{'>=1.15'}</code>
            </li>
            <li>
              Should definitely use <code>nvm</code> to manage node and npm
              versions
            </li>
          </ul>
        </section>

        <hr />

        <section>
          <h2>Installation & Development</h2>
          <ul className="alt">
            <li>
              Create a redwood app with{' '}
              <code>yarn create redwood-app ./redwoodblog</code>
            </li>
            <li>
              Run development tools with <code>yarn redwood dev</code>
            </li>
            <li>Remember, the port number is as easy as counting: 8, 9, 10!</li>
            <li>Use git properly, please...</li>
          </ul>
        </section>

        <hr />

        <section>
          <h2>Redwood File Structure</h2>
          <ul className="alt">
            <li>
              <strong>api/</strong>
              <br />
              backend: database, dist, directives, lambda functions, graphql,
              auth, services, types
            </li>
            <li>
              <strong>web/</strong>
              <br />
              frontend: public, src [components, layouts, pages, routing, etc]
            </li>
            <li>
              <strong>scripts/</strong>
              <br />
              custom: cli commands, seed db, etc
            </li>
          </ul>
        </section>

        <hr />

        <section>
          <h2>Create a Page</h2>
          <ul className="alt">
            <li>
              Create a page with <code>yarn rw g page home /</code>
            </li>
            <li>
              Redwood page generator also creates a test file, storybook story,
              and routes entry
            </li>
            <li>
              New page components are automagically imported in the{' '}
              <code>Routes.js</code> file to save time.
            </li>
            <li>
              Don&apos;t forget to style and maintain the 404 Not Found page!
            </li>
            <li>The routes file can get dynamic too...</li>
          </ul>
        </section>

        <hr />

        <section>
          <h2>Another page and Link</h2>
          <ul className="alt">
            <li>
              Create another page with <code>yarn rw g page about</code>
            </li>
            <li>
              Default route paths are generated unless custom pathname specified
              via CLI command
            </li>
            <li>
              By default Redwood will automagically code-split every Page{' '}
              <a
                href="https://redwoodjs.com/docs/router#not-code-splitting"
                target="_blank"
                rel="noreferrer"
              >
                (unless overridden)
              </a>{' '}
              for fast blazing fast load times
            </li>
            <li>
              <code>
                import {'{(Link, NavLink, routes)}'} from '@redwoodjs/router'
              </code>
            </li>
            <li>
              <strong>DO NOT FORGET</strong>: Metatags are pretty important for
              SEO and stuff.
            </li>
            <li>
              Recommend using{' '}
              <strong>
                <a
                  href="https://www.robinwieruch.de/react-function-component"
                  target="_blank"
                  rel="noreferrer"
                >
                  Function Components
                </a>
              </strong>{' '}
              and{' '}
              <strong>
                <a
                  href="https://reactjs.org/docs/hooks-intro.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  React Hooks
                </a>
              </strong>{' '}
              for nice DRY modular code
            </li>
          </ul>
        </section>

        <hr />

        <section>
          <h2>Layouts</h2>
          <ul className="alt">
            <li>
              <strong>DON&apos;T REPEAT YO&apos;SELF!</strong>
            </li>
            <li>Layout > Page > Components</li>
            <li>
              <code>yarn rw g layout blog</code>
            </li>
            <li>RW Generates tests &amp; stories for layouts...</li>
            <li>
              Remember to use <code>{'({children})'}</code> appropriately for
              nesting components
            </li>
            <li>
              Apply a layout to multiple pages with{' '}
              <code>{'<Set wrap={Layout}>...routes...</Set>'}</code>
            </li>
            <li>
              <strong>Notice</strong>: Redwood provides a useful{' '}
              <code>src/</code> alias to use in imports
            </li>
            <li>
              <strong>Notice</strong>: Smart Semantic Naming Systems R Nice
            </li>
          </ul>
        </section>

        <hr />

        <section>
          <ul className="actions">
            <li>
              <Link to={routes.chapter2()} className="button large">
                Chapter 2
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  )
}

export default Chapter1Page
