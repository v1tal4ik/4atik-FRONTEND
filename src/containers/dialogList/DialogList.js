import React, { useEffect, useState } from 'react';
import DialogItem from '../../components/dialogItem/DialogItem';
import { fetchDialogList } from '../../api/dialogs';
import './style.scss';

const DialogList = () => {
  const [dialogs, setDialogs] = useState([]);

  const fetchDialogs = async () => {
    const response = await fetchDialogList();
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
        {dialogs.map((dialog) => (
          <DialogItem key={dialog.id} {...dialog} />
        ))}
      </div>
    </div>
  );
};

export default DialogList;
