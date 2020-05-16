import React from 'react';
import DialogList from '../dialogList/DialogList';
import Sidebar from '../sideBar/SideBar';
import Messager from '../messager/Messager';
import './style.scss';

const System = () => {
  return (
    <div>
      <DialogList />
      <Sidebar />
      <Messager />
    </div>
  );
};

export default System;
