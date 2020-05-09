import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import PrivateRoute from './HOC/PrivateRouter/PrivateRouter';
import SignUp from './containers/sign-up/SignUp';
import SignIn from './containers/sign-in/SignIn';
import System from './containers/system/System';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/sign-up' component={SignUp} exact />
          <Route path='/sign-in' component={SignIn} exact />
          <PrivateRoute path='/' component={System} exact />
          <Redirect to='/sign-up' />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
