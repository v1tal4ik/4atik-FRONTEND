/* eslint-disable */
import axios from 'axios';

export const refreshTokens = () => {
  const auth = JSON.parse(localStorage.getItem('auth'));
  if (auth) {
    const { id, refreshToken } = auth;
    return axios
      .post('/secret', { id, refreshToken })
      .then(({ data }) => {
        const { id, accessToken, refreshToken } = data;
        localStorage.setItem('auth', JSON.stringify({ id, accessToken, refreshToken }));
        return 'Your session was expiried, but we update it, try again please';
      })
      .catch((e) => e.response.data);
  } else {
    return 'refreshToken is undefined, Sign In again please';
  }
};
