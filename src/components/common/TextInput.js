import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const TextInput = ({
  id,
  className,
  name,
  type,
  value,
  onChange,
  onBlur,
  placeholder,
  required,
}) => (
  <input
    id={id}
    key={name}
    className={`general-input ${className}`}
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    placeholder={placeholder}
    required={required}
  />
);

TextInput.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

export default TextInput;
