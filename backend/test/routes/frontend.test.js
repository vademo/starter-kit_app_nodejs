import request from 'supertest';
import app from '../../src/app';

describe('front-end:', () => {
  let server;
  before((done) => {
    app.start().then((application) => {
      server = application;
      done();
    });
  });
  after((done) => {
    app.stop();
    done();
  });
  it('GET: /fallback', () => request(server)
    .get('/fallback')
    .expect('Content-Type', 'text/html; charset=UTF-8')
    .expect(200)
    .catch((err) => {
      throw err;
    }));
});
