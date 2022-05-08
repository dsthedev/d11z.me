import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

let redwoodDiscordSplash =
  'https://cdn.discordapp.com/splashes/679514959968993311/afdfd652313475842599626504d98ef4.jpg?size=1024'

const AboutPage = () => {
  return (
    <>
      <MetaTags
        title="About d11z.me"
        description="All about d11z.me, a sandbox webapp for experimenting with the RedwoodJS framework."
      />

      <article className="post">
        <header>
          <div className="title">
            <h1>About d11z.me</h1>
            <p>
              All about d11z.me, a sandbox webapp for experimenting with the
              RedwoodJS framework.
            </p>
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

        <span className="image featured">
          <img src={redwoodDiscordSplash} alt="RedwoodJS Splash Logo" />
        </span>
      </article>
    </>
  )
}

export default AboutPage
