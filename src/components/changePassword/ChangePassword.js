import React, { useState } from 'react';
import Rodal from 'rodal';
import TextInput from '../common/TextInput';
import Button from '../common/Button';

import 'rodal/lib/rodal.css';
import './style.scss';

const ChangePassword = ({ willBeModalOpen, onClose }) => {
  const [data, setData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChangeData = ({ target: { name, value } }) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleChangePassword = (e) => {
    console.log(data);
  };

  return (
    <Rodal
      visible={willBeModalOpen}
      width={600}
      height={300}
      animation={'zoom'}
      duration={400}
      customStyles={{ bottom: '15%' }}
      onClose={() => onClose('changePassword')}>
      <form className='changePassword-container'>
        <TextInput
          type='password'
          name='oldPassword'
          value={data.oldPassword}
          onChange={handleChangeData}
          placeholder='Old password...'
          required
        />
        <TextInput
          type='password'
          name='newPassword'
          value={data.newPassword}
          onChange={handleChangeData}
          placeholder='New password...'
          required
        />
        <TextInput
          type='password'
          name='confirmPassword'
          value={data.confirmPassword}
          onChange={handleChangeData}
          placeholder='Repeat password...'
          required
        />
        <Button textContent='save' onClick={handleChangePassword} />
      </form>
    </Rodal>
  );
};

export default ChangePassword;
