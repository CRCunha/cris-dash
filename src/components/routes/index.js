import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './auth';

// Pages
import HomePage from '../pages/homePage';
import LoginPage from '../pages/loginPage';

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
  return (
    <BrowserRouter>
      <div
        style={{
          width: '100vw',
          display: 'flex',
          flexWrap: 'no-wrap',
        }}
      >
        {/* {source !== '/login' ? <Menu /> : null} */}
        <Switch>
          <PrivateRoute path="/" exact component={HomePage} />
          <Route path="/login" exact component={LoginPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
