// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import FutureImperfectHomeLayout from './layouts/FutureImperfectHomeLayout/FutureImperfectHomeLayout'
import FutureImperfectSingleLayout from './layouts/FutureImperfectSingleLayout/FutureImperfectSingleLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={FutureImperfectHomeLayout}>
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Set wrap={FutureImperfectSingleLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/sandbox" page={SandboxPage} name="sandbox" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
