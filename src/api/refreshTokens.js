/* eslint-disable */
import axios from 'axios';

export const refreshTokens = ({ id }) => {
  const auth = JSON.parse(localStorage.getItem(id));
  if (auth) {
    const { refreshToken } = auth;
    return axios
      .post('/1.0/secret', { id, refreshToken })
      .then(({ data }) => {
        const { id, accessToken, refreshToken } = data;
        localStorage.setItem(id, JSON.stringify({ accessToken, refreshToken }));
        return 'Your session was expiried, but we update it, try again please';
      })
      .catch((e) => e.response.data);
  } else {
    return 'refreshToken is undefined, Sign In again please';
  }
};
