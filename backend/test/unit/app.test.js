import sinon from 'sinon';
import rewire from 'rewire';

const apprewire = rewire('../../src/app');
const app = apprewire.default;

describe('App', () => {
  let sandbox;
  before((done) => {
    sandbox = sinon.createSandbox();
    done();
  });
  after(() => {
    sandbox.restore();
  });
  it('app fails to start should trigger exit', (done) => {
    // eslint-disable-next-line no-underscore-dangle
    apprewire.__set__('startListening', sandbox.mock().rejects(new Error('error')));
    sandbox.stub(process, 'exit');
    app.start().then(() => {
      sinon.assert.called(process.exit);
      done();
    });
  });
});
