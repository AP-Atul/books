import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import 'mocha'
import { getTestEnv } from '../environment'
chai.use(chaiHttp)

describe('Diagnostic API', async () => {
  let testEnv

  beforeEach(async () => {
    testEnv = await getTestEnv()
  })

  it('respond to ping', async () => {
    const response = await testEnv.server.inject({
      method: 'get',
      url: '/internal/ping'
    })
    expect(response).to.have.status(200)
  })
})
