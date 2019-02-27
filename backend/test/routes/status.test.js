import request from 'supertest';

import app from '../../src/app';


describe('Status route test:', () => {
  let server;
  before((done) => {
    app.start((application) => {
      server = application;
      done();
    });
  });
  it('GET: /api/status', () => {
    request(server)
      .get('/api/status')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) throw err;
      });
  });
  it('GET: /api/fake', () => {
    request(server)
      .get('/api/fake')
      .expect('Content-Type', /json/)
      .expect(404)
      .end((err) => {
        if (err) throw err;
      });
  });
});
