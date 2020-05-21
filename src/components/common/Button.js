import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ id, name, type, textContent, onClick }) => (
  <button id={id} className='auth-button' name={name} type={type} onClick={onClick}>
    {textContent}
  </button>
);

Button.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  textContent: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
