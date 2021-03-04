import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import history from '../components/routes/history';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor = process.env.NODE_ENV === 'development' ? null : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(
        // console.tron.createEnhancer(),
        applyMiddleware(...middlewares)
      )
    : // ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
      applyMiddleware(...middlewares);

const store = createStore(rootReducer(history), compose(enhancer));

sagaMiddleware.run(rootSaga);

export default store;
