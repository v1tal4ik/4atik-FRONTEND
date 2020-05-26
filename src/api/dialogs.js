import HTTP from './config';

const fetchDialogList = (params) => {
  return HTTP.get('/dialog', { params })
    .then(({ data }) => data)
    .catch(({ response }) => response.data);
};

export { fetchDialogList };
