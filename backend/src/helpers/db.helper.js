import mongoose from 'mongoose';

function initializeDatabase() {
  return new Promise((resolve, reject) => {
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.MONGO_CONNECTIONSTRING, { useNewUrlParser: true });
    mongoose.connection.once('open', (err) => {
      if (err) {
        console.log('mongo error', err);
        return reject(err);
      }
      return resolve();
    });
  });
}

export function closeDatabaseConnection() {
  mongoose.connection.close();
}

export default initializeDatabase;
