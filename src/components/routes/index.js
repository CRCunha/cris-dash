import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from '../menu';

// Pages
import HomePage from '../pages/homePage';
import UserPage from '../pages/userPage';
import UsersPage from '../pages/usersPage';

const Routes = () => (
  <BrowserRouter>
    <div
      style={{
        width: '100vw',
        display: 'flex',
        flexWrap: 'no-wrap',
      }}
    >
      <Menu />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/user" exact component={UserPage} />
        <Route path="/users" exact component={UsersPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
