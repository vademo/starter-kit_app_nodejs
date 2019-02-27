import async from 'async';
import bodyParser from 'body-parser';
import express from 'express';
import helmet from 'helmet';
import responseHandler from 'digipolis-response';
import dotenv from 'dotenv';

import routes from './routes';
import errorHandler from './middlewares/error.middleware';
import initializeDatabase from './helpers/db.helper';

dotenv.config();

let app;
function initializeExpress(callback) {
  app = express();
  app.use(helmet());
  app.use(bodyParser.json({ limit: '4096kb' }));
  app.use(responseHandler());
  app.use(routes);
  app.use((err, req, res, next) => {
    console.log(err);
    return next(err);
  });

  app.use(errorHandler());

  // Status handler
  return callback();
}

function startListening(callback) {
  const server = app.listen(process.env.PORT, () => {
    console.log(`Express server listening on port ${server.address().port}`);
    return callback();
  });
}

function start(cb) {
  async.series([
    initializeExpress,
    initializeDatabase,
    startListening,
  ], (err) => {
    if (err) {
      console.error(`Error occured ${err}`);
      return process.exit(1);
    }
    if (cb && typeof cb === 'function') {
      return cb(app, err);
    }
    return cb(err);
  });
}

function stop() {
  app.close();
}

export default {
  start,
  stop,
};

