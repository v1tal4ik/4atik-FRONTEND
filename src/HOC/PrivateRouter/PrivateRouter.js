import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  try {
    // TODO get user id from store and use for LocalStorage
    const tokens = JSON.parse(localStorage.getItem('auth'));
    if (!tokens) {
      throw new Error();
    }
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  } catch (e) {
    return <Redirect to='/sign-in' />;
  }
};

export default withRouter(PrivateRoute);
