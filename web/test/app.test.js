const request = require('supertest');
const app = require('../app');
const expect = require('chai').expect;

describe('Express App Basic Tests', () => {

  // 1. Home page test
  it('should return 200 for home page', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });

  // 2. 404 test
  it('should return 404 for invalid route', (done) => {
    request(app)
      .get('/this-route-does-not-exist')
      .expect(404, done);
  });

});