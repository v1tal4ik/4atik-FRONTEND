import axios from 'axios';

const userSignUp = ({ email, name, password }) =>
  axios
    .post('/user', { email, name, password })
    .then((data) => data.status)
    .catch(({ response }) => response.data);

export { userSignUp };
