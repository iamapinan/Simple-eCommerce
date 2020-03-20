const request = require('supertest')
const app = require('../app');

beforeEach(() => {

})
beforeAll(() => {
    jest.useFakeTimers()
})

describe('GET Endpoints', () => {
  it('GET /user/profile', async done => {
    request(app)
    .get('/user/profile')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
        if (err) return done(err);
        expect(res.body.email).toEqual('user@test.com')
        done()
      })
  })

  it('GET /product', async done => {
    request(app)
    .get('/product')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe('success')
        done()
    })
  })
  
})

describe('POST Endpoints', () => {
    it('POST /user/login', async done => {
        request(app).post('/user/login')
        .send({user: 'test@domain.com', password: 'test'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            if (err) return done(err)
            expect(res.body.message).toBe('success')
            done()
        })
    })

    it('POST /product/create', async done => {
        const mock = jest.fn()
        const productInfo = {
            id: 10001,
            name: "Test product 1",
            description: "very good product",
            price: 1000,
            quantity: 10
        }

        mock.mockReturnValue({
            message: "success",
            product: productInfo
        })

        request(app).post('/product/create')
        .send(productInfo)
        .set('Accept', 'application/json')
        .expect(200)
        .end((err, res) => {
            if (err) return done(err)
            expect(mock().message).toBe('success')
            done()
        })
    })
})

