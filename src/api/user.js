import HTTP from './config';

const userSignIn = ({ email, password }) => {
  return HTTP.post('/user/login', { email, password })
    .then(({ data }) => data)
    .catch(({ response }) => response.data);
};

const userSignUp = ({ email, name, password }) => {
  return HTTP.post('/user/register', { email, name, password })
    .then((data) => data.status)
    .catch(({ response }) => response.data);
};

const fetchUserData = () => {
  return HTTP.get('/user')
    .then(({ data }) => data)
    .catch(({ response }) => ({ status: false, msg: response.data }));
};

const changePassword = (params) => {
  return HTTP.post('user/password', params)
    .then(({ data }) => data)
    .catch(({ response }) => response.data);
};

export { userSignUp, userSignIn, fetchUserData, changePassword };
