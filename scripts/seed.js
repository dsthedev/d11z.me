import { db } from 'api/src/lib/db'

// All import functions are controlled at end!
export default async () => {
  const importUsers = () => {
    try {
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

  const importRates = () => {
    try {
      const data = require('./data/rates.json')
      Promise.all(
        data.map(async (data) => {
          const record = await db.rate.create({ data })
          console.log('id:' + record.id + ' imported')
        })
      )
    } catch (error) {
      console.warn('Please define your rate data.')
      console.error(error)
    }
  }

  // importRates()
  importUsers()
}
