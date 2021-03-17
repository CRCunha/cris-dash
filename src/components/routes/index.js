import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Menu from '../menu';
import { isAuthenticated } from './auth';

// Pages
import HomePage from '../pages/homePage';
import UserPage from '../pages/userPage';
import UsersPage from '../pages/usersPage';
import LoginPage from '../pages/loginPage';
import ProductPage from '../pages/productPage';

/* eslint-disable react/prop-types */
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);

const Routes = () => {
  const source = window.location.pathname;
  return (
    <BrowserRouter>
      <div
        style={{
          width: '100vw',
          display: 'flex',
          flexWrap: 'no-wrap',
        }}
      >
        {source !== '/login' ? <Menu /> : null}
        <Switch>
          <PrivateRoute path="/" exact component={HomePage} />
          <PrivateRoute path="/user" exact component={UserPage} />
          <PrivateRoute path="/users" exact component={UsersPage} />
          <PrivateRoute path="/products" exact component={ProductPage} />
          <Route path="/login" exact component={LoginPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
