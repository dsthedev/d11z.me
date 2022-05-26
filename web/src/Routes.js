import { Router, Route, Set, Private } from '@redwoodjs/router'
import ClewsLayout from 'src/layouts/ClewsLayout'
import BookmarksLayout from 'src/layouts/BookmarksLayout'
import TaxonomiesLayout from 'src/layouts/TaxonomiesLayout'
import PostsLayout from 'src/layouts/PostsLayout'
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={DefaultLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/chapter1" page={Chapter1Page} name="chapter1" />
        <Route path="/chapter2" page={Chapter2Page} name="chapter2" />

        <Route path="/posts" page={ArticlesPage} name="articles" />
        <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />

        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        {/* <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" /> */}
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

        <Set wrap={TaxonomiesLayout}>
          <Route path="/admin/taxonomies/new" page={TaxonomyNewTaxonomyPage} name="newTaxonomy" />
          <Route path="/admin/taxonomies/{id:Int}/edit" page={TaxonomyEditTaxonomyPage} name="editTaxonomy" />
          <Route path="/admin/taxonomies/{id:Int}" page={TaxonomyTaxonomyPage} name="taxonomy" />
          <Route path="/admin/taxonomies" page={TaxonomyTaxonomiesPage} name="taxonomies" />
        </Set>

        <Set wrap={BookmarksLayout}>
          <Route path="/admin/bookmarks/new" page={BookmarkNewBookmarkPage} name="newBookmark" />
          <Route path="/admin/bookmarks/{id:Int}/edit" page={BookmarkEditBookmarkPage} name="editBookmark" />
          <Route path="/admin/bookmarks/{id:Int}" page={BookmarkBookmarkPage} name="bookmark" />
          <Route path="/admin/bookmarks" page={BookmarkBookmarksPage} name="bookmarks" />
        </Set>

        <Set wrap={ClewsLayout}>
          <Route path="/admin/clews/new" page={ClewNewClewPage} name="newClew" />
          <Route path="/admin/clews/edit/{id:Int}" page={AdminEditClewPage} name="editClew" />
          <Route path="/admin/clews/{id:Int}" page={ClewClewPage} name="clew" />
          <Route path="/admin/clews" page={ClewClewsPage} name="clews" />
        </Set>
      </Private>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
