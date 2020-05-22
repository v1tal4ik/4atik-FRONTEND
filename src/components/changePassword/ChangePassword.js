import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Rodal from 'rodal';
import TextInput from '../common/TextInput';
import Button from '../common/Button';

import { changePassword } from '../../api/user';

import 'rodal/lib/rodal.css';
import './style.scss';

const ChangePassword = ({ willBeModalOpen, onClose }) => {
  const { id } = useSelector((state) => state.user);

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

  const handleCheckPasswords = () => {
    // TODO add error notification element and logic for it
    const { newPassword, confirmPassword } = data;
    if (newPassword === confirmPassword) {
      console.log('passwords are match');
    } else {
      console.log('passwords are not match');
    }
  };

  const handleChangePassword = async (e) => {
    // TODO add error notification element and logic for it
    e.preventDefault();

    const response = await changePassword(id, {
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
    });
    alert(response.msg);
    if (response.status) {
      onClose();
    }
  };

  return (
    <Rodal
      visible={willBeModalOpen}
      width={600}
      height={300}
      animation={'zoom'}
      duration={400}
      customStyles={{ bottom: '15%' }}
      onClose={onClose}>
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
          onBlur={handleCheckPasswords}
          placeholder='New password...'
          required
        />
        <TextInput
          type='password'
          name='confirmPassword'
          value={data.confirmPassword}
          onChange={handleChangeData}
          onBlur={handleCheckPasswords}
          placeholder='Repeat password...'
          required
        />
        <Button textContent='save' onClick={handleChangePassword} />
      </form>
    </Rodal>
  );
};

ChangePassword.propTypes = {
  willBeModalOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ChangePassword;
