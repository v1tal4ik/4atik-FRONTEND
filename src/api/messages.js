import HTTP from './config';

const fetchMessagesByDialogId = (params) => {
  return HTTP.get('/messages', { params })
    .then(({ data }) => data)
    .catch(({ response }) => response.data);
};

export { fetchMessagesByDialogId };
