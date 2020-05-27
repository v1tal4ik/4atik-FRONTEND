import React, { useEffect, useState } from 'react';
import { fetchDialogList } from '../../api/dialogs';
import DialogItem from '../../components/dialogItem/DialogItem';
import './style.scss';

const DialogList = () => {
  const [dialogs, setDialogs] = useState([]);

  const fetchDialogs = async () => {
    // TODO re-write backend to get user id from JWT
    const { id } = JSON.parse(localStorage.getItem('auth'));
    const response = await fetchDialogList({ id });
    if (response.status) {
      setDialogs(response.data);
    }
  };

  useEffect(() => {
    fetchDialogs();
  }, []);

  return (
    <div className='dialog-list-container'>
      <h1>Chat</h1>
      <div className='dialog-list-search-block'>
        <input className='dialog-list-search' type='text' placeholder='Search' />
      </div>

      <div className='dialog-list'>
        <DialogItem />
        <DialogItem />
        <DialogItem />
        <DialogItem />
        <DialogItem />
        <DialogItem />
        <DialogItem />
        <DialogItem />
        <DialogItem />
        <DialogItem />
        <DialogItem />
        <DialogItem />
        <DialogItem />
        <DialogItem />
      </div>
    </div>
  );
};

export default DialogList;
