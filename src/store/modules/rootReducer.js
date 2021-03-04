import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import app from './app/reducer';
import user from './user/reducer';

export default (history) =>
  combineReducers({
    app,
    user,
    router: connectRouter(history),
  });
