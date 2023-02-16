

const request = require('supertest')
const assert = require('assert')
const server = require('./index')

describe('GET /athlete', () => {
  it('responds with json', (done) => {
    request(server)
      .get('/athlete')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, { myFavouriteathlete: 'ronaldo' }, done)
  })
})
