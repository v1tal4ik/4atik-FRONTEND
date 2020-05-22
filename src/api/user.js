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

const fetchUserData = (params) => {
  return HTTP.get('/user', { params })
    .then(({ data }) => data)
    .catch(({ response }) => ({ status: false, msg: response.data }));
};

const changePassword = (id, params) => {
  return HTTP.post('/password', { id, ...params })
    .then(({ data }) => data)
    .catch(({ response }) => response.data);
};

export { userSignUp, userSignIn, fetchUserData, changePassword };
