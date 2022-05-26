import { db } from 'api/src/lib/db'
import CryptoJS from 'crypto-js'

// All import functions are controlled at end!
export default async () => {
  /**
   * User Import
   *
   * Be careful using this, as it will take UNHASHED PASSWORDS from your json data source file
   * And DO NOT commit your users data source file!
   *
   * Example User import json entry:
   * {
   *    "email": "admin@email.me",
   *    "unHashedPassword": "A*Strong$Password_2562", // plaintext, gets salted and hashed!
   *    "loginName": "site.admin",
   *    "displayName": "Site Admin",
   *    "firstName": "Site",
   *    "lastName": "Admin",
   *    "roles": "admin"
   * }
   */
  const importUsers = () => {
    try {
      db.user.deleteMany()

      const source = require('./data/users.json')
      const data = []

      for (let i = 0; i < source.length; i++) {
        let tempSalt = CryptoJS.lib.WordArray.random(128 / 8).toString()

        data.push({
          email: source[i].email,
          hashedPassword: CryptoJS.PBKDF2(
            source[i].unHashedPassword,
            tempSalt,
            { keySize: 256 / 32 }
          ).toString(),
          salt: tempSalt,
          name: source[i].name,
          displayName: source[i].displayName,
          firstName: source[i].firstName,
          lastName: source[i].lastName,
          roles: source[i].roles,
        })
      }

      Promise.all(
        data.map(async (data) => {
          const record = await db.user.create({ data })
          console.log('id:' + record.id + ' imported')
        })
      )
    } catch (error) {
      console.warn('Please define your user data.')
      console.error(error)
    }
  }

  /**
   * Import WP Taxonomies
   *
   * Of course, these are all fragemented because WordPress, so this importer will combine them all into a Taxonomy object with a type and trimmed data
   */
  const importTaxonomies = () => {
    try {
      db.taxonomy.deleteMany()

      const sourceData = require('./data/ds-everything.json')

      const data = []

      for (let i = 0; i < sourceData[0].wp_category.length; i++) {
        if (i <= 4) {
          data.push({
            id: parseInt(sourceData[0].wp_category[i].wp_term_id[0]),
            name: sourceData[0].wp_category[i].wp_cat_name[0],
            slug: sourceData[0].wp_category[i].wp_category_nicename[0],
            type: 'category',
          })
        }
      }

      for (let i = 0; i < sourceData[0].wp_tag.length; i++) {
        if (i <= 4) {
          data.push({
            id: parseInt(sourceData[0].wp_tag[i].wp_term_id[0]),
            name: sourceData[0].wp_tag[i].wp_tag_name[0],
            slug: sourceData[0].wp_tag[i].wp_tag_slug[0],
            type: 'tag',
          })
        }
      }

      for (let i = 0; i < sourceData[0].wp_term.length; i++) {
        if (i <= 4) {
          data.push({
            id: parseInt(sourceData[0].wp_term[i].wp_term_id[0]),
            name: sourceData[0].wp_term[i].wp_term_name[0],
            slug: sourceData[0].wp_term[i].wp_term_slug[0],
            type: 'term',
          })
        }
      }

      Promise.all(
        data.map(async (data) => {
          const record = await db.taxonomy.create({ data })
          console.log('Importing: ==== ' + record.name + ' ===')
        })
      )
    } catch (error) {
      console.warn('Please define your taxonomy import data.')
      console.error(error)
    }
  }

  /**
   * Import Posts
   *
   * Currently merges all pages, posts, and portfolio items into one list, preserving most meta
   *
   * Posts don't have nice WYSIWYG Editor yet, but will soon enough
   */
  const importPosts = () => {
    try {
      db.post.deleteMany()

      const sourceData = require('./data/ds-everything.json')
      const source = sourceData[0]['item']
      const data = []

      for (let i = 333; i < source.length; i++) {
        if (i <= 358) {
          data.push({
            wpId: parseInt(source[i].wp_post_id[0]),
            title: source[i].title[0],
            pStatus: source[i].wp_status[0],
            parentId: parseInt(source[i].wp_post_parent[0]),
            slug: source[i].title[0]
              .replace(/\W+(?!$)/g, '-')
              .replace(/\W$/, '')
              .toLowerCase(),
            postType: source[i].wp_post_type[0],
            body: source[i].content_encoded[0]
              ? source[i].content_encoded[0]
              : '',
            // createdAt: source[i].wp_post_date[0],
            // updatedAt: source[i].wp_post_modified[0],
          })
        }
      }
      Promise.all(
        data.map(async (data) => {
          const record = await db.post.create({ data })
          console.log('Importing: ==== ' + record.title + ' ===')
        })
      )
    } catch (error) {
      console.warn('Please define your post import data.')
      console.error(error)
    }
  }

  /**
   * Import Bookmarks
   */
  const importBookmarks = () => {
    try {
      db.bookmark.deleteMany()

      const data = require('./data/brave_bookmarks.json')

      Promise.all(
        data.map(async (data) => {
          const record = await db.bookmark.create({ data })
          console.log('Imported Bookmark: ' + record.name + ' =>')
        })
      )
    } catch (error) {
      console.warn('Please review bookmark import data.')
      console.error(error)
    }
  }

  const importClews = () => {
    try {
      db.clew.deleteMany()

      const source = require('./data/clews.json')
      const data = []

      for (let i = 0; i < source.length; i++) {
        data.push({
          for: source[i].for,
          username: source[i].username,
          email: source[i].email,
          hint: source[i].hint,
          symbols: source[i].symbols,
          context: source[i].context,
          loginURL: source[i].loginURL,
          licenseKey: source[i].licenseKey,
          notes: source[i].notes,
          createdAt: source[i].createdAt,
          updatedAt: source[i].updatedAt,
        })
      }

      Promise.all(
        data.map(async (data) => {
          const record = await db.clew.create({ data })
          console.log('*** Clew: [' + record.for + '] imported ***')
        })
      )
    } catch (error) {
      console.warn('Please define your user data.')
      console.error(error)
    }
  }

  // const importRates = () => {
  //   try {
  //     const data = require('./data/rates.json')
  //     Promise.all(
  //       data.map(async (data) => {
  //         const record = await db.rate.create({ data })
  //         console.log('id:' + record.id + ' imported')
  //       })
  //     )
  //   } catch (error) {
  //     console.warn('Please define your rate data.')
  //     console.error(error)
  //   }
  // }

  importUsers()
  // importPosts()
  // importTaxonomies()
  // importBookmarks()
  importClews()

  // importRates()
}
