import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell/ArticlesCell'

const ArticlesPage = () => {
  return (
    <>
      <MetaTags title="Articles" description="Articles page" />

      <main className="mx-auto max-w-prose">
        <ArticlesCell />
      </main>
    </>
  )
}

export default ArticlesPage
