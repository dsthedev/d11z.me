import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import FutureImperfectSingleLayout from '../FutureImperfectSingleLayout/FutureImperfectSingleLayout'

// import 'src/scaffold.css'

const PostsLayout = ({ children }) => {
  return (
    <FutureImperfectSingleLayout>
      <article className="post">
        <Toaster toastOptions={{ className: 'toast', duration: 6000 }} />
        <header>
          <div className="title">
            <h1>
              <Link to={routes.posts()}>Posts</Link>
            </h1>
          </div>
          <div className="meta">
            <Link to={routes.newPost()} className="button large">
              <span className="fa fa-plus"></span> New Post
            </Link>
          </div>
        </header>
        <main className="main">{children}</main>
      </article>
    </FutureImperfectSingleLayout>
  )
}

export default PostsLayout
