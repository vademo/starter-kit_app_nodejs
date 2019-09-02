import sinon from 'sinon';
import mongoose from 'mongoose';
import initializeDatabase from '../../src/helpers/db.helper';

describe('DB', () => {
  let sandbox;
  before((done) => {
    sandbox = sinon.createSandbox();
    done();
  });
  after(() => {
    sandbox.restore();
  });
  it('DB connection fail should return error', (done) => {
    sandbox.stub(mongoose, 'connect').rejects(new Error('db error'));
    initializeDatabase()
      .then(() => done('shoudn`t resolve'))
      .catch(() => {
        done();
      });
  });
});
