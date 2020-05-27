import React from 'react';
import './style.scss';

const DialogItem = () => {
  return (
    <div className='dialog-item'>
      <div className='dialog-item-avatar'>
        <img src='./image/avatar-men-1.png' alt='your avatar' />
      </div>
      <div className='dialog-item-content'>
        <span>Hurih Omar </span>
        <p>I've see you next week asa wrong with this text</p>
      </div>
      <div className='dialog-item-external-info'>
        <span>02 Feb</span>
      </div>
    </div>
  );
};

export default DialogItem;
