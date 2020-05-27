import HTTP from './config';

const fetchDialogList = () => {
  return HTTP.get('/dialog')
    .then(({ data }) => data)
    .catch(({ response }) => response.data);
};

export { fetchDialogList };
