import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

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

        <h2>Todo:</h2>

        <ol className="">
          <li>follow the tutorial</li>
          <li>apply to this project</li>
          <li>?</li>
          <li>profit</li>
        </ol>

        <div className="box">
          <code>[put test code here]</code>
        </div>
      </article>
    </>
  )
}

export default SandboxPage
