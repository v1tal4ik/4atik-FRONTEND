import axios from 'axios';
import { refreshTokens } from './refreshTokens';

const HTTP = axios.create({});

HTTP.interceptors.request.use(
  (config) => {
    const { url, headers } = config;
    const auth = JSON.parse(localStorage.getItem('auth')) || '';
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
      const msg = await refreshTokens();
      return Promise.reject({ response: { data: msg } });
    }
    return Promise.reject(err);
  }
);
export default HTTP;
