import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from '../menu';

// Pages
import HomePage from '../pages/homePage';
import UserPage from '../pages/userPage';

const Routes = () => (
  <BrowserRouter>
    <Menu />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/user" exact component={UserPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
