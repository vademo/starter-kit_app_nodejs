import dotenv from 'dotenv';

const CUSTOM_CONFIG_ENVS = ['test', 'development', 'build'];

function setEnviroment() {
  return dotenv.config({
    path: (CUSTOM_CONFIG_ENVS.includes(process.env.NODE_ENV) ? `.env.${process.env.NODE_ENV}` : '.env'),
  });
}

export default setEnviroment;
