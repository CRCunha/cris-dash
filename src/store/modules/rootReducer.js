import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import app from './app/reducer';

export default (history) =>
  combineReducers({
    app,
    router: connectRouter(history),
  });
