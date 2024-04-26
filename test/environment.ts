import * as hapi from '@hapi/hapi'
import knex from '../src/db'
import { init } from '../src/server'

type TestServerEnvironment = {
  server: hapi.Server
  resetDB: () => Promise<void>
}

let testEnv: TestServerEnvironment | undefined = undefined

const resetDB = async () => {
  const query = ``
  return knex.schema.raw(query)
}

export const getTestEnv = async (): Promise<TestServerEnvironment> => {
  if (testEnv != undefined) return testEnv
  const server = await init()
  await knex.migrate.rollback()
  await knex.migrate.latest()
  testEnv = {
    server,
    resetDB: resetDB
  }
  return testEnv
}
