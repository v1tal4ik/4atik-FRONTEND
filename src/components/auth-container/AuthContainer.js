import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

const AuthContainer = (props) => {
  const {
    subTitleText,
    inputs,
    handleChangeInput,
    error,
    googleBtn,
    submitButton,
    redirectLink,
  } = props;
  return (
    <div className='auth-container'>
      <div className='auth-block'>
        <h1 className='auth-title'>
          Welcome to <span>4atik</span> !
        </h1>
        <h4 className='auth-sub-title'>{subTitleText}</h4>
        <form className='auth-form'>
          {inputs.map(({ name, type, value, placeholder, onBlur }) => (
            <input
              key={name}
              className='auth-input'
              type={type}
              name={name}
              value={value}
              onChange={handleChangeInput}
              onBlur={onBlur}
              placeholder={placeholder}
              required
            />
          ))}
          <p className='auth-error'>{error}</p>
          {googleBtn && googleBtn.visible ? (
            <button className='auth-button' onClick={googleBtn.onClick}>
              Import data from Google
            </button>
          ) : null}
          <button className='auth-button' type='submit' onClick={submitButton.onClick}>
            {submitButton.textContent}
          </button>
        </form>
        <Link to={redirectLink.path} className='auth-link'>
          {redirectLink.textContent}
        </Link>
      </div>
    </div>
  );
};

AuthContainer.propTypes = {
  subTitleText: PropTypes.string.isRequired,
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      value: PropTypes.string,
      placeholder: PropTypes.string,
      onBlur: PropTypes.func,
    }),
  ),
  handleChangeInput: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  googleBtn: PropTypes.shape({
    visible: PropTypes.bool,
    onClick: PropTypes.func,
  }),
  submitButton: PropTypes.shape({
    textContent: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  }),
  redirectLink: PropTypes.shape({
    path: PropTypes.string.isRequired,
    textContent: PropTypes.string.isRequired,
  }),
};

export default AuthContainer;
