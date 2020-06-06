import { Environment } from './environment-variables';

export const environment = {
  production: true,
  apiUrl: process.env.apiUrl || 'https://vardhanmabbuapp.herokuapp.com',
  ioSocketUrl: process.env.socketUrl || 'https://vardhanmabbuapp.herokuapp.com',
};
