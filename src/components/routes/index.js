import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from '../menu';

// Pages
import HomePage from '../pages/homePage';
import UserPage from '../pages/userPage';
import UsersPage from '../pages/usersPage';
import LoginPage from '../pages/loginPage';

export default function Routes() {
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
          <Route path="/" exact component={HomePage} />
          <Route path="/user" exact component={UserPage} />
          <Route path="/users" exact component={UsersPage} />
          <Route path="/login" exact component={LoginPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
