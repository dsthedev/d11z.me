import { db } from 'api/src/lib/db'
import CryptoJS from 'crypto-js'
import md5 from 'md5'
import { v4 as uuidv4 } from 'uuid'

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
        data.push({
          id: parseInt(sourceData[0].wp_category[i].wp_term_id[0]),
          name: sourceData[0].wp_category[i].wp_cat_name[0],
          slug: sourceData[0].wp_category[i].wp_category_nicename[0],
          type: 'category',
        })
      }

      for (let i = 0; i < sourceData[0].wp_tag.length; i++) {
        data.push({
          id: parseInt(sourceData[0].wp_tag[i].wp_term_id[0]),
          name: sourceData[0].wp_tag[i].wp_tag_name[0],
          slug: sourceData[0].wp_tag[i].wp_tag_slug[0],
          type: 'tag',
        })
      }

      for (let i = 0; i < sourceData[0].wp_term.length; i++) {
        data.push({
          id: parseInt(sourceData[0].wp_term[i].wp_term_id[0]),
          name: sourceData[0].wp_term[i].wp_term_name[0],
          slug: sourceData[0].wp_term[i].wp_term_slug[0],
          type: 'term',
        })
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

  const importPages = () => {
    try {
      const source = require('./data/ds-pages.json')
      const data = []

      for (let i = 0; i < source.length; i++) {
        data.push({
          title: source[i].title.__cdata,
          slug: source[i].title.__cdata
            .replace(/\W+(?!$)/g, '-')
            .replace(/\W$/, '')
            .toLowerCase(),
          postType: source[i].post_type.__cdata,
          body: source[i].encoded[0].__cdata,
        })
      }
      Promise.all(
        data.map(async (data) => {
          const record = await db.post.create({ data })
          console.log('Importing: ==== ' + record.title + ' ===')
        })
      )
    } catch (error) {
      console.warn('Please define your page import data.')
      console.error(error)
    }
  }

  const importPosts = () => {
    try {
      const source = require('./data/ds-posts.json')
      const data = []

      for (let i = 0; i < source.length; i++) {
        data.push({
          title: source[i].title.__cdata,
          slug: source[i].title.__cdata
            .replace(/\W+(?!$)/g, '-')
            .replace(/\W$/, '')
            .toLowerCase(),
          postType: source[i].post_type.__cdata,
          body: source[i].encoded[0].__cdata
            ? source[i].encoded[0].__cdata
            : '',
        })
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

  const importPortfolio = () => {
    try {
      const source = require('./data/ds-portfolio.json')
      const data = []

      for (let i = 0; i < source.length; i++) {
        data.push({
          title: source[i].title.__cdata,
          slug: source[i].title.__cdata
            .replace(/\W+(?!$)/g, '-')
            .replace(/\W$/, '')
            .toLowerCase(),
          postType: source[i].post_type.__cdata,
          body: source[i].encoded[0].__cdata,
        })
      }
      Promise.all(
        data.map(async (data) => {
          const record = await db.post.create({ data })
          console.log('Importing: ==== ' + record.title + ' ===')
        })
      )
    } catch (error) {
      console.warn('Please define your portfolio import data.')
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
  importTaxonomies()

  // importPages()
  // importPosts()
  // importPortfolio()

  // importRates()
}
