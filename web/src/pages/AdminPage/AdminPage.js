import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ProfileCell from 'src/components/ProfileCell/ProfileCell'

const AdminPage = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <MetaTags title="Admin" description="Admin page" />

      <main className="mx-auto mb-6 max-w-prose">
        <ProfileCell id={currentUser?.id ? currentUser.id : false} />
      </main>
    </>
  )
}

export default AdminPage
