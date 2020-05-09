import axios from 'axios';
import { refreshTokens } from './refreshTokens';
import store from '../store/index';

const HTTP = axios.create({});

HTTP.interceptors.request.use(
  (config) => {
    const { url, headers } = config;
    const { id } = store.getState().user;
    const auth = JSON.parse(localStorage.getItem(id)) || '';
    if (url.includes('1.0/users/login') || url.includes('1.0/users/register')) {
      return config;
    }

    return {
      ...config,
      headers: {
        ...headers,
        Authorization: `Bearer ${auth.accessToken}`,
      },
    };
  },
  (error) => error
);

HTTP.interceptors.response.use(
  (response) => response,
  async (err) => {
    const { data, status } = err.response;
    if (status === 401 && data === 'jwt expired') {
      const { id } = store.getState().user;
      const msg = await refreshTokens({ id });
      return Promise.reject({ response: { data: msg } });
    }
    return Promise.reject(err);
  }
);
export default HTTP;
