import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import 'mocha'
import * as repo from '../../src/books/repo'
import { TestServerEnvironment, getTestEnv } from '../environment'
chai.use(chaiHttp)

describe('book repo', async () => {
  let testEnv: TestServerEnvironment
  beforeEach(async () => {
    testEnv = await getTestEnv()
    testEnv.resetDB()
  })
  it('should create a book', async () => {
    const result = await repo.create({
      title: 'random',
      author: 'random',
      isbn: 'random',
      publication_date: new Date().toISOString()
    })
    expect(result).not.be.undefined
    expect(result?.title).eql('random')
    const find = await repo.get(result!.id)
    expect(find).to.eql(result)
  })
  it('should fail create a book with same isbn', async () => {
    const result = await repo.create({
      title: 'random',
      author: 'random',
      isbn: 'random',
      publication_date: new Date().toISOString()
    })
    expect(result).not.be.undefined
    const fails = await repo.create({
      title: 'random',
      author: 'random',
      isbn: 'random',
      publication_date: new Date().toISOString()
    })
    expect(fails).to.undefined
  })
})
