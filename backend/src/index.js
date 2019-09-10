import app from './app';

app.start((err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error(`Error=${err}`);
  }
  // eslint-disable-next-line no-console
  console.info('app bootstrap finished');
});
