import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Button = ({ id, className, name, type, textContent, onClick }) => (
  <button
    id={id}
    className={`general-button ${className}`}
    name={name}
    type={type}
    onClick={onClick}>
    {textContent}
  </button>
);

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  textContent: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
