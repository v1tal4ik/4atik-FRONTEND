import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';

import { withRouter } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import ChangePassword from '../../components/changePassword/ChangePassword';

import { fetchUserdDataThunk } from '../../store/thunks/user';

import 'antd/dist/antd.css';
import './style.scss';
import Button from '../../components/common/Button';

const SideBar = (props) => {
  const user = useSelector((state) => state.user);
  const [willBeModalOpen, setWillBeModalOpen] = useState({
    changePassword: false,
    changePesonalInfo: false,
  });

  useEffect(() => {
    if (!user.id) {
      props.fetchUserdDataThunk();
    }
  }, []);

  const handleOpenModal = (type) => {
    setWillBeModalOpen({
      ...willBeModalOpen,
      [type]: true,
    });
  };

  const handleCloseModal = (type) => {
    setWillBeModalOpen({
      ...willBeModalOpen,
      [type]: false,
    });
  };

  const LogOut = () => {
    localStorage.removeItem('auth');
    // TODO dialog window to for confirm log out
    alert('Log Out');
    props.history.push('/sign-in');
  };

  const menu = (
    <Menu style={{ width: '220px', margin: '0 auto' }}>
      <Menu.Item onClick={() => handleOpenModal('changePassword')}>Change Password</Menu.Item>
      <Menu.Item onClick={() => handleOpenModal('changePesonalInfo')}>
        Change Personal Information
      </Menu.Item>
    </Menu>
  );

  const dropdownStyle = {
    marginTop: '20px',
    display: 'block',
    fontSize: '30px',
    color: '#fff',
    cursor: 'poiner',
  };

  return (
    <div className='sideBar-container'>
      <div className='profile-block'>
        <img className='profile-block-img' src='./image/avatar-men-1.png' alt='your avatar' />
        <Dropdown overlay={menu}>
          <a
            className='ant-dropdown-link'
            href='#'
            style={dropdownStyle}
            onClick={(e) => e.preventDefault()}>
            {user.name} <DownOutlined style={{ fontSize: '24px' }} />
          </a>
        </Dropdown>
      </div>

      <div className='navigation-block'>
        <ul>
          <li>example itemm</li>
          <li>example itemm</li>
          <li>example itemm</li>
          <li>example itemm</li>
          <li>example itemm</li>
        </ul>
      </div>
      <div className='footer-block'>
        <Button textContent='Log Out' onClick={LogOut} />
      </div>
      <ChangePassword
        willBeModalOpen={willBeModalOpen.changePassword}
        onClose={() => handleCloseModal('changePassword')}
      />
    </div>
  );
};

const mapStateToProps = () => ({});
const actions = { fetchUserdDataThunk };

export default withRouter(connect(mapStateToProps, actions)(SideBar));
