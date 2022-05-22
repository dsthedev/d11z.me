import { db } from 'api/src/lib/db'

// All import functions are controlled at end!
export default async () => {
  const importUsers = () => {
    try {
      db.user.deleteMany()

      const data = require('./data/users.json')
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

  // importRates()
  importUsers()
  importPages()
  importPosts()
  importPortfolio()
}
