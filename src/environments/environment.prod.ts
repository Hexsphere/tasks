import axios from 'axios';

export const environment = {
  production: true,
  instance: axios.create({
    baseURL: 'https://tasks.apis.hexsphere.com/api',
    withCredentials: true,
  }),
  photoURL: 'https://tasks.apis.hexsphere.com/img',
};
