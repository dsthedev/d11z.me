// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import RatesLayout from 'src/layouts/RatesLayout'
import PostsLayout from 'src/layouts/PostsLayout'
import FutureImperfectHomeLayout from './layouts/FutureImperfectHomeLayout/FutureImperfectHomeLayout'
import FutureImperfectSingleLayout from './layouts/FutureImperfectSingleLayout/FutureImperfectSingleLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={RatesLayout}>
        <Route path="/rates/new" page={RateNewRatePage} name="newRate" />
        <Route path="/rates/{id:Int}/edit" page={RateEditRatePage} name="editRate" />
        <Route path="/rates/{id:Int}" page={RateRatePage} name="rate" />
        <Route path="/rates" page={RateRatesPage} name="rates" />
      </Set>
      <Set wrap={PostsLayout}>
        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
      </Set>
      <Set wrap={FutureImperfectSingleLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/sandbox" page={SandboxPage} name="sandbox" />
        <Route path="/chapter1" page={Chapter1Page} name="chapter1" />
        <Route path="/chapter2" page={Chapter2Page} name="chapter2" />
      </Set>

      <Set wrap={FutureImperfectHomeLayout}>
        <Route path="/" page={HomePage} name="home" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
