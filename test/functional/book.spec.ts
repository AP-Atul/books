import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import 'mocha'
import * as repo from '../../src/books/repo'
import { Book } from '../../src/books/types'
import { TestServerEnvironment, getTestEnv } from '../environment'
chai.use(chaiHttp)

describe('book create api', async () => {
  let env: TestServerEnvironment
  beforeEach(async () => {
    env = await getTestEnv()
    await env.resetDB()
  })
  it('should throw 400 when proper payload is not provided', async () => {
    const response = await env.server.inject({
      url: '/books/create',
      method: 'post',
      payload: {
        title: 'random'
      }
    })
    expect(response.statusCode).to.eql(400)
  })
  it('should create new book when data is correct', async () => {
    const response = await env.server.inject({
      url: '/books/create',
      method: 'post',
      payload: {
        title: 'random',
        author: 'random',
        isbn: 'random',
        publication_date: new Date().toISOString()
      }
    })
    expect(response.statusCode).to.eql(200)
    expect(response.result).not.undefined
    const book = response.result as Book
    const fromDb = await repo.get(book.id)
    expect(fromDb).to.eql(book)
  })
})
