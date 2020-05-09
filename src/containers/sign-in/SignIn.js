import React, { useState } from 'react';
import { connect } from 'react-redux';
import AuthContainer from '../../components/auth-container/AuthContainer';
import { signInThunk } from '../../store/thunks/user';
import './style.scss';

const SignIn = (props) => {
  const [state, setstate] = useState({ email: '', password: '', error: '' });

  const handleChangeInput = ({ target: { name, value } }) => setstate({ ...state, [name]: value });

  const signIn = async (e) => {
    const { email, password, error } = state;
    if (email && password && !error) {
      e.preventDefault();
      props.signInThunk({ email, password }, () => props.history.push('/'));
    }
  };

  return (
    <AuthContainer
      subTitleText='We are happy that you are with us'
      inputs={[
        { type: 'email', name: 'email', placeholder: 'Email', value: state.email },
        { type: 'password', name: 'password', placeholder: 'Password', value: state.password },
      ]}
      handleChangeInput={handleChangeInput}
      error={state.error}
      submitButton={{ onClick: signIn, textContent: 'Sign In' }}
      redirectLink={{ path: '/sign-up', textContent: 'I dont have an account, sign up now' }}
    />
  );
};

const mapStateToProps = () => ({});
const actions = { signInThunk };

export default connect(mapStateToProps, actions)(SignIn);
