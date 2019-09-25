import request from 'supertest';
import { expect } from 'chai';
import app from '../../src/app';

describe('Status route test:', () => {
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
  it('GET: /api/status', () => {
    request(server)
      .get('/api/status')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) throw err;
      });
  });
  it('GET: /api/fake', () => request(server)
    .get('/api/fake')
    .expect('Content-Type', /json/)
    .expect(404)
    .then(({ body }) => {
      expect(body.type).to.deep.equal('/api/fake');
      expect(body.title).to.deep.equal('Not Found');
      expect(body.message).to.deep.equal('This route doesn\'t exist on the api');
      expect(body.status).to.deep.equal(404);
      expect(body.code).to.deep.equal(404);
    })
    .catch((err) => {
      throw err;
    }));
});
