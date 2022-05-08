import { Link, routes } from '@redwoodjs/router'

export default () => (
  <div id="wrapper">
    <main id="main">
      <style
        dangerouslySetInnerHTML={{
          __html: `
.post {
  text-align: center;
  max-width: 420px;
  margin: 0 auto;
}
            `,
        }}
      />

      <div className="post box large">
        <h1>404 | Page Not Found</h1>
        <hr />
        <Link to={routes.home()} className="button large">
          Go Home
        </Link>
        <hr />
      </div>
    </main>
  </div>
)
