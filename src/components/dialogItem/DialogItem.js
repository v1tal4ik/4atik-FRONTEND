import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { fetchMessagesByDialogId } from '../../api/messages';
import './style.scss';

const DialogItem = (props) => {
  const { id, updatedAt, partner } = props;
  const [lastMessage, setLastMessage] = useState('');

  const fetchLastMessage = async () => {
    const response = await fetchMessagesByDialogId({ dialogId: id });
    if (response.status) {
      const { data } = response;
      setLastMessage(data[data.length - 1].text);
    }
  };

  useEffect(() => {
    fetchLastMessage();
  }, [props]);

  const lastUpdatedDate = moment().calendar(updatedAt, {
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    nextWeek: 'dddd',
    lastDay: '[Yesterday]',
    lastWeek: '[Last] dddd',
    sameElse: 'DD/MM/YYYY',
  });

  return (
    <div className='dialog-item'>
      <div className='dialog-item-avatar'>
        <img src='./image/avatar-men-1.png' alt='your avatar' />
      </div>
      <div className='dialog-item-content'>
        <span>{partner.name} </span>
        <p>{lastMessage}</p>
      </div>
      <div className='dialog-item-external-info'>
        <span>{lastUpdatedDate}</span>
        {/* TODO create count of unread messages  */}
      </div>
    </div>
  );
};

export default DialogItem;
