import AdminHeader from 'src/components/AdminHeader/AdminHeader'
import DefaultLayout from 'src/layouts/DefaultLayout/DefaultLayout'

const AdminLayout = ({ children }) => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-xl">
        <AdminHeader />
      </div>

      {children}
    </DefaultLayout>
  )
}

export default AdminLayout
