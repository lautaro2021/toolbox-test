import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../config/app.js'

chai.use(chaiHttp)

/* eslint-disable no-undef */
describe('File Controller Tests', () => {
  describe('GET /files/list', () => {
    it('should return a list of files', async () => {
      const files = {
        files: [
          'test1.csv',
          'test2.csv',
          'test3.csv',
          'test18.csv',
          'test4.csv',
          'test5.csv',
          'test6.csv',
          'test9.csv',
          'test15.csv'
        ]
      }
      const res = await chai.request(app).get('/files/list')

      expect(res.statusCode).equal(200)
      expect(res.body).to.deep.equal(files)
    })
  })

  describe('GET /files/data?fileName', () => {
    it('should return a file if exists', async () => {
      const fileName = 'test2.csv'

      const res = await chai.request(app)
        .get('/files/data')
        .query({ fileName })

      expect(res.statusCode).equal(200)
      expect(res.body).to.have.property('file').to.be.an('string')
      expect(res.body).to.have.property('lines').to.be.an('array')
    })

    it('should return not found if not exists', async () => {
      const fileName = 'test40.csv'

      const res = await chai.request(app)
        .get('/files/data')
        .query({ fileName })

      expect(res.statusCode).equal(404)
      expect(res.body).to.have.property('msg').to.be.an('string')
    })
  })

  describe('GET /files/data', () => {
    it('shoud return a list with JSON files', async () => {
      const res = await chai.request(app)
        .get('/files/data')

      expect(res.statusCode).equal(200)
      expect(res.body).to.be.an('array')

      res.body.forEach((file) => {
        expect(file).to.be.an('object')
        expect(file).to.have.property('file').to.be.an('string')
        expect(file).to.have.property('lines').to.be.an('array')
      })
    })
  })
})
/* eslint-disable no-undef */
