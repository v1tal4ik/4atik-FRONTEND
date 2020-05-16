import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './style.scss';

const SideBar = () => {
  const menu = (
    <Menu style={{ width: '220px', margin: '0 auto' }}>
      <Menu.Item>Change Password</Menu.Item>
      <Menu.Item>Change Personal Information</Menu.Item>
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
            v1tal4ik <DownOutlined style={{ fontSize: '24px' }} />
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
        <button>log Out</button>
      </div>
    </div>
  );
};

export default SideBar;
