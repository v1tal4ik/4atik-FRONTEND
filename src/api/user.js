import HTTP from './config';

const userSignIn = ({ email, password }) =>
  HTTP.post('1.0/users/login', { email, password })
    .then(({ data }) => data)
    .catch(({ response }) => response.data);

const userSignUp = ({ email, name, password }) =>
  HTTP.post('1.0/users/register', { email, name, password })
    .then((data) => data.status)
    .catch(({ response }) => response.data);

export { userSignUp, userSignIn };
