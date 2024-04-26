import dotenv from 'dotenv'
import _ from 'ramda'

dotenv.config()

const BASE_URL = process.env.BASE_URL || '0.0.0.0:4000'

const config = {
  BASE_URL,
  PORT: process.env.PORT || 4000
}

const prod = _.mergeRight(config, {
  DB_CONNECTION_URI: process.env.DB
})

const test = _.mergeRight(config, {
  DB_CONNECTION_URI: process.env.DB_TEST
})

export = (function () {
  console.log(`Env= ${process.env.NODE_ENV}`)
  switch (process.env.NODE_ENV) {
    case 'production':
      return prod
    case 'test':
      return test
    default:
      return prod
  }
})()
