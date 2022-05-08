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
            <li>Getting Dynamic</li>
          </ul>
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
