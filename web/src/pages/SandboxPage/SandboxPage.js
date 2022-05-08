import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell/ArticlesCell'

const SandboxPage = () => {
  return (
    <>
      <MetaTags
        title="d11z.me | Development Sandbox"
        description="The sandbox page is designed to quickly test code that isn't committed (important)."
      />

      <article className="post">
        <header>
          <div className="title">
            <h1>Sandbox</h1>
            <p>
              The sandbox page is designed to quickly test code that isn&apos;t
              committed (important).
            </p>
          </div>
        </header>

        <h2>Recent Articles</h2>

        <ArticlesCell />
      </article>
    </>
  )
}

export default SandboxPage
