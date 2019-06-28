import mongoose from 'mongoose';

function initializeDatabase(callback) {
  mongoose.Promise = global.Promise;
  mongoose.connect(process.env.MONGO_CONNECTIONSTRING, { useMongoClient: true });
  mongoose.connection.once('open', (err) => {
    if (err) {
      console.log('mongo error', err);
      return callback(err);
    }
    return callback();
  });
}

export function closeDatabaseConnection() {
  mongoose.connection.close();
}

export default initializeDatabase;
