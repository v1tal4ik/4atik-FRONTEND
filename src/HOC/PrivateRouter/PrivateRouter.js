import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  try {
    const id = useSelector((state) => state.user.id);
    const tokens = JSON.parse(localStorage.getItem(id));
    if (!tokens) {
      throw new Error();
    }
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  } catch (e) {
    return <Redirect to='/sign-in' />;
  }
};

export default withRouter(PrivateRoute);
