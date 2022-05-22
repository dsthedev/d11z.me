// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'
import UsersLayout from 'src/layouts/UsersLayout'
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={DefaultLayout}>
        <Route path="/login" page={LoginPage} name="login" />
        {/* <Route path="/signup" page={SignupPage} name="signup" /> */}
        {/* <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" /> */}
        <Route path="/" page={HomePage} name="home" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/chapter1" page={Chapter1Page} name="chapter1" />
        <Route path="/chapter2" page={Chapter2Page} name="chapter2" />
      </Set>

      <Private unauthenticated="login">
        <Set wrap={DefaultLayout}>
          <Route path="/admin" page={AdminPage} name="admin" />
        </Set>
      </Private>

      <Private unauthenticated="admin" roles="admin">
        <Set wrap={UsersLayout}>
          <Route path="/admin/users/new" page={UserNewUserPage} name="newUser" />
          <Route path="/admin/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
          <Route path="/admin/users/{id:Int}" page={UserUserPage} name="user" />
          <Route path="/admin/users" page={UserUsersPage} name="users" />
        </Set>
      </Private>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
