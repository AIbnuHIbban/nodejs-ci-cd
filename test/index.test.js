// Example Simple Test

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
})

// API Endpoint Simple Test
const request = require('supertest')
const app = require('../index.js')

describe('Get Endpoint Me', () => {
  it('should return route /me', async (done) => {
    const res = await request(app).get('/me')
    expect(res.statusCode).toEqual(200)
    // res.text  jika di Route  return res.send
    // expect(res.text).toEqual('Hi Abdullah!')
    // res.body  jika di Route return res.json
    expect(res.body.content).toEqual('ME')
    done()
  })
})

// describe('Get Endpoint You', () => {
//   it('should return route /you', async (done) => {
//     const res = await request(app).get('/you')
//     expect(res.statusCode).toEqual(200)
//     // res.text  jika di Route  return res.send
//     // expect(res.text).toEqual('Hi Abdullah!')
//     // res.body  jika di Route return res.json
//     expect(res.body.content).toEqual('YOU')
//     done()
//   })
// })
