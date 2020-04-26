import React, { useState } from 'react';
import AuthContainer from '../../components/auth-container/AuthContainer';
import './style.scss';

const SignIn = () => {
  const [state, setstate] = useState({ email: '', password: '', error: '' });

  const handleChangeInput = ({ target: { name, value } }) => setstate({ ...state, [name]: value });

  const signIn = (e) => {
    const { email, password, error } = state;
    if (email && password && !error) {
      e.preventDefault();
      console.log('try to sign in', state);
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

  // return (
  //   <SignBackground>
  //     <div className='sign-container'>
  //       <h1 className='sign-title'>
  //         Welcome to <span>4atik</span> !
  //       </h1>
  //       <h4 className='sign-sub-title'>We are happy that you are with us</h4>
  //       <form className='sign-form'>
  //         <AuthInput
  //           type='email'
  //           name='email'
  //           value={state.email}
  //           onChange={handleChangeInput}
  //           placeholder='Email'
  //         />
  //         <AuthInput
  //           type='password'
  //           name='password'
  //           onChange={handleChangeInput}
  //           placeholder='Password'
  //         />
  //         <p className='sign-error'>{state.error}</p>
  //         <AuthButton type='submit' onClick={signIn}>
  //           Sign In
  //         </AuthButton>
  //       </form>
  //       <Link to='/sign-up' className='sign-link'>
  //         I dont have an account, sign up now
  //       </Link>
  //     </div>
  //   </SignBackground>
  // );
};

export default SignIn;
