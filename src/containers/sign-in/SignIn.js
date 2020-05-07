import React, { useState } from 'react';
import AuthContainer from '../../components/auth-container/AuthContainer';
import { userSignIn } from '../../api';
import './style.scss';

const SignIn = (props) => {
  const [state, setstate] = useState({ email: '', password: '', error: '' });

  const handleChangeInput = ({ target: { name, value } }) => setstate({ ...state, [name]: value });

  const signIn = async (e) => {
    const { email, password, error } = state;
    if (email && password && !error) {
      e.preventDefault();
      const response = await userSignIn({ email, password });
      if (response.status) {
        const { auth } = response;
        // TODO use this case
        // localStorage.setItem(`${user.id}`, JSON.stringify(auth));

        localStorage.setItem('auth', JSON.stringify(auth));
        props.history.push('/');
      } else {
        alert(response.msg);
      }
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

export default SignIn;
