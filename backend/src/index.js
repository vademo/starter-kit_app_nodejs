import app from './app';

app.start((application, err) => {
  if (err) {
    console.error(`Error=${err}`);
  }
  console.info('app bootstrap finished');
});
