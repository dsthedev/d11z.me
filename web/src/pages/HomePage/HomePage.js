import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import skateJpg from 'src/images/skate.jpg'

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="d11z.me | A personal developer's webapp sandbox"
        description="d11z.me is a personal webapp sandbox by d11z for experimenting with the RedwoodJS framework."
      />

      <main className="mx-auto max-w-prose">
        <article>
          <header>
            <img
              src={skateJpg}
              alt="Go Skate!"
              className="border-2 border-lime-900"
            />
            <h2 className="text-center text-3xl">Greetings, Wanderer...</h2>
          </header>
          <section>
            <p>
              My name is Darren Sopiarz, and this is my personal website.
              Sometimes I refer to it as "my little corner of the vast and open
              web". What you see here is a public landing page for myself; where
              people can find more information about me. On occasion, I will
              publish thoughts, ideas, and personal guides here for others to
              view.
            </p>

            <hr />

            <p className="text-center">
              <Link to={routes.about()}>Read About: d11z</Link>
            </p>
          </section>
        </article>
      </main>
    </>
  )
}

export default HomePage
