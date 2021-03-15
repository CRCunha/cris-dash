import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import app from './app/reducer';
import user from './user/reducer';
import products from './products/reducer';

export default (history) =>
  combineReducers({
    app,
    user,
    products,
    router: connectRouter(history),
  });
