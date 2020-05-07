import React from 'react';
import HTTP from '../../api/config';
import './style.scss';

const System = () => {
  const foo = async () => {
    HTTP.post('1.0/foo', { foo: 'bar' })
      .then((res) => {
        console.log('system response', res);
      })
      .catch((err) => {
        console.log('system err', err.response);
        alert(err.response.data);
      });
  };
  return (
    <div>
      <button onClick={foo}>post request</button>
      <button>log out</button>
    </div>
  );
};

export default System;
