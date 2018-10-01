import dotenv from 'dotenv';
import app from './app';

const CUSTOM_CONFIG_ENVS = ['test', 'development', 'build'];
dotenv.config({
  path: (CUSTOM_CONFIG_ENVS.includes(process.env.NODE_ENV) ? `.env.${process.env.NODE_ENV}` : '.env'),
});

app.start((err) => {
  if (err) {
    console.error(`Error=${err}`);
  }
  console.info('app bootstrap finished');
});
