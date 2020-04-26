import React, { useState, useEffect } from 'react';
import AuthContainer from '../../components/auth-container/AuthContainer';
import { userSignUp } from '../../api';
import './style.scss';

const initialUserData = {
  email: '',
  name: '',
  password: '',
  repeatPassword: '',
  error: '',
  wasGoogleLoaded: false,
};

const SignUp = (props) => {
  const [userData, setUserData] = useState(initialUserData);

  useEffect(() => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2
        .init({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        })
        .then(() => setUserData({ ...userData, wasGoogleLoaded: true }))
        .catch((err) => console.error(err));
    });
  }, []);

  const handleChangeInput = ({ target: { name, value } }) => {
    setUserData({ ...userData, [name]: value });
  };

  const handleImportDataFromGoogle = () => {
    const authOK = (user) => {
      const email = user.getBasicProfile().getEmail();
      const name = user.getBasicProfile().getName();
      setUserData({ ...userData, email, name, wasGoogleLoaded: false });
    };
    const authERROR = (err) => console.error(err);

    const GoogleAuth = window.gapi.auth2.getAuthInstance();
    GoogleAuth.signIn({
      scope: 'profile email',
    }).then(authOK, authERROR);
  };

  const validatePasswords = () => {
    const { password, repeatPassword } = userData;
    setUserData({
      ...userData,
      error: password === repeatPassword ? '' : '* Passwords  are not match :(',
    });
  };

  const signUp = async (e) => {
    const { email, name, password, repeatPassword, error } = userData;
    if (email && name && password && !error) {
      e.preventDefault();
      const result = await userSignUp({ email, name, password });
      if (result.msg) {
        setUserData({ ...userData, error: result.msg });
        setTimeout(() => {
          setUserData({ ...initialUserData, wasGoogleLoaded: userData.wasGoogleLoaded });
        }, 3000);
      } else {
        alert('You have been successfuly sign up to 4atik!');
        props.history.push('/sign-in');
      }
    }
    if (password && repeatPassword && error) {
      e.preventDefault();
    }
  };

  return (
    <AuthContainer
      subTitleText='We are happy that you decided to join us'
      inputs={[
        { type: 'email', name: 'email', placeholder: 'Email', value: userData.email },
        { type: 'text', name: 'name', placeholder: 'Name', value: userData.name },
        {
          type: 'password',
          name: 'password',
          placeholder: 'Password',
          value: userData.password,
          onBlur: validatePasswords,
        },
        {
          type: 'password',
          name: 'repeatPassword',
          placeholder: 'Repeat Password',
          value: userData.repeatPassword,
          onBlur: validatePasswords,
        },
      ]}
      handleChangeInput={handleChangeInput}
      error={userData.error}
      googleBtn={{ visible: userData.wasGoogleLoaded, onClick: handleImportDataFromGoogle }}
      submitButton={{ onClick: signUp, textContent: 'Sign Up' }}
      redirectLink={{ path: '/sign-in', textContent: 'I already have an account' }}
    />
  );
};

export default SignUp;
