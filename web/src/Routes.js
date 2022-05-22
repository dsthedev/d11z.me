import { Router, Route, Set, Private } from '@redwoodjs/router'
import TaxonomiesLayout from 'src/layouts/TaxonomiesLayout'
import PostsLayout from 'src/layouts/PostsLayout'
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={PostsLayout}>
        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
      </Set>
      <Set wrap={TaxonomiesLayout}>
        <Route path="/taxonomies/new" page={TaxonomyNewTaxonomyPage} name="newTaxonomy" />
        <Route path="/taxonomies/{id:Int}/edit" page={TaxonomyEditTaxonomyPage} name="editTaxonomy" />
        <Route path="/taxonomies/{id:Int}" page={TaxonomyTaxonomyPage} name="taxonomy" />
        <Route path="/taxonomies" page={TaxonomyTaxonomiesPage} name="taxonomies" />
      </Set>
      <Set wrap={DefaultLayout}>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        {/* <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" /> */}
        <Route path="/" page={HomePage} name="home" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/chapter1" page={Chapter1Page} name="chapter1" />
        <Route path="/chapter2" page={Chapter2Page} name="chapter2" />

        <Route path="/posts" page={ArticlesPage} name="articles" />
        <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
      </Set>

      <Private unauthenticated="login">
        <Set wrap={DefaultLayout}>
          <Route path="/admin" page={AdminPage} name="admin" />
        </Set>
      </Private>

      <Private unauthenticated="admin" roles={['admin', 'editor']}>
        <Set wrap={PostsLayout}>
          <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/admin/posts" page={PostPostsPage} name="posts" />
        </Set>
      </Private>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
